# Usa una imagen base de Node.js
FROM node:18

# Crea un directorio dentro del contenedor
WORKDIR /app

# Copia los archivos de dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código
COPY . .

# Expone el puerto 3000
EXPOSE 3000

# Comando que ejecuta tu API
CMD ["node", "server.js"]
