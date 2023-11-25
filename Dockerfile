FROM node:20-alpine AS builder

WORKDIR app
COPY vendor                         ./vendor/
COPY package.json package-lock.json ./
RUN npm ci
COPY fonts.css                      ./
COPY vite.config.js                 ./
COPY src                            ./src/
RUN npm run build

FROM node:20-alpine

WORKDIR app
COPY --from=builder /app/dist         ./
