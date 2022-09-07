FROM node
WORKDIR /
COPY package*.json /
RUN npm install
COPY . ./
EXPOSE 3000
RUN apt-get update
RUN apt-get install lsof