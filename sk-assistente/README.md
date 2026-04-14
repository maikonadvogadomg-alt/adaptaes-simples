# ð¿ SK Assistente

Assistente de IA para Saulo Kenji â Chat com 4 slots de API, voz, playground de cÃ³digo e busca web.

## â¨ Funcionalidades

- **4 slots de chave de API** â configure Groq, OpenAI, Gemini, OpenRouter, Perplexity, xAI ou qualquer API compatÃ­vel
- **Auto-detecÃ§Ã£o de provider** â cole a chave e o app detecta automaticamente o provider e modelo ideal
- **Streaming de respostas** â respostas aparecem em tempo real
- **Blocos de cÃ³digo** com botÃ£o copiar e syntax highlighting
- **Links clicÃ¡veis** nas respostas
- **Voz entrada (STT)** â ditado via Web Speech API (Chrome/Edge)
- **Voz saÃ­da (TTS)** â leitura em voz alta via Web Speech API (sem custo)
- **Importar/Exportar** conversa em .txt
- **Playground de cÃ³digo** â salvar, copiar, baixar snippets localmente
- **Busca na web** â resultados com links clicÃ¡veis e botÃ£o "enviar ao chat"
- **PWA instalÃ¡vel** â funciona como app no celular (offline parcial)
- **100% localStorage** â sem banco de dados, sem conta

## ð Deploy no Vercel (gratuito)

1. FaÃ§a upload desta pasta para um repositÃ³rio GitHub (ou ZIP direto no Vercel)
2. Acesse [vercel.com](https://vercel.com) â New Project â importe o repositÃ³rio
3. **Sem variÃ¡veis de ambiente necessÃ¡rias** â tudo roda direto no navegador
4. Clique em Deploy â pronto!

## ð ï¸ Desenvolvimento local

```bash
npm install
npm run dev
```

Abrir em: http://localhost:3333

## ð¦ Build

```bash
npm install
npm run build
```

## ð Chaves de API suportadas (gratuitas ou com tier gratuito)

| Provider | Prefixo da chave | ObservaÃ§Ã£o |
|----------|-----------------|------------|
| **Groq** | `gsk_` | **Gratuito** â llama-3.3-70b muito rÃ¡pido |
| OpenAI | `sk-` | Pago (tem trial) |
| Google Gemini | `AIza` | Tier gratuito generoso |
| Perplexity | `pplx-` | Com busca na web embutida |
| xAI Grok | `xai-` | |
| Anthropic | `sk-ant` | |
| OpenRouter | `sk-or-` | Acesso a vÃ¡rios modelos |

**Dica gratuita:** Groq oferece velocidade excepcional sem custo â obtenha uma chave em [console.groq.com](https://console.groq.com).

## ðï¸ Voz

- **Entrada por voz**: Clique no botÃ£o ð¤ e fale em portuguÃªs. SilÃªncio de 1.8s envia automaticamente.
- **SaÃ­da por voz**: Ative o botÃ£o ð para ouvir as respostas. Usa Web Speech API â gratuito, sem API key.
- Funciona em Chrome e Edge (Android e Desktop).

## ð Estrutura

```
sk-assistente/
âââ src/
â   âââ App.tsx           â Container principal com tabs
â   âââ components/
â   â   âââ Chat.tsx      â Chat com 4 slots + voz + streaming
â   â   âââ Playground.tsx â Editor de cÃ³digo local
â   â   âââ Search.tsx    â Busca web com DuckDuckGo
â   âââ index.css
â   âââ main.tsx
âââ api/
â   âââ search.ts         â Proxy para DuckDuckGo (Vercel serverless)
âââ public/
â   âââ manifest.json     â PWA manifest
â   âââ sw.js             â Service worker
âââ index.html
âââ package.json
âââ vite.config.ts
âââ vercel.json
```

## ð Privacidade

- Chaves de API ficam apenas no seu navegador (localStorage)
- Conversas ficam apenas no seu dispositivo
- Nenhum dado Ã© enviado para servidores externos alÃ©m das chamadas Ã  IA que vocÃª configurar
