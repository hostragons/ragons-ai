FROM node:20-slim AS builder

# Install build dependencies for node-pty
RUN apt-get update && apt-get install -y \
    python3 \
    make \
    g++ \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY package*.json ./
RUN npm install

FROM node:20-slim

RUN apt-get update && apt-get install -y \
    python3 \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY . .

# Create necessary directories
RUN mkdir -p data sessions

EXPOSE 8787
ENV NODE_ENV=production
ENV PORT=8787

CMD ["node", "server.js"]
