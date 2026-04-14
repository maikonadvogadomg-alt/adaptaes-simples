# SK Code Editor â VersÃ£o Vercel

Editor de cÃ³digo profissional mobile-first com IA (Jasmim), GitHub integration, terminal virtual, live preview, e muito mais. Desenvolvido para Saulo Kenji.

## Como fazer deploy no Vercel

### 1. PrÃ©-requisitos
- Conta no [Vercel](https://vercel.com) (grÃ¡tis)
- [Node.js 18+](https://nodejs.org) instalado localmente (para testar)
- [Git](https://git-scm.com) instalado

### 2. Preparar o projeto

```bash
# Instalar dependÃªncias
npm install

# Testar localmente
npm run dev
```

### 3. Deploy via GitHub (recomendado)

1. Crie um repositÃ³rio no GitHub e faÃ§a push desta pasta
2. Acesse [vercel.com](https://vercel.com) â "New Project"
3. Conecte seu repositÃ³rio GitHub
4. Vercel detecta automaticamente que Ã© um projeto Vite
5. Configure as variÃ¡veis de ambiente (ver abaixo)
6. Clique em "Deploy"

### 4. Deploy via Vercel CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Fazer deploy
vercel

# Para produÃ§Ã£o
vercel --prod
```

### 5. VariÃ¡veis de Ambiente no Vercel

Para que a voz da IA (Jasmim) funcione, configure:

| VariÃ¡vel | DescriÃ§Ã£o |
|----------|-----------|
| `OPENAI_API_KEY` | Sua chave da OpenAI (para TTS/STT da Jasmim) |

**Como configurar no Vercel:**
1. Acesse seu projeto no dashboard do Vercel
2. VÃ¡ em "Settings" â "Environment Variables"
3. Adicione `OPENAI_API_KEY` com sua chave

> **Sem esta chave:** O editor funciona normalmente. Apenas a voz neural da Jasmim (TTS/STT) fica indisponÃ­vel. A IA ainda funciona por texto com as chaves configuradas no painel de configuraÃ§Ãµes do app.

### 6. O que funciona no Vercel

â Monaco Editor completo  
â Sistema de arquivos virtual  
â IA Jasmim (chat por texto â configure suas chaves no app)  
â Voz da Jasmim (precisa de OPENAI_API_KEY no servidor)  
â GitHub integration (PAT â configure no painel GitHub do app)  
â ZIP import/export  
â Live preview HTML/CSS/JS  
â Busca web (DuckDuckGo)  
â Busca de pacotes npm  
â PWA (instalÃ¡vel no celular)  
â ï¸ Terminal real â nÃ£o disponÃ­vel no Vercel (serverless nÃ£o suporta PTY)

### 7. Configurando a IA no app

ApÃ³s o deploy:
1. Abra o app â Ã­cone de configuraÃ§Ãµes
2. Adicione suas chaves de API:
   - **OpenAI** (GPT-4o, etc)
   - **Anthropic** (Claude)
   - **Google** (Gemini)
   - **Custom** (OpenRouter, etc)

---

Feito com â¤ï¸ para Saulo Kenji.
