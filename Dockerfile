FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci --only=production && npm ci --only=development --no-cache

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start:dev"]