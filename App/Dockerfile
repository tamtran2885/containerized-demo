# Tell Docker that you want to use the node:current-slim image as the base for new app
# Applications need an OS to run on
FROM node:current-slim

# Copy source code of app and dependencies from current directory (.) into /src in node:current-slim inage
COPY . /src

# RUN sintruction tell Docker to run an npm install within /src directory
RUN cd /src; npm install

# EXPOSE instruction lists the network port the application will listen on
EXPOSE 8080

# CMD instruction is the main application process that will run when Kubernetes starts the container
CMD cd /src && node ./index.js



