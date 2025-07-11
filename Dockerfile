FROM node:18.20.4

WORKDIR /devfolio

RUN npm install -g pnpm
COPY /package.json .
RUN pnpm install --force 

COPY . ./

EXPOSE 3000

CMD ["pnpm", "run", "devfolio"]



