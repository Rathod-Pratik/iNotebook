# Use the official Node.js image as the base
FROM node:21.2.0-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json into the container
COPY package.json package.json
COPY package-lock.json package-lock.json

# Install the dependencies (production dependencies only)
RUN npm install 

# Copy all the remaining application files into the /app directory
COPY . .

# Expose the port the app will run on (change this based on your app)
EXPOSE 5000

# Command to run the app (modify based on your app's entry point)
CMD ["npm", "start"]
