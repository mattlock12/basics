FROM node
RUN mkdir /app

WORKDIR /app

COPY package.json .
COPY package-lock.json .
COPY . .

RUN npm install
