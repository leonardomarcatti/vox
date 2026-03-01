<h1>🚀 Vox — Kanban Board (Trello Clone)</h1>
<p>Aplicação full-stack inspirada no Trello, construída para estudar arquitetura moderna, containers Docker e aplicações React orientadas a dados.O Vox é um sistema de gerenciamento de tarefas estilo Kanban, onde usuários podem criar, editar, excluir e arrastar tarefas entre colunas em tempo real, simulando fluxos reais de produtividade.</p>

<h2>✨ Preview</h2>
<p>Login</p>
<img width="600" src="https://github.com/user-attachments/assets/9f57e781-4526-4a0e-b19c-2a8b818e18ed"/>
<p>Cadastro</p>
<img width="600" src="https://github.com/user-attachments/assets/38919455-67d4-4d73-842c-acd3c5630be3"/>
<p>Kanban + Drag & Drop</p>
<img width="600" src="https://github.com/user-attachments/assets/8bb4af14-451b-4541-b5dc-7456bf4b48d0"/>

<h2>⚙️ Rodando o Projeto</h2>
<ol>
   <li>Clone o projeto => git clone https://github.com/leonardomarcatti/vox.git</li>
   <li>Renomeie o arquivo .env.example para .env e lá faça algumas alterações:</li>
   <ol>
      <li>APP_URL=http://localhost:3000</li>
      <li>DB_CONNECTION=mysql</li>
      <li>DB_HOST=vox_db</li>
      <li>DB_PORT=3306</li>
      <li>DB_DATABASE=vox</li>
      <li>DB_USERNAME=vox</li>
      <li>DB_PASSWORD=vox</li>
   </ol>
   <li>Entre na pasta do projeto e execute o comando docker compose up --build -d</li>
   <li>Execuções futuras: docker compose up -d</li>
</ol>

<h2>🧠 Objetivo do Projeto</h2>
<p>Este projeto foi desenvolvido para praticar conceitos utilizados em aplicações profissionais:</p>
<ul>
   <li>Separação real Frontend / Backend / Database</li>
   <li>Arquitetura baseada em containers</li>
   <li>React Router Data API</li>
   <li>Comunicação segura via API REST</li>
   <li>Manipulação avançada de estado sem Redux</li>
   <li>Drag & Drop moderno com alta performance</li>
</ul>
<h2>🏗️ Arquitetura</h2>
Browser <br/>
   ↓<br/>
React (Vite Dev Server)<br/>
   ↓<br/>
Proxy interno<br/>
   ↓<br/>
Laravel API<br/>
   ↓<br/>
MySQL<br/>

<h2>🐳Containers</h2>

<b>|  Serviço  |    Stack     |  Porta  |</b><br/>
| Frontend  | React + Vite | 3000    | <br/>
| Backend   | Laravel API  | 3001    | <br/>
| Database  | MySQL        | 3305    | <br/>


<h2>🧰 Stack Tecnológica</h2>
<h3>🎨 Frontend</h3>
<ul>
   <li>React</li>
   <li>React Router (Loader + Action Pattern)</li>
   <li>Vite</li>
   <li>pnpm</li>
   <li>Bootstrap</li>
   <li>dnd-kit (Drag & Drop engine)</li>
</ul>

<h3>⚙️ Backend</h3>
<ul>
   <li>Laravel 12</li>
   <li>PHP 8.4</li>
   <li>REST API</li>
   <li>Token Authentication</li>
   <li>Eloquent ORM</li>
</ul>

<h3>🗄️ Database</h3>
<ul>
   <li>MySQL</li>
</ul>

<h2>🐳 DevOps</h2>
<ul>
   <li>Docker</li>
   <li>Docker Compose</li>
</ul>
<h2>🎯 Drag & Drop (dnd-kit)</h2>
<p>O Vox utiliza dnd-kit, uma biblioteca moderna baseada em sensores e eventos React.</p>

<h3>Fluxo da movimentação</h3>
<ol>
   <li>Usuário arrasta uma tarefa</li>
   <li>DragOverlay cria preview visual</li>
   <li>onDragEnd identifica origem e destino</li>
   <li>API Laravel recebe atualização de status</li>
   <li>React Router executa revalidate()</li>
   <li>UI sincroniza automaticamente</li>
</ol>

<h2>Por que dnd-kit?</h2>
✅ Performance superior<br/>
✅ Sem dependência da API HTML5 drag<br/>
✅ Total controle via React<br/>
✅ UX fluida e previsível<br/>

<h2>📁 Estrutura</h2>
vox/<br/>
├── frontend/<br/>
│   ├── components/<br/>
│   ├── pages/<br/>
│   ├── utils/<br/>
│   └── routes.jsx<br/>
│<br/>
├── backend/<br/>
│   └── Laravel API<br/>
│<br/>
├── database/<br/>
└── docker-compose.yml<br/>

<h2>🌐 Endpoints</h2>
<p>Serviço Frontend	http://ip:3000</p>
<p>Backend	http://ip:3001</p>
<p>MySQL	ip:3305</p>

<h2>🔄 Integração Frontend ↔ Backend</h2>
<h3>Durante o desenvolvimento:</h3>
<p>fetch('/api/...')</p>
<p>O Vite proxy redireciona automaticamente para o container Laravel.</p>

<h2>✅ Funcionalidades</h2>
<p>✔ Autenticação</p>
<p>✔ CRUD completo de tarefas</p>
<p>✔ Kanban Board</p>
<p>✔ Drag & Drop entre status</p>
<p>✔ Atualização automática de dados</p>
<p>✔ Modais Bootstrap de feedback</p>
<p>✔ Arquitetura desacoplada</p>
<p>❌ Sem Redux — uso do React Router Data Layer</p>
<p>✅ Revalidação automática após mutations</p>
<p>✅ Backend stateless via token</p>
<p>✅ Containers independentes</p>
<p>✅ UI sincronizada com backend</p>


<h2>👨‍💻 Autor</h2>
<p>Leonardo Marcatti => 🔗 https://www.linkedin.com/in/leonardomarcattidasilvalms/</p>