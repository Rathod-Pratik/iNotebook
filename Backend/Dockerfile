# Use the official Node.js v21.2.0 Alpine image for a smaller image size
FROM node:21.2.0-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first for better caching of dependencies
COPY package*.json ./

# Install dependencies (this will be cached if package.json hasn't changed)
RUN npm install --production

# Copy the rest of the application files
COPY . .

# Expose the port that the app will run on
EXPOSE 3000

# Start the Node.js application
CMD ["node", "index.js"]
