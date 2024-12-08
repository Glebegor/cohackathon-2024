# Use the official Node.js image
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json first (for better caching)
COPY package.json package-lock.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Install TypeScript and ts-node globally (if needed)
RUN npm install -g ts-node typescript

# Generate Prisma client
RUN npx prisma generate

# Run the Prisma seeding script using ts-node (without --loader ts-node/esm)
RUN npx prisma migrate dev --name init
RUN npx ts-node prisma/seed.ts
