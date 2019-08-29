FROM node:10.16.3-alpine
LABEL maintainer="Douglas Dennys <douglasdennys91@gmail.com>"
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN cp .env.example .env
EXPOSE 3030
RUN npm run build
ENTRYPOINT ["npm", "start"]
