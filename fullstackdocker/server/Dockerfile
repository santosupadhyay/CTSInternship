# Use the same Node.js version as your local environment
FROM node:22-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Expose the application port
EXPOSE 8080

# Start the application
CMD ["npm", "run", "dev"]
