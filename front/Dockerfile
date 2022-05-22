# Use the latest image from node 
FROM node:latest

# Create a DIR
RUN mkdir /usr/src/app

# set the working dir for the next commands
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# copy package.json (only) to /usr/src/app/package.json
COPY package.json /usr/src/app/package.json

# install dependencies in a silent mode
RUN npm install --silent
