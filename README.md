# Lista de Amigos em React + Express + Docker 😇

Essa aplicação foi desenvolvida para um **teste de entrevista** para a empresa **[Atlas GR](https://www.atlasgr.com.br/)**, usando as seguintes tecnologias:

- React
- Express
- Docker
- MongoDB

Além disso, foram usados os seguintes pacotes: PM2, NodeMon, Jest, BCrypt, Cors, Envalid, Helmet, Hpp, JWT, Morgan, Winston, Compression, Class-Validator, SCSS, Mui, ApiSauce e React-Router-Dom.

### ⚠️ **ALERTA!** ⚠️

Pode parecer que essa aplicação é um **OVER ENGINEERING**, mas é só para mostrar que eu sei usar essas tecnologias. 😎

Alguns pacotes instalados no Back-End não foram usados, como o BCrypt, e eu removi eles já que a aplicação não os utilizava, mas, em breve vou disponibilizar meus **Boilerplates pessoais** com tudo pre-configurado.

[![Linkedin Badge](https://img.shields.io/badge/-João%20Pster-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/joaopster/)](https://www.linkedin.com/in/joaopster/) [![GitHub João Pster](https://img.shields.io/github/followers/J-Pster?label=follow&style=social)]()

![Preview](https://i.imgur.com/Hz5fTZB.png)

## 🚀 **Como rodar a aplicação? (Com Docker)**

### **Pré-requisitos**

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Node.js](https://nodejs.org/en/)

### **Rodando a aplicação com Docker!**

```bash
# Clone este repositório
$ git clone <ssh>

# Acesse a pasta do projeto no terminal/cmd
$ cd MeusAmigos-Desafio-Atlas

# Rode meu script para instalar as dependências e copiar os .env
# Pode demorar um pouco, mas fica frio!
$ npm run preinstall

# Rode o Docker Compose
$ npm run compose:up
```

#### Comandos úteis

```bash
# Para iniciar a aplicação normalmente
$ npm run compose:up

# Para iniciar a aplicação E FAZER REBUILD!
$ npm run compose:up:rebuild

# Para desligar a aplicação
$ npm run compose:down

# Para desligar a aplicação E REMOVER OS ORFÃOS!
$ npm run compose:down:orphans
```

## 🚗 **Como rodar a aplicação? (Sem o Docker)**

Olha, eu não recomendo fazer isso, mas caso a minha automação de **Docker Compose** não funciona, coisa que já aconteceu comigo, você pode rodar a aplicação sem Docker.

#### Instalando as dependências

```bash
# Clone este repositório
$ git clone <ssh>

# Acesse a pasta do projeto no terminal/cmd
$ cd MeusAmigos-Desafio-Atlas

# Rode meu script para instalar as dependências e copiar os .env
# Pode demorar um pouco, mas fica frio!
$ npm run preinstall
```

#### Iniciando um servidor MongoDB

Você vai precisar ter um servidor MongoDB instalado na sua máquina, ou então, as credenciais de um servidor MongoDB na nuvem.

#### Adicionando as variáveis de ambiente

##### Back-End

1. Vá até `./backend` e acesse todos os arquivos `.env` e altere as variáveis de ambiente para as suas credenciais.

Você só vai precisar de **HOST, PORT E DATABASE**.
O arquivo que cria a conexão com o banco de dados é o `./backend/src/database/index.ts`, caso queira dar uma olhada.

##### Front-End

1. Vá até `./frontend` e acesse todos os arquivos `.env` e altere a REACT_APP_BASE_URL para a URL do seu Back-End e a PORT para a porta que você quer que o Front-End rode, caso queira mudar.

#### Iniciando o Back-End

```bash
# Acesse a pasta do Back-End
$ cd backend

# Rode o servidor
$ npm run dev

# Ou rode como start
$ npm run start
```

#### Iniciando o Front-End

```bash
# Acesse a pasta do Front-End
$ cd frontend

# Rode o servidor
$ npm run start
```

## 📝 **Licença**

Este projeto esta sobe a licença [MIT](./LICENSE).

Feito com ❤️ por **[João Pster](https://joaopster.com.br/)**.
