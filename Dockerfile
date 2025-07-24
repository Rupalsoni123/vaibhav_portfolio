FROM node:18.20.4

WORKDIR /portfolio

RUN npm install -g pnpm
COPY /package.json .
RUN pnpm install --force 

COPY . ./

EXPOSE 3000

CMD ["pnpm", "run", "portfolio"]



