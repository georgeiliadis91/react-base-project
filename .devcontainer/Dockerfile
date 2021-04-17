# pull the base image
FROM node:14

EXPOSE 3000:3001

RUN npm install

ENV CHOKIDAR_USEPOLLING=true

CMD ["npm", "start"]