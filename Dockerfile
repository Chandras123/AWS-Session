FROM node:18-alpine

# Setting up the environment variables needed:
ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0

PATH /usr/chand/repos/AWS-Sessions/NodeJS-Express-API


COPY . /package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "server.js"]