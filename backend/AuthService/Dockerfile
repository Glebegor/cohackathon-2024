FROM node:latest

# Set working directory
WORKDIR /usr/src/app

# Build argument for NODE_ENV, default to 'prod'
ARG NODE_ENV=prod
ENV NODE_ENV=$NODE_ENV

# Copy necessary configuration files
COPY package*.json tsconfig.json ./

# Install dependencies (relax lockfile constraints for now)
RUN npm install -g npm@10.9.2


# Copy the rest of the application code
COPY . .

# Generate the Prisma client
RUN npx prisma generate

# Build the app for production
RUN if [ "$NODE_ENV" = "prod" ]; then \
    npm run build || exit 1; \
fi


# Run the appropriate server command based on NODE_ENV
CMD if [ "$NODE_ENV" = "prod" ]; then \
        node dist/index.js; \
    else \
        npm run dev; \
    fi
