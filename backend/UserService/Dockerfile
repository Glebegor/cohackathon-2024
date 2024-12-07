FROM node:18

# Set working directory
WORKDIR /usr/src/app

# Build argument for NODE_ENV, default to 'prod'
ARG NODE_ENV=prod
ENV NODE_ENV=$NODE_ENV

# Copy necessary configuration files
COPY package*.json tsconfig.json ./



# Copy the rest of the application code
COPY . .

# Install dependencies (including dev dependencies for non-prod builds)
RUN npm install --include=dev --frozen-lockfile --no-audit

# Ensure the necessary directories exist
RUN mkdir -p src/routes

# Debugging: list files to ensure proper copying
RUN ls -la src/routes

# Debugging: list files to ensure proper copying
RUN ls -la src/routes

# Generate the Prisma client (needed for prod as well as dev)
RUN npx prisma generate

# Build the app if in production
RUN if [ "$NODE_ENV" = "prod" ]; then \
    npm run build || exit 1; \
fi

# Expose the application port
EXPOSE 5002

# 4.707 src/server.ts(7,24): error TS2307: Cannot find module './routes/UserRoutes' or its corresponding type declarations.
# 4.707 src/server.ts(8,31): error TS2307: Cannot find module './routes/UserProfileRoutes' or its corresponding type declarations.
# 4.707 src/server.ts(9,30): error TS2307: Cannot find module './routes/ChildHouseRoutes' or its corresponding type declarations.

# Debugging: list files to ensure proper copying


# Run the appropriate server command based on NODE_ENV
CMD if [ "$NODE_ENV" = "prod" ]; then \
        node dist/index.js; \
    else \
        npm run dev; \
    fi
