FROM node:14

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .
# 3000 is dafault port
ENV PORT  3000 
EXPOSE $PORT

VOLUME [ "/app/perm" ]

CMD ["npm" ,"start"]
