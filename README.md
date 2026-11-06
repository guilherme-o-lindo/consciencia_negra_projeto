# ORI

**ORI** é um museu virtual 3D desenvolvido com Vue 3, Three.js e TypeScript, com o objetivo de proporcionar uma experiência imersiva de exploração e interação com exposições em um ambiente tridimensional.

## Tecnologias

### Core

<table>
  <tr>
    <td align="center" width="120">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" width="40" height="40" alt="Vue.js"><br>
      <b>Vue 3</b>
    </td>
    <td align="center" width="120">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg" width="40" height="40" alt="Three.js"><br>
      <b>Three.js</b>
    </td>
    <td align="center" width="120">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="40" height="40" alt="TypeScript"><br>
      <b>TypeScript</b>
    </td>
  </tr>
</table>

### Interface e estilização

<table>
  <tr>
    <td align="center" width="120">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" width="40" height="40" alt="Tailwind CSS"><br>
      <b>Tailwind CSS</b>
    </td>
    <td align="center" width="120">
      <b>shadcn-vue</b>
    </td>
    <td align="center" width="120">
      <b>Lucide Vue</b>
    </td>
  </tr>
</table>

### Ferramentas

<table>
  <tr>
    <td align="center" width="120">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" width="40" height="40" alt="Vite"><br>
      <b>Vite</b>
    </td>
    <td align="center" width="120">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pnpm/pnpm-original.svg" width="40" height="40" alt="pnpm"><br>
      <b>pnpm</b>
    </td>
    <td align="center" width="120">
      <b>Zod</b>
    </td>
  </tr>
</table>

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