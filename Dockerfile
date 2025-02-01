# Stage 1: Build React app
FROM node:21.2.0 AS react-build
WORKDIR /app
COPY app/package*.json ./
RUN npm install
COPY App/ .
RUN npm run build

# Stage 2: Build Node.js backend
FROM node:21.2.0
WORKDIR /backend
COPY backend/package*.json ./
RUN npm install --production
COPY backend/ .
COPY --from=react-build /app/build ./public

EXPOSE $PORT
CMD ["node", "index.js"]