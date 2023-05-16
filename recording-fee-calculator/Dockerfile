# Use an official Node.js runtime as the base image
FROM node:14.17.0-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install -g npm@latest

# Copy the rest of the application code to the container
COPY . .

# Build the Vue.js application
RUN npm run build

# Expose the port on which your application will run (if necessary)
EXPOSE 8080

# Specify the command to run your application
CMD ["npm", "run", "serve"]