FROM node:16 AS appbuild

WORKDIR /usr/src/app
COPY ./front .
ENV API_URL='http://localhost:8083'
RUN npm install
RUN npm run build

FROM nginx:1.22-alpine

RUN mkdir -p /var/www/site
WORKDIR /var/www/site
COPY ./nginx/default.conf /etc/nginx/conf.d/
COPY --from=appbuild /usr/src/app/dist .
