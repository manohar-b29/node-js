# Use official Node.js base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install --production

#env
ENV PORT=8043
# Copy all app files
COPY . .

# Expose the application port (can be overridden later)
EXPOSE 8043

# Start the app
CMD ["npm", "start"]

