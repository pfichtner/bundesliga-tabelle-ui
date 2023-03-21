# Build stage
FROM node:14.20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Test stage
FROM build AS test
RUN npm install --only=dev
CMD ["npm", "run", "test"]

# Run stage
FROM nginx:1.21.3-alpine AS run
COPY --from=build /app/dist/* /usr/share/nginx/html/
COPY docker/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

