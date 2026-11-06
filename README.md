# ORI

**ORI** é um museu virtual 3D desenvolvido com Vue 3, Three.js e TypeScript, com o objetivo de proporcionar uma experiência imersiva de exploração e interação com exposições em um ambiente tridimensional.

## Tecnologias

<div align="center">

### Frontend

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" height="45" alt="Vue.js" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" height="45" alt="TypeScript" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg" height="45" alt="Three.js" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" height="45" alt="Vite" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" height="45" alt="Tailwind CSS" />

### Ferramentas

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pnpm/pnpm-original.svg" height="40" alt="pnpm" />

</div>

| Tecnologia | Finalidade |
|---|---|
| **Vue 3** | Construção da interface. |
| **Three.js** | Renderização e gerenciamento do ambiente 3D. |
| **TypeScript** | Tipagem estática e segurança no desenvolvimento. |
| **Vite** | Ferramenta de desenvolvimento e build. |
| **Tailwind CSS** | Estilização da interface. |
| **shadcn-vue** | Componentes de interface. |
| **Zod** | Validação e estruturação de dados. |
| **Lucide Vue** | Biblioteca de ícones. |
| **pnpm** | Gerenciamento de dependências. |

## Requisitos

- [Node.js](https://nodejs.org/) (versão LTS).
- [pnpm](https://pnpm.io/).

## Instalação

Clone o repositório:

```bash
git clone <URL_DO_REPOSITORIO>
cd ori
```

Instale o pnpm, caso ainda não esteja instalado:

```bash
npm install -g pnpm
```

Instale as dependências:

```bash
pnpm install
```

## Desenvolvimento

Inicie o servidor de desenvolvimento:

```bash
pnpm dev
```

O Vite disponibilizará um endereço local, geralmente:

```text
http://localhost:5173
```

Para abrir o projeto automaticamente no navegador, pressione `o` no terminal após iniciar o servidor.

## Build

Gere a versão de produção:

```bash
pnpm build
```

Visualize localmente a versão gerada:

```bash
pnpm preview
```

## Outros comandos

| Comando | Descrição |
|---|---|
| `pnpm type-check` | Verifica os tipos TypeScript. |
| `pnpm build` | Gera os arquivos de produção. |
| `pnpm preview` | Executa uma prévia da versão de produção. |

## Estrutura do projeto

```text
src/
├── app/          # Aplicação e configurações principais
├── components/   # Componentes reutilizáveis da interface
├── features/     # Funcionalidades da aplicação
├── three/        # Sistemas e elementos do ambiente 3D
├── data/         # Dados das exposições e ambientes
├── composables/  # Lógica reutilizável do Vue
├── schemas/      # Validação de dados com Zod
├── types/        # Definições de tipos TypeScript
├── utils/        # Funções auxiliares
└── styles/       # Estilos globais e Design System

public/
└── assets/       # Modelos, imagens, texturas e outros recursos
```

## Licença

Este projeto está em desenvolvimento.