# Base image
FROM node:18

# Nastavení pracovního adresáře
WORKDIR /usr/src/app

# Definování argumentu pro prostředí
ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV

# Kopírování package.json a package-lock.json (pro optimalizaci cache)
COPY package*.json tsconfig.json ./

# Instalace závislostí (včetně devDependencies pro build fázi)
RUN npm install --include=dev --frozen-lockfile --no-audit

# Kopírování zbytku aplikace
COPY . .

# Provedení migrace a generování Prisma klienta
RUN if [ "$NODE_ENV" = "production" ]; then \
  npx prisma generate; \
else \
  npx prisma generate; \
fi

# Kompilace TypeScript kódu
RUN if [ "$NODE_ENV" = "production" ]; then \
  npm run build; \
fi

# Exponování portu
EXPOSE 5002

# Spuštění serveru
CMD if [ "$NODE_ENV" = "production" ]; then node dist/index.js; else npm run dev; fi
