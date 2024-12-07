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

# Copy the appropriate config file based on NODE_ENV
RUN if [ "$NODE_ENV" = "prod" ]; then \
    mkdir -p /usr/src/app/dist/config && \
    cp ./src/config/config.prod.json /usr/src/app/dist/config/config.dev.json; \
  else \
    mkdir -p /usr/src/app/dist/config && \
    cp ./src/config/config.dev.json /usr/src/app/dist/config/config.dev.json; \
  fi

# Generate the Prisma client (needed for prod as well as dev)
RUN npx prisma generate

# Build the app if in production
RUN if [ "$NODE_ENV" = "prod" ]; then \
  npm run build; \
  fi

# Expose the application port
EXPOSE 5001

# Run the appropriate server command based on NODE_ENV
CMD if [ "$NODE_ENV" = "prod" ]; then \
        make run-prod; \
    else \
        npm run dev; \
    fi

