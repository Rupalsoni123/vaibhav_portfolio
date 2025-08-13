# Production Dockerfile for Portfolio with Integrated API
FROM node:18.20.4-alpine AS builder

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy package files
COPY package.json pnpm-lock.yaml* ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . ./

# Build the application
RUN pnpm run build

# Production stage
FROM node:18.20.4-alpine AS production

WORKDIR /app

# Install pnpm and curl for health checks
RUN npm install -g pnpm && \
    apk add --no-cache curl bash

# Install Amazon Q CLI (optional)
RUN npm install -g @aws/amazon-q-cli || echo "Amazon Q CLI not available - using fallback mode"

# Copy package files
COPY package.json pnpm-lock.yaml* ./

# Install only production dependencies
RUN pnpm install --prod --frozen-lockfile

# Copy built application and source files
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/vite-api-plugin.js ./
COPY --from=builder /app/vite.config.js ./
COPY --from=builder /app/src ./src
COPY --from=builder /app/public ./public

# Create temp directory for Amazon Q CLI scripts
RUN mkdir -p /tmp && chmod 755 /tmp

# Set environment variables
ENV NODE_ENV=production
ENV AWS_CLI_AUTO_PROMPT=off
ENV AWS_PAGER=""
ENV NO_COLOR=1
ENV TERM=dumb

# Create non-root user for security
RUN addgroup -g 1001 -S nodejs && \
    adduser -S portfolio -u 1001 -G nodejs

# Change ownership of app directory
RUN chown -R portfolio:nodejs /app /tmp

# Switch to non-root user
USER portfolio

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD curl -f   CMD curl -f https://vaibhav-portfolio-cyan.vercel.app/api/health ||  exit 1

# Start the application in production mode
CMD ["pnpm", "run", "preview"]
