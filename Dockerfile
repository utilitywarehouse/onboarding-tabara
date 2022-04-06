FROM node:latest as build
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
CMD ["make", "all"]

FROM nginx:alpine
COPY --from=build /app/dist ./app/static/dist
COPY --from=build /app/index.html ./app/static/index.html
COPY --from=build /app/nginx.conf /etc/nginx/nginx.conf
