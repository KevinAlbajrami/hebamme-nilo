FROM node:18-alpine
WORKDIR /usr/src/app

# Copy root package.json (project dependencies) and install production deps
COPY package*.json ./
# Use npm install; omit dev dependencies in production
RUN npm install --omit=dev

# Copy server code into container
COPY server/ .

ENV NODE_ENV=production
ENV PORT=1337
EXPOSE 1337
CMD ["node", "index.js"]
