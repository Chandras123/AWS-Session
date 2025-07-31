FROM node:18-alpine

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0

# Set working directory inside the container
WORKDIR /usr/src/app

# Copy only package files first for better caching
COPY package*.json ./

# Install only production dependencies
RUN npm install --only=production

# Now copy the rest of the app files
COPY . .

# Expose the application port
EXPOSE 3000

# Run the application
CMD ["node", "server.js"]
