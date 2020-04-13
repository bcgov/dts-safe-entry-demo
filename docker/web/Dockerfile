FROM node:erbium
WORKDIR /app
#  Copy caddyfile for later use in chained build
COPY docker/issuer-web/config/Caddyfile /app/config/Caddyfile
COPY web/package*.json ./
RUN npm install
COPY web/ .
RUN npm run build
