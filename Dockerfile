
# Get light weight Linux distribution with node version 16 installed on it
FROM node:16-alpine 

# Init a working directory on OS
WORKDIR /app

# Copy package.json into working directory
COPY package*.json ./

# Install npm packages
RUN npm install

# Copy files into working directory
COPY . .

# Expose port 3000 from your container to local network
EXPOSE 3000

# Start the development server from your container
CMD npm run dev