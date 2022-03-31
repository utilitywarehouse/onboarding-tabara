FROM node:latest
WORKDIR /app
COPY package.json ./
RUN yarn install
COPY . .
RUN yarn run lint
RUN yarn run build
RUN yarn run test

FROM build
COPY --from=build /app/src ./src
COPY --from=build /app/node_modules ./node_modules
ENV NODE_ENV=production
EXPOSE 8080
CMD ["make", "all"]
