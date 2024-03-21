
FROM node:18-alpine3.16


WORKDIR /app


COPY package*.json ./


RUN npm install

COPY . .


RUN npx prisma migrate deploy && npx prisma generate



EXPOSE 8080


CMD ["npm", "run", "db:migrate:push:start"]
