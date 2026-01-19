🏦 Dio Bank - Sistema de Login Bancário
📋 Sobre o Projeto
  Aplicação web de um banco digital desenvolvida como projeto de estudo, focada em autenticação de usuários e gerenciamento de sessão. O sistema simula um ambiente bancário básico com login seguro e visualização de dados da conta.
Desenvolvido por: Júlio César

🎯 Objetivos do Projeto
  O projeto foi desenvolvido para aplicar e consolidar conhecimentos em:

    ✅ React com TypeScript - Desenvolvimento de interfaces tipadas e seguras
    ✅ React Hooks - Gerenciamento de estado com useState e useContext
    ✅ React Router - Navegação entre páginas e rotas protegidas
    ✅ Chakra UI - Design system para interfaces modernas
    ✅ Testes Unitários - Jest e Testing Library para garantia de qualidade
    ✅ LocalStorage - Persistência de sessão do usuário
    ✅ Async/Await - Simulação de chamadas de API
    ✅ Context API - Gerenciamento de estado global


🚀 Funcionalidades Implementadas
  1. Sistema de Autenticação
  
    Login com validação de credenciais (nome, email e senha)
    Validação de campos vazios e espaços em branco
    Mensagens de erro personalizadas para cada tipo de validação
    Estado de carregamento durante a autenticação

  2. Proteção de Rotas
  
    Redirecionamento automático para home se não autenticado
    Validação de ID do usuário na URL
    Proteção contra acesso não autorizado

  3. Área Logada
  
    Visualização de saldo da conta
    Exibição de data e hora de acesso
    Mensagem personalizada de boas-vindas
    Botão de logout com limpeza de sessão

  4. Persistência de Sessão

    Uso de LocalStorage para manter usuário logado
    Recuperação automática de sessão ao recarregar a página
    Limpeza de dados ao fazer logout


🛠️ Tecnologias Utilizadas
  Frontend

    React 18.2.0 - Biblioteca para construção de interfaces
    TypeScript 4.7.4 - Superset JavaScript com tipagem estática
    React Router DOM 6.20.0 - Gerenciamento de rotas

  UI/UX

    Chakra UI 2.10.9 - Component library
    Emotion 11.14.0 - CSS-in-JS
    Styled Components 5.3.5 - Estilização de componentes

  Testes

    Jest 27.5.2 - Framework de testes
    Testing Library 13.3.0 - Testes de componentes React

  Build & Deploy

    React Scripts 5.0.1 - Create React App
    Netlify - Hospedagem e deploy contínuo


📁 Estrutura do Projeto
  src/
  ├── components/
  │   ├── AppContext.tsx       # Context API para estado global
  │   ├── Button.tsx           # Componente de botão reutilizável
  │   ├── Card.tsx             # Container principal
  │   ├── CardInfo.tsx         # Card de informações
  │   ├── Header.tsx           # Cabeçalho com logout
  │   └── Layout.tsx           # Layout base da aplicação
  ├── pages/
  │   ├── home.tsx             # Página de login
  │   └── conta.tsx            # Página da conta (protegida)
  ├── services/
  │   ├── login.tsx            # Lógica de autenticação
  │   ├── login.test.tsx       # Testes do login
  │   ├── storage.tsx          # Gerenciamento de LocalStorage
  │   └── storage.test.tsx     # Testes do storage
  ├── api.ts                   # Simulação de API
  ├── router.tsx               # Configuração de rotas
  └── App.tsx                  # Componente principal

🧪 Testes Implementados
  Testes de Login (11 casos de teste)

    ✅ Login com sucesso
    ✅ Validação de nome vazio
    ✅ Validação de email vazio
    ✅ Validação de senha vazia
    ✅ Email inválido
    ✅ Senha inválida
    ✅ Nome inválido
    ✅ Campo com apenas espaços (3 testes)

  Testes de Storage (3 casos de teste)

    ✅ Recuperação de dados do localStorage
    ✅ Criação de objeto no localStorage
    ✅ Alteração de valores no localStorage

  Cobertura de Testes: 100% nas funções críticas

💻 Como Executar o Projeto
  Pré-requisitos

  Node.js 16+
  npm ou yarn

  Instalação

  Clone o repositório

  bashgit clone [seu-repositorio]
  cd dio-bank

  Instale as dependências

  bashnpm install

  Execute o projeto em desenvolvimento

  bashnpm start

  Execute os testes

  bashnpm test

  Gere o build de produção

  bashnpm run build

🔐 Credenciais de Teste
  Para testar a aplicação, use as seguintes credenciais:

    Nome: Julio
    Email: julio@gmail.com
    Senha: 123456


📚 Conceitos Aplicados
  TypeScript

    Interfaces para tipagem de dados
    Tipos primitivos e complexos
    Generics em hooks do React

  React Patterns

    Custom Hooks (useLogin)
    Context API para estado global
    Componentes controlados (formulários)
    Composição de componentes

  Boas Práticas

    Separação de responsabilidades (SoC)
    Validação de dados no frontend
    Tratamento de erros
    Code splitting por rotas
    Componentização reutilizável

  Segurança

    Proteção de rotas privadas
    Validação de inputs
    Sanitização de dados
    Headers de segurança


🎓 Aprendizados
  Durante o desenvolvimento deste projeto, foram consolidados conhecimentos em:

  Gerenciamento de Estado

    useState para estados locais
    useContext para estado global
    Persistência com LocalStorage


  Navegação e Rotas

    React Router DOM
    Rotas protegidas
    Redirecionamentos condicionais


  Validação e Segurança

    Validação de formulários
    Proteção contra acessos não autorizados
    Sanitização de inputs


  Testes Automatizados

    Jest para testes unitários
    Mocking de funções e módulos
    TDD (Test-Driven Development)


  Deploy e CI/CD

    Configuração Netlify
    Build optimization
    Deploy contínuo




🚀 Deploy
  O projeto está configurado para deploy automático no Netlify.
  
  Configurações:
  
    Build Command: npm run build
    Publish Directory: build
    Node Version: 18

  O arquivo netlify.toml contém todas as configurações necessárias, incluindo:

    Redirects para SPA (Single Page Application)
    Headers de segurança
    Variáveis de ambiente


🔄 Melhorias Futuras

  Possíveis expansões do projeto:

    Implementar recuperação de senha
    Adicionar validação de email com regex
    Criar sistema de múltiplos usuários
    Implementar transações bancárias
    Adicionar histórico de transações
    Implementar dark mode
    Adicionar animações de transição
    Integrar com API real
    Implementar refresh token
    Adicionar autenticação de dois fatores


📄 Licença
  ste é um projeto de estudo desenvolvido para fins educacionais.

👩‍💻 Desenvolvedor e Professora
  Nathally Souza
    GitHub: @nathyts


🙏 Agradecimentos
  Projeto desenvolvido como parte do curso da DIO (Digital Innovation One), aplicando conceitos de React, TypeScript e testes automatizados.

Última atualização: Janeiro 2026