FROM node:14

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

#EXPOSE 3000
#ENV PORT 3000
#EXPOSE $port

ARG DEFAULT_PORT=3000
ENV PORT ${DEFAULT_PORT}
EXPOSE $port


#VOLUME [ "/app/perm" ]

CMD ["npm" ,"start"]


