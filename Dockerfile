FROM node:latest
WORKDIR /app
COPY package.json ./
RUN yarn install
COPY . .
RUN yarn run lint
RUN yarn run build
RUN yarn run test

FROM dist
COPY --from=dist /app/src ./src
COPY --from=dist /app/node_modules ./node_modules
ENV NODE_ENV=production
EXPOSE 8080
CMD [ "node", "./dist/server.js" ]
