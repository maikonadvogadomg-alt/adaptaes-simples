# âï¸ Campo JurÃ­dico â SK

Assistente jurÃ­dico com IA para Saulo Kenji. AnÃ¡lise de documentos (PDF, Word, TXT), resumos, identificaÃ§Ã£o de riscos, geraÃ§Ã£o de peÃ§as jurÃ­dicas.

## â¨ Funcionalidades

- **Importar documentos** â PDF, Word (.docx), TXT, Markdown
- **8 aÃ§Ãµes jurÃ­dicas rÃ¡pidas** â Resumir, Analisar Riscos, ClÃ¡usulas Abusivas, Pontos para Negociar, Base Legal, Gerar NotificaÃ§Ã£o, Minuta de Resposta, Linha do Tempo
- **4 slots de chave de API** â Groq (gratuito!), OpenAI, Gemini, Perplexity, etc.
- **Auto-detecÃ§Ã£o do provider** â cole a chave, o sistema detecta automaticamente
- **Streaming** de respostas em tempo real
- **Voz (STT)** â ditado por voz em pt-BR
- **Voz (TTS)** â leitura da resposta em voz alta
- **Exportar anÃ¡lise** como .txt
- **PWA instalÃ¡vel** no celular
- **Sem banco de dados** â tudo em localStorage, privado e local

## ð Deploy gratuito

### Vercel
1. Suba esta pasta para um repositÃ³rio GitHub
2. Acesse [vercel.com](https://vercel.com) â New Project â importe
3. Clique em Deploy
4. â Sem variÃ¡veis de ambiente necessÃ¡rias

### Netlify
1. Acesse [netlify.com](https://netlify.com) â Add new site â Deploy manually
2. Arraste a pasta `dist/` (apÃ³s rodar `npm run build`) para a Ã¡rea de upload
3. â Pronto â funciona igual ao Vercel

## ð ï¸ Desenvolvimento local

```bash
npm install
npm run dev
```

## ð¦ Build para Netlify (arrastar e soltar)

```bash
npm install
npm run build
# FaÃ§a upload da pasta dist/ no Netlify
```

## ð Chaves gratuitas recomendadas

| Provider | Onde obter | ObservaÃ§Ã£o |
|----------|-----------|------------|
| **Groq** | [console.groq.com](https://console.groq.com) | â Gratuito, muito rÃ¡pido |
| Google Gemini | [aistudio.google.com](https://aistudio.google.com) | â Tier gratuito generoso |

## ð Formatos de documento suportados

| Formato | Suporte |
|---------|---------|
| PDF | â ExtraÃ§Ã£o completa de texto |
| Word (.docx) | â ExtraÃ§Ã£o completa |
| TXT / MD | â |
| HTML / CSV / JSON | â |

## ð Privacidade

- Chaves de API ficam **apenas no seu navegador** (localStorage)
- Documentos sÃ£o processados **localmente** (nunca enviados para servidor prÃ³prio)
- Chamadas vÃ£o direto para o provider que vocÃª configurou
- ExportaÃ§Ã£o salva localmente no seu dispositivo
