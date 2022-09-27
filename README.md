# Teste Fullstack

Escolha um dos dois pontos para desenvolvimento dependendo da sua preferência. Fazer os dois integrados entre si é um Bônus🏅.

O teste deve ser feito aqui github através de um fork desse repositório e ser compartilhado o link quando finalizado.



1. API JSON RESTful

Desenvolver uma API em Node.js utilizando o framework Express com o CRUD de um modelo de Usuário. Para a persistência dos dados pode ser utilizado qualquer banco de dados, arquivo ou memória. Utilizar MongoDB é um Bônus🏅.

Deve ser utilizado os métodos HTTP GET, POST, PUT, PATCH e DELETE.

2. Interface para acesso de dados

Desenvolver a interface para suportar o CRUD do modelo de Usuário. As telas podem ser feitas com um template simples Bootstrap ou de qualquer outro framework. O sistema deve ser desenvolvido como um SPA utilizando algum dos frameworks Javascript. Desenvolver com Vue.js é um Bônus🏅.

Para a persistência dos dados pode ser utilizado qualquer coisa até mesmo o localstorage.

Modelo de Usuário

O modelo de usuário deve possuir os seguintes dados: name, e-mail, senha, data de nascimento, criado em (data), atualizado em (data). O name dos campos e tipo de dado fica a seu critério.

<hr>

# **Desafio** 

## **Objetivo** 

<p>O objetivo desse desafio era criar uma aplicação Full Stack que realizasse um CRUD para cadastramento de usuários que utilizasse o protocolo HTTP com os seguintes métodos: POST, PATCH, DELETE, GET.</p>

## **Requisitos**

<p>Antes de dar o start na aplicação será necessário que o usuário possua o <strong>Docker</strong> instalado em sua máquina.</p>


## **Dependências** 

### Front - React
<ul>
    <li>HTML</li>
    <li>CSS - Bootstrap</li>
    <li>Javascript</li>
</ul>

### Back - Node JS

<ul>
    <li>Express</li>
    <li>Dotenv</li>
    <li>Cors</li>
    <li>Mongoose</li>
    <li><strike>Nodemon</strike> - dependência de desenvolvimento</li>
</ul>

### Back - Node JS

<ul>
    <li>Express</li>
    <li>Dotenv</li>
    <li>Cors</li>
    <li>Mongoose</li>
    <li><strike>Nodemon</strike> - dependência de desenvolvimento</li>
</ul>

### Banco - MongoDB
<br>

### Ambiente - Docker
<br>
<hr>

## **Start app**
Para darmos start na aplicação é simples, uma vez clonado o repositório. É necessário, na raiz do programa, executar o comando abaixo:
``````
$ docker-compose up
``````

Uma vez conectado, será possível visualizar a aplicação na seguinte URL: 
``````
http://localhost:3000
``````
## **Como utilizar**
<p>Após inicializada, o usuário visualizará um card à esquerda. A primeira atividade a ser feita será cadastrar um novo usuário nesse card e clicar em salvar.</p>
<p>Após a criação do primeiro usuário, esse usuário estará disponível no grid à direita - e todos os usuários criados a seguir. Eles estarão dispostos em formato de grid que é passível de scroll - visto que é uma SPA.</p>
<p>Para atualização dos usuários, os campos disponíveis são: A data de Nascimento e o email. A data de criação e a data de atualização serão setados automaticamente. Para confirmar a atualização dos dados é só clicar fora do campo de texto.</p>
<p>Por fim, para realização da deleção, haverá um pequeno campo com um X no canto superior direito de cada card, é só clicar sobre esse X e o grid será atualizado.</p>
<p>A aplicação está projetada para ser responsiva e responser a diferentes tamanhos de tela.</p>


<hr>

## **Considerações**

<h3>Melhorias previstas:</h3>
<ul>
    <li>Formatar as datas no client-side</li>
    <li>Assim que a aplicação for startada pela primeira vez, criar um usuário de exemplo - a fim de facilitar a visualização do card</li>
</ul>
<br>
<br>

<h3>Sugestões e críticas serão muito bem-vindas! =)</h3>






