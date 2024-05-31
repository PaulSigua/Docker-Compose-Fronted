FROM node:16-alpine AS build-angular
WORKDIR /app
COPY ./package.json /app
RUN npm install
COPY ./ /app
RUN npm run build --prod

# Copiamos las direcciones de angular y nodejs en los files de la imagen
FROM nginx:1.17.1-alpine
WORKDIR /usr/share/nginx/html
COPY --from=build-angular /app/dist/Cliente .

# puertos a exponer
EXPOSE 80

# Comando para iniciar ambos servidores
CMD ["nginx", "-g","daemon off;"]