# Warehouse frontend demo

The app is deployed both to Vercel and Google Cloud

Vercel [here](https://warehouse-frontend-lukyrasocha.vercel.app/)

GCP [here](https://warehouse-frontend-ouh3cj4nwa-ew.a.run.app/)


## To deploy the app to Google Cloud

### Build the image

```
docker build --tag nextjs-docker .
```
### Run the container

To publish a port for our container, we’ll use the `--publish` flag (`-p` for short) on the docker run command. The format of the `--publish` command is `[host port]:[container port]`. So, if we wanted to expose port 80 inside the container to port 5000 outside the container, we would pass 5000:80 to the `--publish` flag. Run the container using the following command:

```
 docker run --publish 3000:3000 nextjs-docker
```
Meaning that inside the container it listens on port 3000 but accessing it from outside it is on port 3000

### Deploy

Next you can either push the image to an Artifact Registry on GCP from where you can take the image and deploy it using `Cloud Run`

Alternatively, for full CI&CD, you can connect this repo with `Cloud Build` and point to the location of the Dockerfile, then on each new change and push to the main branch, the image is automatically re-built and re-deployed.
