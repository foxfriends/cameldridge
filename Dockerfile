FROM ghcr.io/foxfriends/scheduler AS scheduler
FROM node:20

WORKDIR /app

COPY vendor     ./vendor/

COPY package.json package-lock.json ./
RUN npm ci
COPY fonts.css vite.config.js   ./
COPY src                        ./src/

COPY --from=scheduler /public ./public/scheduler/

RUN npm run build
