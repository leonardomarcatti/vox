FROM node:25

WORKDIR /app

# habilita pnpm via corepack
RUN corepack enable
RUN corepack prepare pnpm@latest --activate

# copia dependências primeiro (melhor cache)
COPY package.json pnpm-lock.yaml ./

RUN npm -g pnpm

RUN pnpm install

# copia restante do projeto
COPY . .

# agora o frontend realmente usa 3000
EXPOSE 3000