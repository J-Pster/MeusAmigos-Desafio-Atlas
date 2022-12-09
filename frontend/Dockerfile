## We install nodejs in order to run the application
FROM node:lts-alpine

## Create the folder for the application
WORKDIR /app

## Copy the package.json in order to install the necessary dependencies
COPY ./package.json .

RUN mkdir -p /app/node_modules
RUN chown node:node /app/node_modules

## We install the dependencies
RUN npm install

## Copy everything to the application
COPY . /app

## Expose the port
EXPOSE 4200

## Run the application
CMD npm run start