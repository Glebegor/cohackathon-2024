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
RUN npx prisma generate

# Build the app if in production
RUN if [ "$NODE_ENV" = "prod" ]; then \
    npm run build || exit 1; \
fi


# Expose the application port
EXPOSE 5002

# Run the appropriate server command based on NODE_ENV

CMD if [ "$NODE_ENV" = "prod" ]; then \
        node dist/index.js; \
    else \
        npm run dev; \
    fi

