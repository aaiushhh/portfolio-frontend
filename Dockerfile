FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Expose the port your dev server runs on (Vite: 5173, React: 3000)
EXPOSE 5173

# Run the development server
CMD ["npm", "run", "dev"]
