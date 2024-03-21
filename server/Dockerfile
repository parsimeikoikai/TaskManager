# Use official Node.js image as base
FROM node:18-alpine3.16

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the application
COPY . .

# Generate Prisma Client
RUN npx prisma generate

# Expose the port your app runs on
EXPOSE 8080

# Command to run the application
CMD ["npm", "start"]
