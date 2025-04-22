#Using official Node.js image
FROM node:18-alpine

#Setting Work directory
WORKDIR /app

#Copying package.json for dependencies
COPY package*.json .

#Installs all dependencies
RUN npm install

#Copying application code
COPY . .

#Specifying start command to start backend server
CMD ["node","server.js"]


