FROM node:24

WORKDIR /app

# ativa pnpm
RUN corepack enable
RUN corepack prepare pnpm@latest --activate

# copia SOMENTE dependências primeiro (cache do docker)
COPY package.json pnpm-lock.yaml ./


RUN pnpm install

# copia restante do projeto
COPY . .

EXPOSE 3000