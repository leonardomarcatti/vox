# 📌 Vox — Trello‑like Task Manager

Vox é uma aplicação web inspirada no **Trello**, criada com o objetivo de estudar arquitetura moderna baseada em containers e separação clara entre frontend, backend e banco de dados.
O projeto simula um sistema de gerenciamento de tarefas em formato **Kanban**, permitindo organizar atividades em quadros, listas e cartões.


## 🧱 Arquitetura

A aplicação é dividida em três containers independentes:

| Serviço        | Tecnologia          | Porta Externa |
| -------------- | ------------------- | ------------- |
| Frontend       | React + Vite + pnpm | 3000          |
| Backend        | Laravel API         | 3001          |
| Banco de Dados | MySQL               | 3305          |

### Fluxo de comunicação

Browser
   ↓
React (Vite Dev Server)
   ↓ proxy interno
Laravel API
   ↓
MySQL

## 🛠️ Tecnologias Utilizadas

### Frontend

* React
* Vite
* pnpm
* Fetch API

### Backend

* Laravel (API REST)
* PHP 8.4
* Eloquent ORM

### Banco de Dados

* MySQL

### Infraestrutura

* Docker
* Docker Compose


## 📂 Estrutura do Projeto

vox/<br />
├── frontend/   # Aplicação React<br />
├── backend/    # API Laravel<br />
├── database/   # Scripts de inicialização<br />
└── docker-compose.yml<br />


## ⚙️ Como Executar o Projeto

### 1️⃣ Clonar o repositório

git clone https://github.com/leonardomarcatti/vox.git<br />
cd vox


### 2️⃣ Subir os containers
docker compose up --build


## 🌐 Acessos

Após iniciar:

* Frontend → [http://ip:3000](http://ip:3000)
* Backend API → [http://ip:3001](http://ip:3001)
* MySQL → ip:3305


## 🔌 Integração Frontend ↔ Backend

O projeto utiliza proxy do Vite durante o desenvolvimento.
No frontend, as requisições são feitas usando: fetch('/api/...')
O Vite redireciona automaticamente para o container do Laravel.

## 📋 Funcionalidades Planejadas

* [ ] Criação de quadros (boards)
* [ ] Listas estilo Kanban
* [ ] Cartões de tarefas
* [ ] Drag & Drop
* [ ] API REST completa
* [ ] Autenticação de usuários


## 👨‍💻 Autor
Desenvolvido por <a href='https://www.linkedin.com/in/leonardomarcattidasilvalms/' target='_blank'>Leonardo Marcatti</a>.


## 📄 Licença
Projeto criado para fins profissionais.
