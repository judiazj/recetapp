# Usa una imagen base de Node.js
FROM node:20-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el package.json y el package-lock.json al directorio de trabajo
COPY package*.json ./

# Instala las dependencias de la aplicación
RUN npm install

# Copia el resto de la aplicación al directorio de trabajo
COPY . .

# Compila el código TypeScript a JavaScript
RUN npm run build

# Define el comando predeterminado para ejecutar la aplicación 
CMD [ "npm", "run", "start:prod" ]