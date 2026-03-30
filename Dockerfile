# -------- Build Stage --------
FROM node:22.19.0-slim AS builder

WORKDIR /app

# Copy dependency files
COPY package.json package-lock.json ./

# Install dependencies (using npm since package-lock.json exists)
RUN npm ci

# Copy source code
COPY . ./

# Build the app
RUN npm run build


# -------- Production Stage --------
FROM node:22.19.0-slim

WORKDIR /app

# Install only required runtime tools (using apt-get for slim images)
RUN npm install -g serve && \
    apt-get update && \
    apt-get install -y wget && \
    rm -rf /var/lib/apt/lists/*

# Copy only built files from builder
COPY --from=builder /app/dist ./dist

# Environment variables
ENV NODE_ENV=production

# Create non-root user for security
RUN groupadd -r nodejs && useradd -r -g nodejs portfolio

# Switch to non-root user
USER portfolio

# Expose port
EXPOSE 3000

# Healthcheck (lightweight)
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000 || exit 1

# Start static server
CMD ["serve", "-s", "dist", "-l", "3000"]