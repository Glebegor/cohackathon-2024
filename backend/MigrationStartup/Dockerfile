FROM node:18

# Set working directory
WORKDIR /usr/src/app

# Build argument for NODE_ENV, default to 'prod'
ARG NODE_ENV=prod
ENV NODE_ENV=$NODE_ENV

# Copy necessary configuration files
COPY package*.json tsconfig.json ./

# Install dependencies (including dev dependencies for non-prod builds)
RUN npm install --include=dev --frozen-lockfile --no-audit

# Copy the rest of the application code
COPY . .

# Generate the Prisma client (needed for prod as well as dev)
RUN npx prisma migrate deploy
RUN npx prisma generate
RUN npx prisma db seed