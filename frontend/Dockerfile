FROM node:25

WORKDIR /app

# instala pnpm globalmente
RUN npm install -g pnpm

# copia dependências primeiro (cache de build)
COPY package.json pnpm-lock.yaml ./

RUN pnpm install

# copia restante do projeto
COPY . .

EXPOSE 3000