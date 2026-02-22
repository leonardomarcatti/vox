#!/bin/sh
set -e

# Espera o banco estar disponível
echo "⏳ Aguardando banco de dados..."
./wait-for-it.sh vox_db:3306 --timeout=30 --strict -- echo "✅ Banco disponível"

# Roda as migrations sempre
echo "🚀 Rodando migrations..."
php artisan migrate --force

# Verifica se existe algum usuário no banco (ajuste para sua tabela principal)
USER_COUNT=$(php artisan tinker --execute="echo \App\Models\User::count();")

if [ "$USER_COUNT" -eq "0" ]; then
  echo "🎉 Banco vazio, rodando seeders..."
  php artisan db:seed
else
  echo "🔹 Banco já possui dados, pulando seeders."
fi

# Inicia o servidor
echo "🚀 Iniciando servidor Laravel..."
php artisan serve --host=0.0.0.0 --port=8000