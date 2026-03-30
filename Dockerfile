# ---- Stage 1: Build ----
FROM node:20-alpine AS build
WORKDIR /app

# Copy package.json and install deps
COPY package*.json ./
RUN npm install

COPY . .

# Build Vite app
RUN npm run build

# ---- Stage 2: Serve with Nginx ----
FROM nginx:alpine

# Copy build output
COPY --from=build /app/dist /usr/share/nginx/html/Psg-Indutech

EXPOSE 8081
CMD ["nginx", "-g", "daemon off;"]
