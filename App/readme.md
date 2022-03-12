## Start the application

npm init
npm install express pug

## Containerize application, build and host the image

### Build the image

- use Dockerfile to create a container image for the app

docker build
docker image build -t {DockerHubId}/qsk-test:1.0 .
docker image ls

### Host the image on a registry

docker login --username <DockerHubId>

docker image push {DockerHubId}/qsk-test:1.0

### Check if the image has been hosted on DockerHub

Go to hub.docker.com to check if the image is present
