# 📌 Vox — Trello

Vox é uma aplicação web inspirada no **Trello**, criada com o objetivo de estudar arquitetura moderna baseada em containers e separação clara entre frontend, backend e banco de dados.
O projeto simula um sistema de gerenciamento de tarefas em formato **Kanban**, permitindo organizar atividades em quadros, listas e cartões.


## 💻 Screenshots

Login<br/>
<img width="500" height="300" alt="{4A4B1442-2F82-4E4F-B4F8-ACF9313EB9C7}" src="https://github.com/user-attachments/assets/9f57e781-4526-4a0e-b19c-2a8b818e18ed" /><br/>
Logup<br/>
<img width="500" height="300" alt="{4A746814-8A62-4EFD-8DF1-CA245FF7304A}" src="https://github.com/user-attachments/assets/38919455-67d4-4d73-842c-acd3c5630be3" /><br/>
Home<br/>
<img width="500" height="300" alt="{AB34740E-3120-49C2-BB0D-48B3B36EBE10}" src="https://github.com/user-attachments/assets/8bb4af14-451b-4541-b5dc-7456bf4b48d0" /><br/>




## 🧱 Arquitetura

A aplicação é dividida em três containers independentes:

| Serviço        | Tecnologia          | Porta Externa |
| -------------- | ------------------- | ------------- |
| Frontend       | React + Vite + pnpm | 3000          |
| Backend        | Laravel API         | 3001          |
| Banco de Dados | MySQL               | 3305          |

### Fluxo de comunicação

Browser<br/>
   ↓<br/>
React (Vite Dev Server)<br/>
   ↓ <br/>
proxy interno<br/>
   ↓<br/>
Laravel API<br/>
   ↓<br/>
MySQL<br/>

## 🛠️ Tecnologias Utilizadas

### Frontend

* React
* React Router
* Vite
* pnpm
* Fetch API

### Backend

* Laravel 12 (API REST)
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
docker compose up --build<br />
Da próxima vez que subuir a aplicação substitua --build por -d

## 🌐 Acessos

Após iniciar:

* Frontend → [http://ip:3000](http://ip:3000)
* Backend API → [http://ip:3001](http://ip:3001)
* MySQL → ip:3305


## 🔌 Integração Frontend ↔ Backend

O projeto utiliza proxy do Vite durante o desenvolvimento.<br />
No frontend, as requisições são feitas usando: fetch('/api/...')<br />
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
