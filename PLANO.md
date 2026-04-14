# PLANO DO PROJETO: HTML/CSS/JS

> Gerado automaticamente pelo SK Code Editor em 14/04/2026, 01:40:47
> **327 arquivo(s)** | **~63.458 linhas de codigo**

---

## RESUMO EXECUTIVO

- **Tipo de aplicacao:** Aplicacao Web Frontend (React)
- **Frontend / Stack principal:** React, TypeScript
- **Versao:** 0.0.0

**Para rodar o projeto:**
```bash
# Abra index.html no Preview (botao Play)
```

---

## ESTRUTURA DE ARQUIVOS

```
HTML/CSS/JS/
├── artifacts/
│   ├── api-server/
│   │   ├── .replit-artifact/
│   │   │   └── artifact.toml
│   │   ├── src/
│   │   │   ├── lib/
│   │   │   │   ├── .gitkeep
│   │   │   │   └── logger.ts
│   │   │   ├── middlewares/
│   │   │   │   └── .gitkeep
│   │   │   ├── routes/
│   │   │   │   ├── ai-chat.ts
│   │   │   │   ├── exec.ts
│   │   │   │   ├── github.ts
│   │   │   │   ├── health.ts
│   │   │   │   ├── index.ts
│   │   │   │   ├── proxy.ts
│   │   │   │   ├── search.ts
│   │   │   │   └── voice.ts
│   │   │   ├── app.ts
│   │   │   └── index.ts
│   │   ├── build.mjs
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── code-editor/
│   │   ├── .replit-artifact/
│   │   │   └── artifact.toml
│   │   ├── public/
│   │   │   ├── favicon.svg
│   │   │   ├── icon-192.png
│   │   │   ├── icon-512.png
│   │   │   ├── manifest.json
│   │   │   ├── opengraph.jpg
│   │   │   └── sw.js
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── ui/
│   │   │   │   │   ├── accordion.tsx
│   │   │   │   │   ├── alert-dialog.tsx
│   │   │   │   │   ├── alert.tsx
│   │   │   │   │   ├── aspect-ratio.tsx
│   │   │   │   │   ├── avatar.tsx
│   │   │   │   │   ├── badge.tsx
│   │   │   │   │   ├── breadcrumb.tsx
│   │   │   │   │   ├── button-group.tsx
│   │   │   │   │   ├── button.tsx
│   │   │   │   │   ├── calendar.tsx
│   │   │   │   │   ├── card.tsx
│   │   │   │   │   ├── carousel.tsx
│   │   │   │   │   ├── chart.tsx
│   │   │   │   │   ├── checkbox.tsx
│   │   │   │   │   ├── collapsible.tsx
│   │   │   │   │   ├── command.tsx
│   │   │   │   │   ├── context-menu.tsx
│   │   │   │   │   ├── dialog.tsx
│   │   │   │   │   ├── drawer.tsx
│   │   │   │   │   ├── dropdown-menu.tsx
│   │   │   │   │   ├── empty.tsx
│   │   │   │   │   ├── field.tsx
│   │   │   │   │   ├── form.tsx
│   │   │   │   │   ├── hover-card.tsx
│   │   │   │   │   ├── input-group.tsx
│   │   │   │   │   ├── input-otp.tsx
│   │   │   │   │   ├── input.tsx
│   │   │   │   │   ├── item.tsx
│   │   │   │   │   ├── kbd.tsx
│   │   │   │   │   ├── label.tsx
│   │   │   │   │   ├── menubar.tsx
│   │   │   │   │   ├── navigation-menu.tsx
│   │   │   │   │   ├── pagination.tsx
│   │   │   │   │   ├── popover.tsx
│   │   │   │   │   ├── progress.tsx
│   │   │   │   │   ├── radio-group.tsx
│   │   │   │   │   ├── resizable.tsx
│   │   │   │   │   ├── scroll-area.tsx
│   │   │   │   │   ├── select.tsx
│   │   │   │   │   ├── separator.tsx
│   │   │   │   │   ├── sheet.tsx
│   │   │   │   │   ├── sidebar.tsx
│   │   │   │   │   ├── skeleton.tsx
│   │   │   │   │   ├── slider.tsx
│   │   │   │   │   ├── sonner.tsx
│   │   │   │   │   ├── spinner.tsx
│   │   │   │   │   ├── switch.tsx
│   │   │   │   │   ├── table.tsx
│   │   │   │   │   ├── tabs.tsx
│   │   │   │   │   ├── textarea.tsx
│   │   │   │   │   ├── toast.tsx
│   │   │   │   │   ├── toaster.tsx
│   │   │   │   │   ├── toggle-group.tsx
│   │   │   │   │   ├── toggle.tsx
│   │   │   │   │   └── tooltip.tsx
│   │   │   │   ├── AIChat.tsx
│   │   │   │   ├── AssistenteJuridico.tsx
│   │   │   │   ├── CampoLivre.tsx
│   │   │   │   ├── CodeEditor.tsx
│   │   │   │   ├── EditorLayout.tsx
│   │   │   │   ├── FileTree.tsx
│   │   │   │   ├── GitHubPanel.tsx
│   │   │   │   ├── PackageSearch.tsx
│   │   │   │   ├── Preview.tsx
│   │   │   │   ├── QuickPrompt.tsx
│   │   │   │   ├── RealTerminal.tsx
│   │   │   │   ├── TemplateSelector.tsx
│   │   │   │   ├── Terminal.tsx
│   │   │   │   ├── VoiceCard.tsx
│   │   │   │   └── VoiceMode.tsx
│   │   │   ├── hooks/
│   │   │   │   ├── use-mobile.tsx
│   │   │   │   └── use-toast.ts
│   │   │   ├── lib/
│   │   │   │   ├── ai-service.ts
│   │   │   │   ├── github-service.ts
│   │   │   │   ├── projects.ts
│   │   │   │   ├── store.ts
│   │   │   │   ├── templates.ts
│   │   │   │   ├── tts-service.ts
│   │   │   │   ├── utils.ts
│   │   │   │   ├── virtual-fs.ts
│   │   │   │   └── zip-service.ts
│   │   │   ├── App.tsx
│   │   │   ├── index.css
│   │   │   └── main.tsx
│   │   ├── components.json
│   │   ├── index.html
│   │   ├── package.json
│   │   ├── SYSTEM_DOCS.md
│   │   ├── tsconfig.json
│   │   └── vite.config.ts
│   └── mockup-sandbox/
│       ├── src/
│       │   ├── components/
│       │   │   └── ui/
│       │   │       ├── accordion.tsx
│       │   │       ├── alert-dialog.tsx
│       │   │       ├── alert.tsx
│       │   │       ├── aspect-ratio.tsx
│       │   │       ├── avatar.tsx
│       │   │       ├── badge.tsx
│       │   │       ├── breadcrumb.tsx
│       │   │       ├── button-group.tsx
│       │   │       ├── button.tsx
│       │   │       ├── calendar.tsx
│       │   │       ├── card.tsx
│       │   │       ├── carousel.tsx
│       │   │       ├── chart.tsx
│       │   │       ├── checkbox.tsx
│       │   │       ├── collapsible.tsx
│       │   │       ├── command.tsx
│       │   │       ├── context-menu.tsx
│       │   │       ├── dialog.tsx
│       │   │       ├── drawer.tsx
│       │   │       ├── dropdown-menu.tsx
│       │   │       ├── empty.tsx
│       │   │       ├── field.tsx
│       │   │       ├── form.tsx
│       │   │       ├── hover-card.tsx
│       │   │       ├── input-group.tsx
│       │   │       ├── input-otp.tsx
│       │   │       ├── input.tsx
│       │   │       ├── item.tsx
│       │   │       ├── kbd.tsx
│       │   │       ├── label.tsx
│       │   │       ├── menubar.tsx
│       │   │       ├── navigation-menu.tsx
│       │   │       ├── pagination.tsx
│       │   │       ├── popover.tsx
│       │   │       ├── progress.tsx
│       │   │       ├── radio-group.tsx
│       │   │       ├── resizable.tsx
│       │   │       ├── scroll-area.tsx
│       │   │       ├── select.tsx
│       │   │       ├── separator.tsx
│       │   │       ├── sheet.tsx
│       │   │       ├── sidebar.tsx
│       │   │       ├── skeleton.tsx
│       │   │       ├── slider.tsx
│       │   │       ├── sonner.tsx
│       │   │       ├── spinner.tsx
│       │   │       ├── switch.tsx
│       │   │       ├── table.tsx
│       │   │       ├── tabs.tsx
│       │   │       ├── textarea.tsx
│       │   │       ├── toast.tsx
│       │   │       ├── toaster.tsx
│       │   │       ├── toggle-group.tsx
│       │   │       ├── toggle.tsx
│       │   │       └── tooltip.tsx
│       │   ├── hooks/
│       │   │   ├── use-mobile.tsx
│       │   │   └── use-toast.ts
│       │   ├── lib/
│       │   │   └── utils.ts
│       │   ├── App.tsx
│       │   ├── index.css
│       │   └── main.tsx
│       ├── components.json
│       ├── index.html
│       ├── mockupPreviewPlugin.ts
│       ├── package.json
│       ├── tsconfig.json
│       └── vite.config.ts
├── campo-juridico/
│   ├── public/
│   │   ├── manifest.json
│   │   └── sw.js
│   ├── src/
│   │   ├── lib/
│   │   │   └── docReader.ts
│   │   ├── App.tsx
│   │   ├── index.css
│   │   └── main.tsx
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── README.md
│   ├── tsconfig.json
│   ├── vercel.json
│   └── vite.config.ts
├── lib/
│   ├── api-client-react/
│   │   ├── src/
│   │   │   ├── generated/
│   │   │   │   ├── api.schemas.ts
│   │   │   │   └── api.ts
│   │   │   ├── custom-fetch.ts
│   │   │   └── index.ts
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── tsconfig.tsbuildinfo
│   └── api-spec/
│       ├── openapi.yaml
│       ├── orval.config.ts
│       └── package.json
├── sk-assistente/
│   ├── api/
│   │   └── search.ts
│   ├── public/
│   │   ├── manifest.json
│   │   └── sw.js
│   ├── src/
│   │   ├── components/
│   │   │   ├── Chat.tsx
│   │   │   ├── Playground.tsx
│   │   │   └── Search.tsx
│   │   ├── App.tsx
│   │   ├── index.css
│   │   └── main.tsx
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── README.md
│   ├── tsconfig.json
│   ├── vercel.json
│   └── vite.config.ts
├── vercel-export/
│   ├── api/
│   │   ├── voice/
│   │   │   ├── speak.ts
│   │   │   └── transcribe.ts
│   │   ├── healthz.ts
│   │   ├── npm-search.ts
│   │   └── search.ts
│   ├── public/
│   │   ├── favicon.svg
│   │   ├── icon-192.png
│   │   ├── icon-512.png
│   │   ├── manifest.json
│   │   ├── opengraph.jpg
│   │   └── sw.js
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/
│   │   │   │   ├── accordion.tsx
│   │   │   │   ├── alert-dialog.tsx
│   │   │   │   ├── alert.tsx
│   │   │   │   ├── aspect-ratio.tsx
│   │   │   │   ├── avatar.tsx
│   │   │   │   ├── badge.tsx
│   │   │   │   ├── breadcrumb.tsx
│   │   │   │   ├── button-group.tsx
│   │   │   │   ├── button.tsx
│   │   │   │   ├── calendar.tsx
│   │   │   │   ├── card.tsx
│   │   │   │   ├── carousel.tsx
│   │   │   │   ├── chart.tsx
│   │   │   │   ├── checkbox.tsx
│   │   │   │   ├── collapsible.tsx
│   │   │   │   ├── command.tsx
│   │   │   │   ├── context-menu.tsx
│   │   │   │   ├── dialog.tsx
│   │   │   │   ├── drawer.tsx
│   │   │   │   ├── dropdown-menu.tsx
│   │   │   │   ├── empty.tsx
│   │   │   │   ├── field.tsx
│   │   │   │   ├── form.tsx
│   │   │   │   ├── hover-card.tsx
│   │   │   │   ├── input-group.tsx
│   │   │   │   ├── input-otp.tsx
│   │   │   │   ├── input.tsx
│   │   │   │   ├── item.tsx
│   │   │   │   ├── kbd.tsx
│   │   │   │   ├── label.tsx
│   │   │   │   ├── menubar.tsx
│   │   │   │   ├── navigation-menu.tsx
│   │   │   │   ├── pagination.tsx
│   │   │   │   ├── popover.tsx
│   │   │   │   ├── progress.tsx
│   │   │   │   ├── radio-group.tsx
│   │   │   │   ├── resizable.tsx
│   │   │   │   ├── scroll-area.tsx
│   │   │   │   ├── select.tsx
│   │   │   │   ├── separator.tsx
│   │   │   │   ├── sheet.tsx
│   │   │   │   ├── sidebar.tsx
│   │   │   │   ├── skeleton.tsx
│   │   │   │   ├── slider.tsx
│   │   │   │   ├── sonner.tsx
│   │   │   │   ├── spinner.tsx
│   │   │   │   ├── switch.tsx
│   │   │   │   ├── table.tsx
│   │   │   │   ├── tabs.tsx
│   │   │   │   ├── textarea.tsx
│   │   │   │   ├── toast.tsx
│   │   │   │   ├── toaster.tsx
│   │   │   │   ├── toggle-group.tsx
│   │   │   │   ├── toggle.tsx
│   │   │   │   └── tooltip.tsx
│   │   │   ├── AIChat.tsx
│   │   │   ├── AssistenteJuridico.tsx
│   │   │   ├── CampoLivre.tsx
│   │   │   ├── CodeEditor.tsx
│   │   │   ├── EditorLayout.tsx
│   │   │   ├── FileTree.tsx
│   │   │   ├── GitHubPanel.tsx
│   │   │   ├── PackageSearch.tsx
│   │   │   ├── Preview.tsx
│   │   │   ├── QuickPrompt.tsx
│   │   │   ├── RealTerminal.tsx
│   │   │   ├── TemplateSelector.tsx
│   │   │   ├── Terminal.tsx
│   │   │   ├── VoiceCard.tsx
│   │   │   └── VoiceMode.tsx
│   │   ├── hooks/
│   │   │   ├── use-mobile.tsx
│   │   │   └── use-toast.ts
│   │   ├── lib/
│   │   │   ├── ai-service.ts
│   │   │   ├── github-service.ts
│   │   │   ├── projects.ts
│   │   │   ├── store.ts
│   │   │   ├── templates.ts
│   │   │   ├── tts-service.ts
│   │   │   ├── utils.ts
│   │   │   ├── virtual-fs.ts
│   │   │   └── zip-service.ts
│   │   ├── App.tsx
│   │   ├── index.css
│   │   └── main.tsx
│   ├── index.html
│   ├── package.json
│   ├── README.md
│   ├── tsconfig.json
│   ├── vercel.json
│   └── vite.config.ts
├── .gitignore
├── MANUAL.md
├── package.json
├── PLANO.md
├── pnpm-workspace.yaml
└── README.md
```

---

## STACK TECNOLOGICO DETECTADO

- **Frontend:** React, TypeScript
- **Todos os pacotes (2):** typescript, prettier

---

## ROTAS DA API (endpoints detectados automaticamente)

```
USE    /api  (em artifacts/api-server/src/app.ts)
GET    *  (em artifacts/api-server/src/app.ts)
POST   /ai/chat  (em artifacts/api-server/src/routes/ai-chat.ts)
POST   /exec/npm-install  (em artifacts/api-server/src/routes/exec.ts)
POST   /exec/run-node  (em artifacts/api-server/src/routes/exec.ts)
POST   /exec/run-node-vfs  (em artifacts/api-server/src/routes/exec.ts)
POST   /db/query  (em artifacts/api-server/src/routes/exec.ts)
GET    /github/user  (em artifacts/api-server/src/routes/github.ts)
GET    /github/repos  (em artifacts/api-server/src/routes/github.ts)
POST   /github/repos  (em artifacts/api-server/src/routes/github.ts)
POST   /github/push  (em artifacts/api-server/src/routes/github.ts)
DELETE /github/repos/:owner/:repo  (em artifacts/api-server/src/routes/github.ts)
GET    /healthz  (em artifacts/api-server/src/routes/health.ts)
USE    /voice  (em artifacts/api-server/src/routes/index.ts)
GET    /search  (em artifacts/api-server/src/routes/search.ts)
GET    /npm-search  (em artifacts/api-server/src/routes/search.ts)
POST   /transcribe  (em artifacts/api-server/src/routes/voice.ts)
POST   /speak  (em artifacts/api-server/src/routes/voice.ts)
GET    /api/items  (em artifacts/code-editor/src/lib/templates.ts)
GET    /api/items/:id  (em artifacts/code-editor/src/lib/templates.ts)
POST   /api/items  (em artifacts/code-editor/src/lib/templates.ts)
GET    /api/health  (em artifacts/code-editor/src/lib/templates.ts)
USE    /api/auth  (em artifacts/code-editor/src/lib/templates.ts)
USE    /api/usuarios  (em artifacts/code-editor/src/lib/templates.ts)
POST   /register  (em artifacts/code-editor/src/lib/templates.ts)
POST   /login  (em artifacts/code-editor/src/lib/templates.ts)
GET    /perfil  (em artifacts/code-editor/src/lib/templates.ts)
GET    /api/items  (em vercel-export/src/lib/templates.ts)
GET    /api/items/:id  (em vercel-export/src/lib/templates.ts)
POST   /api/items  (em vercel-export/src/lib/templates.ts)
GET    /api/health  (em vercel-export/src/lib/templates.ts)
USE    /api/auth  (em vercel-export/src/lib/templates.ts)
USE    /api/usuarios  (em vercel-export/src/lib/templates.ts)
POST   /register  (em vercel-export/src/lib/templates.ts)
POST   /login  (em vercel-export/src/lib/templates.ts)
GET    /perfil  (em vercel-export/src/lib/templates.ts)
```

---

## SCRIPTS DISPONIVEIS (package.json)

```bash
npm run preinstall    # sh -c 'rm -f package-lock.json yarn.lock; case "$npm_config_user_agent" in pnpm/*) ;; *) echo "Use pnpm instead" >&2; exit 1 ;; esac'
npm run build         # pnpm run typecheck && pnpm -r --if-present run build
npm run typecheck:libs  # tsc --build
npm run typecheck     # pnpm run typecheck:libs && pnpm -r --filter "./artifacts/**" --filter "./scripts" --if-present run typecheck
```

---

## VARIAVEIS DE AMBIENTE NECESSARIAS

Crie um arquivo `.env` na raiz com estas variaveis:

```env
LOG_LEVEL=seu_valor_aqui
AI_INTEGRATIONS_OPENAI_BASE_URL=seu_valor_aqui
AI_INTEGRATIONS_OPENAI_API_KEY=seu_valor_aqui
PORT=seu_valor_aqui
ALLOWED_ORIGINS=seu_valor_aqui
JWT_SECRET=seu_valor_aqui
JWT_EXPIRES_IN=seu_valor_aqui
DATABASE_URL=seu_valor_aqui
BASE_PATH=seu_valor_aqui
REPL_ID=seu_valor_aqui
OPENAI_API_KEY=seu_valor_aqui
```

---

## ARQUIVOS PRINCIPAIS

- `artifacts/api-server/src/app.ts` — Ponto de entrada do backend
- `artifacts/api-server/src/index.ts` — Ponto de entrada do backend
- `artifacts/api-server/src/routes/index.ts` — Ponto de entrada do backend
- `artifacts/code-editor/index.html` — Arquivo principal
- `artifacts/code-editor/src/App.tsx` — Componente raiz do frontend
- `artifacts/code-editor/src/main.tsx` — Arquivo principal
- `artifacts/mockup-sandbox/index.html` — Arquivo principal
- `artifacts/mockup-sandbox/src/App.tsx` — Componente raiz do frontend
- `artifacts/mockup-sandbox/src/main.tsx` — Arquivo principal
- `campo-juridico/index.html` — Arquivo principal

---

## GUIA COMPLETO — O QUE CADA PARTE DO PROJETO FAZ

> Esta secao explica, em linguagem simples, o que e para que serve cada pasta e cada arquivo.

### 📁 Raiz do Projeto (pasta principal)
> Arquivos de configuracao e pontos de entrada ficam aqui.

**`.gitignore`** _(59 linhas)_
Lista de arquivos/pastas que o Git deve IGNORAR (nao versionar). Ex: node_modules, .env

**`MANUAL.md`** _(151 linhas)_
Manual explicativo em linguagem simples, feito para entender o projeto sem precisar de conhecimento tecnico profundo.

**`PLANO.md`** _(1725 linhas)_
Este documento! Gerado automaticamente pelo SK Code Editor com toda a estrutura do projeto.

**`README.md`** _(6 linhas)_
Documentacao principal do projeto. Explica o que o projeto faz e como rodar.

**`package.json`** _(33 linhas)_
Registro de dependencias e scripts do projeto. Aqui ficam os comandos (npm run dev, npm start) e os pacotes instalados.

**`pnpm-workspace.yaml`** _(160 linhas)_
Arquivo YAML — parte do projeto.

---

### 📁 `campo-juridico/`
> Pasta 'campo-juridico' — agrupamento de arquivos relacionados.

**`README.md`** _(68 linhas)_
Documentacao principal do projeto. Explica o que o projeto faz e como rodar.

**`index.html`** _(29 linhas)_
Pagina HTML raiz do projeto. E o ponto de entrada que o browser carrega primeiro.

**`package-lock.json`** _(2945 linhas)_
Arquivo de dados ou configuracao no formato JSON (chave: valor).

**`package.json`** _(28 linhas)_
Registro de dependencias e scripts do projeto. Aqui ficam os comandos (npm run dev, npm start) e os pacotes instalados.

**`tsconfig.json`** _(19 linhas)_
Configuracao do TypeScript. Diz para o computador como interpretar o codigo .ts e .tsx.

**`vercel.json`** _(9 linhas)_
Arquivo de dados ou configuracao no formato JSON (chave: valor).

**`vite.config.ts`** _(19 linhas)_
Configuracao do Vite (servidor de desenvolvimento). Define a porta, alias de caminhos e plugins usados.

---

### 📁 `sk-assistente/`
> Pasta 'sk-assistente' — agrupamento de arquivos relacionados.

**`README.md`** _(91 linhas)_
Documentacao principal do projeto. Explica o que o projeto faz e como rodar.

**`index.html`** _(31 linhas)_
Pagina HTML raiz do projeto. E o ponto de entrada que o browser carrega primeiro.

**`package-lock.json`** _(3865 linhas)_
Arquivo de dados ou configuracao no formato JSON (chave: valor).

**`package.json`** _(25 linhas)_
Registro de dependencias e scripts do projeto. Aqui ficam os comandos (npm run dev, npm start) e os pacotes instalados.

**`tsconfig.json`** _(19 linhas)_
Configuracao do TypeScript. Diz para o computador como interpretar o codigo .ts e .tsx.

**`vercel.json`** _(9 linhas)_
Arquivo de dados ou configuracao no formato JSON (chave: valor).

**`vite.config.ts`** _(16 linhas)_
Configuracao do Vite (servidor de desenvolvimento). Define a porta, alias de caminhos e plugins usados.

---

### 📁 `vercel-export/`
> Pasta 'vercel-export' — agrupamento de arquivos relacionados.

**`README.md`** _(86 linhas)_
Documentacao principal do projeto. Explica o que o projeto faz e como rodar.

**`index.html`** _(36 linhas)_
Pagina HTML raiz do projeto. E o ponto de entrada que o browser carrega primeiro.

**`package.json`** _(75 linhas)_
Registro de dependencias e scripts do projeto. Aqui ficam os comandos (npm run dev, npm start) e os pacotes instalados.

**`tsconfig.json`** _(25 linhas)_
Configuracao do TypeScript. Diz para o computador como interpretar o codigo .ts e .tsx.

**`vercel.json`** _(24 linhas)_
Arquivo de dados ou configuracao no formato JSON (chave: valor).

**`vite.config.ts`** _(39 linhas)_
Configuracao do Vite (servidor de desenvolvimento). Define a porta, alias de caminhos e plugins usados.

---

### 📁 `artifacts/api-server/`
> Pasta 'api-server' — agrupamento de arquivos relacionados.

**`build.mjs`** _(127 linhas)_
Arquivo MJS — parte do projeto.

**`package.json`** _(44 linhas)_
Registro de dependencias e scripts do projeto. Aqui ficam os comandos (npm run dev, npm start) e os pacotes instalados.

**`tsconfig.json`** _(18 linhas)_
Configuracao do TypeScript. Diz para o computador como interpretar o codigo .ts e .tsx.

---

### 📁 `artifacts/code-editor/`
> Pasta 'code-editor' — agrupamento de arquivos relacionados.

**`SYSTEM_DOCS.md`** _(292 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`components.json`** _(20 linhas)_
Arquivo de dados ou configuracao no formato JSON (chave: valor).

**`index.html`** _(36 linhas)_
Pagina HTML raiz do projeto. E o ponto de entrada que o browser carrega primeiro.

**`package.json`** _(92 linhas)_
Registro de dependencias e scripts do projeto. Aqui ficam os comandos (npm run dev, npm start) e os pacotes instalados.

**`tsconfig.json`** _(23 linhas)_
Configuracao do TypeScript. Diz para o computador como interpretar o codigo .ts e .tsx.

**`vite.config.ts`** _(65 linhas)_
Configuracao do Vite (servidor de desenvolvimento). Define a porta, alias de caminhos e plugins usados.

---

### 📁 `artifacts/mockup-sandbox/`
> Pasta 'mockup-sandbox' — agrupamento de arquivos relacionados.

**`components.json`** _(22 linhas)_
Arquivo de dados ou configuracao no formato JSON (chave: valor).

**`index.html`** _(32 linhas)_
Pagina HTML raiz do projeto. E o ponto de entrada que o browser carrega primeiro.

**`mockupPreviewPlugin.ts`** _(181 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`package.json`** _(75 linhas)_
Registro de dependencias e scripts do projeto. Aqui ficam os comandos (npm run dev, npm start) e os pacotes instalados.

**`tsconfig.json`** _(17 linhas)_
Configuracao do TypeScript. Diz para o computador como interpretar o codigo .ts e .tsx.

**`vite.config.ts`** _(73 linhas)_
Configuracao do Vite (servidor de desenvolvimento). Define a porta, alias de caminhos e plugins usados.

---

### 📁 `campo-juridico/public/`
> Arquivos estaticos: imagens, icones, fontes, arquivos publicos.

**`manifest.json`** _(17 linhas)_
Manifesto do PWA — define nome, icone e configuracoes para instalar o app no celular.

**`sw.js`** _(27 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `campo-juridico/src/`
> Codigo-fonte principal do projeto. Nao apague esta pasta.

**`App.tsx`** _(705 linhas)_
Componente RAIZ do frontend — e o pai de todos os outros componentes. Aqui ficam as rotas principais.

**`index.css`** _(28 linhas)_
Arquivo de estilos visuais — cores, tamanhos, fontes, espacamentos da interface.

**`main.tsx`** _(11 linhas)_
Ponto de entrada do React — monta o componente App na pagina HTML.

---

### 📁 `lib/api-client-react/`
> Pasta 'api-client-react' — agrupamento de arquivos relacionados.

**`package.json`** _(16 linhas)_
Registro de dependencias e scripts do projeto. Aqui ficam os comandos (npm run dev, npm start) e os pacotes instalados.

**`tsconfig.json`** _(13 linhas)_
Configuracao do TypeScript. Diz para o computador como interpretar o codigo .ts e .tsx.

**`tsconfig.tsbuildinfo`** _(1 linha)_
Arquivo TSBUILDINFO — parte do projeto.

---

### 📁 `lib/api-spec/`
> Pasta 'api-spec' — agrupamento de arquivos relacionados.

**`openapi.yaml`** _(37 linhas)_
Arquivo YAML — parte do projeto.

**`orval.config.ts`** _(73 linhas)_
Arquivo de CONSTANTES/CONFIGURACAO — valores fixos usados em varios lugares do projeto.

**`package.json`** _(12 linhas)_
Registro de dependencias e scripts do projeto. Aqui ficam os comandos (npm run dev, npm start) e os pacotes instalados.

---

### 📁 `sk-assistente/api/`
> Comunicacao com servidor, banco de dados ou APIs externas.

**`search.ts`** _(76 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `sk-assistente/public/`
> Arquivos estaticos: imagens, icones, fontes, arquivos publicos.

**`manifest.json`** _(27 linhas)_
Manifesto do PWA — define nome, icone e configuracoes para instalar o app no celular.

**`sw.js`** _(35 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `sk-assistente/src/`
> Codigo-fonte principal do projeto. Nao apague esta pasta.

**`App.tsx`** _(80 linhas)_
Componente RAIZ do frontend — e o pai de todos os outros componentes. Aqui ficam as rotas principais.

**`index.css`** _(46 linhas)_
Arquivo de estilos visuais — cores, tamanhos, fontes, espacamentos da interface.

**`main.tsx`** _(11 linhas)_
Ponto de entrada do React — monta o componente App na pagina HTML.

---

### 📁 `vercel-export/api/`
> Comunicacao com servidor, banco de dados ou APIs externas.

**`healthz.ts`** _(6 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`npm-search.ts`** _(24 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`search.ts`** _(33 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `vercel-export/public/`
> Arquivos estaticos: imagens, icones, fontes, arquivos publicos.

**`favicon.svg`** _(17 linhas)_
Imagem vetorial (icone ou ilustracao que nao perde qualidade ao ampliar).

**`icon-192.png`** _(55 linhas)_
Arquivo de imagem.

**`icon-512.png`** _(132 linhas)_
Arquivo de imagem.

**`manifest.json`** _(49 linhas)_
Manifesto do PWA — define nome, icone e configuracoes para instalar o app no celular.

**`opengraph.jpg`** _(63 linhas)_
Arquivo de imagem.

**`sw.js`** _(41 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `vercel-export/src/`
> Codigo-fonte principal do projeto. Nao apague esta pasta.

**`App.tsx`** _(210 linhas)_
Componente RAIZ do frontend — e o pai de todos os outros componentes. Aqui ficam as rotas principais.

**`index.css`** _(167 linhas)_
Arquivo de estilos visuais — cores, tamanhos, fontes, espacamentos da interface.

**`main.tsx`** _(6 linhas)_
Ponto de entrada do React — monta o componente App na pagina HTML.

---

### 📁 `artifacts/api-server/.replit-artifact/`
> Pasta '.replit-artifact' — agrupamento de arquivos relacionados.

**`artifact.toml`** _(32 linhas)_
Arquivo TOML — parte do projeto.

---

### 📁 `artifacts/api-server/src/`
> Codigo-fonte principal do projeto. Nao apague esta pasta.

**`app.ts`** _(51 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`index.ts`** _(210 linhas)_
Arquivo INDEX — ponto de entrada da pasta, exporta tudo que esta dentro.

---

### 📁 `artifacts/code-editor/.replit-artifact/`
> Pasta '.replit-artifact' — agrupamento de arquivos relacionados.

**`artifact.toml`** _(23 linhas)_
Arquivo TOML — parte do projeto.

---

### 📁 `artifacts/code-editor/public/`
> Arquivos estaticos: imagens, icones, fontes, arquivos publicos.

**`favicon.svg`** _(17 linhas)_
Imagem vetorial (icone ou ilustracao que nao perde qualidade ao ampliar).

**`icon-192.png`** _(55 linhas)_
Arquivo de imagem.

**`icon-512.png`** _(132 linhas)_
Arquivo de imagem.

**`manifest.json`** _(49 linhas)_
Manifesto do PWA — define nome, icone e configuracoes para instalar o app no celular.

**`opengraph.jpg`** _(54 linhas)_
Arquivo de imagem.

**`sw.js`** _(41 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `artifacts/code-editor/src/`
> Codigo-fonte principal do projeto. Nao apague esta pasta.

**`App.tsx`** _(210 linhas)_
Componente RAIZ do frontend — e o pai de todos os outros componentes. Aqui ficam as rotas principais.

**`index.css`** _(167 linhas)_
Arquivo de estilos visuais — cores, tamanhos, fontes, espacamentos da interface.

**`main.tsx`** _(6 linhas)_
Ponto de entrada do React — monta o componente App na pagina HTML.

---

### 📁 `artifacts/mockup-sandbox/src/`
> Codigo-fonte principal do projeto. Nao apague esta pasta.

**`App.tsx`** _(147 linhas)_
Componente RAIZ do frontend — e o pai de todos os outros componentes. Aqui ficam as rotas principais.

**`index.css`** _(158 linhas)_
Arquivo de estilos visuais — cores, tamanhos, fontes, espacamentos da interface.

**`main.tsx`** _(6 linhas)_
Ponto de entrada do React — monta o componente App na pagina HTML.

---

### 📁 `campo-juridico/src/lib/`
> Funcoes auxiliares reutilizaveis em varios lugares do projeto.

**`docReader.ts`** _(62 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `lib/api-client-react/src/`
> Codigo-fonte principal do projeto. Nao apague esta pasta.

**`custom-fetch.ts`** _(372 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`index.ts`** _(5 linhas)_
Arquivo INDEX — ponto de entrada da pasta, exporta tudo que esta dentro.

---

### 📁 `sk-assistente/src/components/`
> Pecas visuais reutilizaveis da interface (botoes, cards, formularios...).

**`Chat.tsx`** _(626 linhas)_
Componente de CHAT/MENSAGENS — interface de conversa em tempo real.

**`Playground.tsx`** _(181 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`Search.tsx`** _(140 linhas)_
Componente de BUSCA — campo e logica para filtrar/encontrar conteudo.

---

### 📁 `vercel-export/api/voice/`
> Pasta 'voice' — agrupamento de arquivos relacionados.

**`speak.ts`** _(43 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`transcribe.ts`** _(54 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `vercel-export/src/components/`
> Pecas visuais reutilizaveis da interface (botoes, cards, formularios...).

**`AIChat.tsx`** _(2105 linhas)_
Componente de CHAT/MENSAGENS — interface de conversa em tempo real.

**`AssistenteJuridico.tsx`** _(822 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`CampoLivre.tsx`** _(499 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`CodeEditor.tsx`** _(154 linhas)_
Componente EDITOR — area de edicao de texto, codigo ou conteudo rico.

**`EditorLayout.tsx`** _(2434 linhas)_
Componente de LAYOUT — define a estrutura visual da pagina (cabecalho, sidebar, rodape). Envolve outros componentes.

**`FileTree.tsx`** _(400 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`GitHubPanel.tsx`** _(632 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`PackageSearch.tsx`** _(395 linhas)_
Componente de BUSCA — campo e logica para filtrar/encontrar conteudo.

**`Preview.tsx`** _(496 linhas)_
Componente de PAGINA/TELA — representa uma tela completa navegavel no app.

**`QuickPrompt.tsx`** _(274 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`RealTerminal.tsx`** _(614 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`TemplateSelector.tsx`** _(501 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`Terminal.tsx`** _(1516 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`VoiceCard.tsx`** _(427 linhas)_
Componente CARD (cartao) — exibe uma informacao em um bloco visual com borda e sombra. Muito usado para listas de items.

**`VoiceMode.tsx`** _(277 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

---

### 📁 `vercel-export/src/hooks/`
> Hooks React customizados — logica reutilizavel de estado e efeitos.

**`use-mobile.tsx`** _(20 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`use-toast.ts`** _(192 linhas)_
HOOK React personalizado para gerenciar estado/comportamento de '-toast'.

---

### 📁 `vercel-export/src/lib/`
> Funcoes auxiliares reutilizaveis em varios lugares do projeto.

**`ai-service.ts`** _(392 linhas)_
Arquivo de SERVICO/API — funcoes para comunicar com o servidor ou API externa.

**`github-service.ts`** _(197 linhas)_
Arquivo de SERVICO/API — funcoes para comunicar com o servidor ou API externa.

**`projects.ts`** _(73 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`store.ts`** _(38 linhas)_
STORE de estado — gerencia o estado global do app (dados compartilhados entre telas).

**`templates.ts`** _(1629 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`tts-service.ts`** _(294 linhas)_
Arquivo de SERVICO/API — funcoes para comunicar com o servidor ou API externa.

**`utils.ts`** _(7 linhas)_
Funcoes UTILITARIAS — ferramentas reutilizaveis de uso geral no projeto.

**`virtual-fs.ts`** _(200 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`zip-service.ts`** _(147 linhas)_
Arquivo de SERVICO/API — funcoes para comunicar com o servidor ou API externa.

---

### 📁 `artifacts/api-server/src/lib/`
> Funcoes auxiliares reutilizaveis em varios lugares do projeto.

**`.gitkeep`** _(1 linha)_
Arquivo GITKEEP — parte do projeto.

**`logger.ts`** _(21 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `artifacts/api-server/src/middlewares/`
> Pasta 'middlewares' — agrupamento de arquivos relacionados.

**`.gitkeep`** _(1 linha)_
Arquivo GITKEEP — parte do projeto.

---

### 📁 `artifacts/api-server/src/routes/`
> Definicao das URLs e navegacao do app.

**`ai-chat.ts`** _(75 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`exec.ts`** _(206 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`github.ts`** _(107 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`health.ts`** _(12 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`index.ts`** _(21 linhas)_
Arquivo INDEX — ponto de entrada da pasta, exporta tudo que esta dentro.

**`proxy.ts`** _(62 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`search.ts`** _(63 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`voice.ts`** _(89 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `artifacts/code-editor/src/components/`
> Pecas visuais reutilizaveis da interface (botoes, cards, formularios...).

**`AIChat.tsx`** _(2105 linhas)_
Componente de CHAT/MENSAGENS — interface de conversa em tempo real.

**`AssistenteJuridico.tsx`** _(822 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`CampoLivre.tsx`** _(499 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`CodeEditor.tsx`** _(154 linhas)_
Componente EDITOR — area de edicao de texto, codigo ou conteudo rico.

**`EditorLayout.tsx`** _(2434 linhas)_
Componente de LAYOUT — define a estrutura visual da pagina (cabecalho, sidebar, rodape). Envolve outros componentes.

**`FileTree.tsx`** _(400 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`GitHubPanel.tsx`** _(632 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`PackageSearch.tsx`** _(395 linhas)_
Componente de BUSCA — campo e logica para filtrar/encontrar conteudo.

**`Preview.tsx`** _(496 linhas)_
Componente de PAGINA/TELA — representa uma tela completa navegavel no app.

**`QuickPrompt.tsx`** _(274 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`RealTerminal.tsx`** _(614 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`TemplateSelector.tsx`** _(501 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`Terminal.tsx`** _(1516 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`VoiceCard.tsx`** _(427 linhas)_
Componente CARD (cartao) — exibe uma informacao em um bloco visual com borda e sombra. Muito usado para listas de items.

**`VoiceMode.tsx`** _(277 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

---

### 📁 `artifacts/code-editor/src/hooks/`
> Hooks React customizados — logica reutilizavel de estado e efeitos.

**`use-mobile.tsx`** _(20 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`use-toast.ts`** _(192 linhas)_
HOOK React personalizado para gerenciar estado/comportamento de '-toast'.

---

### 📁 `artifacts/code-editor/src/lib/`
> Funcoes auxiliares reutilizaveis em varios lugares do projeto.

**`ai-service.ts`** _(392 linhas)_
Arquivo de SERVICO/API — funcoes para comunicar com o servidor ou API externa.

**`github-service.ts`** _(197 linhas)_
Arquivo de SERVICO/API — funcoes para comunicar com o servidor ou API externa.

**`projects.ts`** _(73 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`store.ts`** _(38 linhas)_
STORE de estado — gerencia o estado global do app (dados compartilhados entre telas).

**`templates.ts`** _(1629 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`tts-service.ts`** _(294 linhas)_
Arquivo de SERVICO/API — funcoes para comunicar com o servidor ou API externa.

**`utils.ts`** _(7 linhas)_
Funcoes UTILITARIAS — ferramentas reutilizaveis de uso geral no projeto.

**`virtual-fs.ts`** _(200 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`zip-service.ts`** _(147 linhas)_
Arquivo de SERVICO/API — funcoes para comunicar com o servidor ou API externa.

---

### 📁 `artifacts/mockup-sandbox/src/hooks/`
> Hooks React customizados — logica reutilizavel de estado e efeitos.

**`use-mobile.tsx`** _(20 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`use-toast.ts`** _(190 linhas)_
HOOK React personalizado para gerenciar estado/comportamento de '-toast'.

---

### 📁 `artifacts/mockup-sandbox/src/lib/`
> Funcoes auxiliares reutilizaveis em varios lugares do projeto.

**`utils.ts`** _(7 linhas)_
Funcoes UTILITARIAS — ferramentas reutilizaveis de uso geral no projeto.

---

### 📁 `lib/api-client-react/src/generated/`
> Pasta 'generated' — agrupamento de arquivos relacionados.

**`api.schemas.ts`** _(11 linhas)_
Arquivo de SERVICO/API — funcoes para comunicar com o servidor ou API externa.

**`api.ts`** _(102 linhas)_
Arquivo de SERVICO/API — funcoes para comunicar com o servidor ou API externa.

---

### 📁 `vercel-export/src/components/ui/`
> Componentes de UI (interface) basicos e genericos.

**`accordion.tsx`** _(56 linhas)_
Componente ACCORDION — secoes que abrem/fecham ao clicar, economizando espaco na tela.

**`alert-dialog.tsx`** _(140 linhas)_
Componente de NOTIFICACAO/ALERTA — mensagem temporaria que aparece na tela (ex: 'Salvo com sucesso!').

**`alert.tsx`** _(60 linhas)_
Componente de NOTIFICACAO/ALERTA — mensagem temporaria que aparece na tela (ex: 'Salvo com sucesso!').

**`aspect-ratio.tsx`** _(6 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`avatar.tsx`** _(51 linhas)_
Componente AVATAR — foto ou iniciais do usuario em formato circular.

**`badge.tsx`** _(44 linhas)_
Componente BADGE (etiqueta) — pequeno indicador com numero ou status (ex: '3 novas mensagens').

**`breadcrumb.tsx`** _(116 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`button-group.tsx`** _(84 linhas)_
Componente de BOTAO — elemento clicavel reutilizavel com estilo padrao do projeto.

**`button.tsx`** _(66 linhas)_
Componente de BOTAO — elemento clicavel reutilizavel com estilo padrao do projeto.

**`calendar.tsx`** _(214 linhas)_
Componente CALENDARIO/AGENDA — visualizacao e selecao de datas e eventos.

**`card.tsx`** _(77 linhas)_
Componente CARD (cartao) — exibe uma informacao em um bloco visual com borda e sombra. Muito usado para listas de items.

**`carousel.tsx`** _(261 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`chart.tsx`** _(368 linhas)_
Componente de GRAFICO — visualizacao de dados em forma de grafico (barras, linhas, pizza...).

**`checkbox.tsx`** _(29 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`collapsible.tsx`** _(12 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`command.tsx`** _(154 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`context-menu.tsx`** _(199 linhas)_
CONTEXT do React — mecanismo para compartilhar dados entre componentes sem passar por props.

**`dialog.tsx`** _(121 linhas)_
Componente DIALOG — caixa de dialogo que exige resposta do usuario (confirmar, cancelar...).

**`drawer.tsx`** _(117 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`dropdown-menu.tsx`** _(202 linhas)_
Componente de MENU/DROPDOWN — lista de opcoes que aparece ao clicar em um botao.

**`empty.tsx`** _(105 linhas)_
Componente de ESTADO VAZIO — exibido quando nao ha dados para mostrar (ex: 'Nenhum resultado encontrado').

**`field.tsx`** _(245 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`form.tsx`** _(177 linhas)_
Componente de FORMULARIO — campos de entrada de dados (texto, selecao, etc.) com validacao.

**`hover-card.tsx`** _(28 linhas)_
Componente CARD (cartao) — exibe uma informacao em um bloco visual com borda e sombra. Muito usado para listas de items.

**`input-group.tsx`** _(169 linhas)_
Componente de CAMPO DE ENTRADA — elemento de input com estilo personalizado.

**`input-otp.tsx`** _(70 linhas)_
Componente de CAMPO DE ENTRADA — elemento de input com estilo personalizado.

**`input.tsx`** _(23 linhas)_
Componente de CAMPO DE ENTRADA — elemento de input com estilo personalizado.

**`item.tsx`** _(194 linhas)_
Componente de ITEM — representa um elemento individual dentro de uma lista ou colecao.

**`kbd.tsx`** _(29 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`label.tsx`** _(27 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`menubar.tsx`** _(255 linhas)_
Componente de MENU/DROPDOWN — lista de opcoes que aparece ao clicar em um botao.

**`navigation-menu.tsx`** _(129 linhas)_
Componente de NAVEGACAO/CABECALHO — barra superior com logo, menu e links de navegacao.

**`pagination.tsx`** _(118 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`popover.tsx`** _(32 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`progress.tsx`** _(29 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`radio-group.tsx`** _(43 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`resizable.tsx`** _(46 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`scroll-area.tsx`** _(47 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`select.tsx`** _(160 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`separator.tsx`** _(30 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`sheet.tsx`** _(141 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`sidebar.tsx`** _(728 linhas)_
Componente de BARRA LATERAL — menu ou painel que aparece na lateral da tela.

**`skeleton.tsx`** _(16 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`slider.tsx`** _(27 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`sonner.tsx`** _(32 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`spinner.tsx`** _(17 linhas)_
Componente de CARREGAMENTO — animacao visual que aparece enquanto dados estao sendo buscados.

**`switch.tsx`** _(28 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`table.tsx`** _(121 linhas)_
Componente de TABELA — exibe dados em linhas e colunas.

**`tabs.tsx`** _(54 linhas)_
Componente de ABAS — permite alternar entre diferentes secoes de conteudo com clique.

**`textarea.tsx`** _(23 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`toast.tsx`** _(128 linhas)_
Componente de NOTIFICACAO/ALERTA — mensagem temporaria que aparece na tela (ex: 'Salvo com sucesso!').

**`toaster.tsx`** _(34 linhas)_
Componente de NOTIFICACAO/ALERTA — mensagem temporaria que aparece na tela (ex: 'Salvo com sucesso!').

**`toggle-group.tsx`** _(62 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`toggle.tsx`** _(44 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`tooltip.tsx`** _(33 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

---

### 📁 `artifacts/code-editor/src/components/ui/`
> Componentes de UI (interface) basicos e genericos.

**`accordion.tsx`** _(56 linhas)_
Componente ACCORDION — secoes que abrem/fecham ao clicar, economizando espaco na tela.

**`alert-dialog.tsx`** _(140 linhas)_
Componente de NOTIFICACAO/ALERTA — mensagem temporaria que aparece na tela (ex: 'Salvo com sucesso!').

**`alert.tsx`** _(60 linhas)_
Componente de NOTIFICACAO/ALERTA — mensagem temporaria que aparece na tela (ex: 'Salvo com sucesso!').

**`aspect-ratio.tsx`** _(6 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`avatar.tsx`** _(51 linhas)_
Componente AVATAR — foto ou iniciais do usuario em formato circular.

**`badge.tsx`** _(44 linhas)_
Componente BADGE (etiqueta) — pequeno indicador com numero ou status (ex: '3 novas mensagens').

**`breadcrumb.tsx`** _(116 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`button-group.tsx`** _(84 linhas)_
Componente de BOTAO — elemento clicavel reutilizavel com estilo padrao do projeto.

**`button.tsx`** _(66 linhas)_
Componente de BOTAO — elemento clicavel reutilizavel com estilo padrao do projeto.

**`calendar.tsx`** _(214 linhas)_
Componente CALENDARIO/AGENDA — visualizacao e selecao de datas e eventos.

**`card.tsx`** _(77 linhas)_
Componente CARD (cartao) — exibe uma informacao em um bloco visual com borda e sombra. Muito usado para listas de items.

**`carousel.tsx`** _(261 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`chart.tsx`** _(368 linhas)_
Componente de GRAFICO — visualizacao de dados em forma de grafico (barras, linhas, pizza...).

**`checkbox.tsx`** _(29 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`collapsible.tsx`** _(12 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`command.tsx`** _(154 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`context-menu.tsx`** _(199 linhas)_
CONTEXT do React — mecanismo para compartilhar dados entre componentes sem passar por props.

**`dialog.tsx`** _(121 linhas)_
Componente DIALOG — caixa de dialogo que exige resposta do usuario (confirmar, cancelar...).

**`drawer.tsx`** _(117 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`dropdown-menu.tsx`** _(202 linhas)_
Componente de MENU/DROPDOWN — lista de opcoes que aparece ao clicar em um botao.

**`empty.tsx`** _(105 linhas)_
Componente de ESTADO VAZIO — exibido quando nao ha dados para mostrar (ex: 'Nenhum resultado encontrado').

**`field.tsx`** _(245 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`form.tsx`** _(177 linhas)_
Componente de FORMULARIO — campos de entrada de dados (texto, selecao, etc.) com validacao.

**`hover-card.tsx`** _(28 linhas)_
Componente CARD (cartao) — exibe uma informacao em um bloco visual com borda e sombra. Muito usado para listas de items.

**`input-group.tsx`** _(169 linhas)_
Componente de CAMPO DE ENTRADA — elemento de input com estilo personalizado.

**`input-otp.tsx`** _(70 linhas)_
Componente de CAMPO DE ENTRADA — elemento de input com estilo personalizado.

**`input.tsx`** _(23 linhas)_
Componente de CAMPO DE ENTRADA — elemento de input com estilo personalizado.

**`item.tsx`** _(194 linhas)_
Componente de ITEM — representa um elemento individual dentro de uma lista ou colecao.

**`kbd.tsx`** _(29 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`label.tsx`** _(27 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`menubar.tsx`** _(255 linhas)_
Componente de MENU/DROPDOWN — lista de opcoes que aparece ao clicar em um botao.

**`navigation-menu.tsx`** _(129 linhas)_
Componente de NAVEGACAO/CABECALHO — barra superior com logo, menu e links de navegacao.

**`pagination.tsx`** _(118 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`popover.tsx`** _(32 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`progress.tsx`** _(29 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`radio-group.tsx`** _(43 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`resizable.tsx`** _(46 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`scroll-area.tsx`** _(47 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`select.tsx`** _(160 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`separator.tsx`** _(30 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`sheet.tsx`** _(141 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`sidebar.tsx`** _(728 linhas)_
Componente de BARRA LATERAL — menu ou painel que aparece na lateral da tela.

**`skeleton.tsx`** _(16 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`slider.tsx`** _(27 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`sonner.tsx`** _(32 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`spinner.tsx`** _(17 linhas)_
Componente de CARREGAMENTO — animacao visual que aparece enquanto dados estao sendo buscados.

**`switch.tsx`** _(28 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`table.tsx`** _(121 linhas)_
Componente de TABELA — exibe dados em linhas e colunas.

**`tabs.tsx`** _(54 linhas)_
Componente de ABAS — permite alternar entre diferentes secoes de conteudo com clique.

**`textarea.tsx`** _(23 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`toast.tsx`** _(128 linhas)_
Componente de NOTIFICACAO/ALERTA — mensagem temporaria que aparece na tela (ex: 'Salvo com sucesso!').

**`toaster.tsx`** _(34 linhas)_
Componente de NOTIFICACAO/ALERTA — mensagem temporaria que aparece na tela (ex: 'Salvo com sucesso!').

**`toggle-group.tsx`** _(62 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`toggle.tsx`** _(44 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`tooltip.tsx`** _(33 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

---

### 📁 `artifacts/mockup-sandbox/src/components/ui/`
> Componentes de UI (interface) basicos e genericos.

**`accordion.tsx`** _(56 linhas)_
Componente ACCORDION — secoes que abrem/fecham ao clicar, economizando espaco na tela.

**`alert-dialog.tsx`** _(140 linhas)_
Componente de NOTIFICACAO/ALERTA — mensagem temporaria que aparece na tela (ex: 'Salvo com sucesso!').

**`alert.tsx`** _(60 linhas)_
Componente de NOTIFICACAO/ALERTA — mensagem temporaria que aparece na tela (ex: 'Salvo com sucesso!').

**`aspect-ratio.tsx`** _(6 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`avatar.tsx`** _(51 linhas)_
Componente AVATAR — foto ou iniciais do usuario em formato circular.

**`badge.tsx`** _(38 linhas)_
Componente BADGE (etiqueta) — pequeno indicador com numero ou status (ex: '3 novas mensagens').

**`breadcrumb.tsx`** _(116 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`button-group.tsx`** _(84 linhas)_
Componente de BOTAO — elemento clicavel reutilizavel com estilo padrao do projeto.

**`button.tsx`** _(59 linhas)_
Componente de BOTAO — elemento clicavel reutilizavel com estilo padrao do projeto.

**`calendar.tsx`** _(214 linhas)_
Componente CALENDARIO/AGENDA — visualizacao e selecao de datas e eventos.

**`card.tsx`** _(77 linhas)_
Componente CARD (cartao) — exibe uma informacao em um bloco visual com borda e sombra. Muito usado para listas de items.

**`carousel.tsx`** _(261 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`chart.tsx`** _(366 linhas)_
Componente de GRAFICO — visualizacao de dados em forma de grafico (barras, linhas, pizza...).

**`checkbox.tsx`** _(29 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`collapsible.tsx`** _(12 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`command.tsx`** _(154 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`context-menu.tsx`** _(199 linhas)_
CONTEXT do React — mecanismo para compartilhar dados entre componentes sem passar por props.

**`dialog.tsx`** _(121 linhas)_
Componente DIALOG — caixa de dialogo que exige resposta do usuario (confirmar, cancelar...).

**`drawer.tsx`** _(117 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`dropdown-menu.tsx`** _(202 linhas)_
Componente de MENU/DROPDOWN — lista de opcoes que aparece ao clicar em um botao.

**`empty.tsx`** _(105 linhas)_
Componente de ESTADO VAZIO — exibido quando nao ha dados para mostrar (ex: 'Nenhum resultado encontrado').

**`field.tsx`** _(245 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`form.tsx`** _(177 linhas)_
Componente de FORMULARIO — campos de entrada de dados (texto, selecao, etc.) com validacao.

**`hover-card.tsx`** _(28 linhas)_
Componente CARD (cartao) — exibe uma informacao em um bloco visual com borda e sombra. Muito usado para listas de items.

**`input-group.tsx`** _(166 linhas)_
Componente de CAMPO DE ENTRADA — elemento de input com estilo personalizado.

**`input-otp.tsx`** _(70 linhas)_
Componente de CAMPO DE ENTRADA — elemento de input com estilo personalizado.

**`input.tsx`** _(23 linhas)_
Componente de CAMPO DE ENTRADA — elemento de input com estilo personalizado.

**`item.tsx`** _(194 linhas)_
Componente de ITEM — representa um elemento individual dentro de uma lista ou colecao.

**`kbd.tsx`** _(29 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`label.tsx`** _(27 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`menubar.tsx`** _(255 linhas)_
Componente de MENU/DROPDOWN — lista de opcoes que aparece ao clicar em um botao.

**`navigation-menu.tsx`** _(129 linhas)_
Componente de NAVEGACAO/CABECALHO — barra superior com logo, menu e links de navegacao.

**`pagination.tsx`** _(118 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`popover.tsx`** _(32 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`progress.tsx`** _(29 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`radio-group.tsx`** _(43 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`resizable.tsx`** _(46 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`scroll-area.tsx`** _(47 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`select.tsx`** _(160 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`separator.tsx`** _(30 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`sheet.tsx`** _(141 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`sidebar.tsx`** _(715 linhas)_
Componente de BARRA LATERAL — menu ou painel que aparece na lateral da tela.

**`skeleton.tsx`** _(16 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`slider.tsx`** _(27 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`sonner.tsx`** _(32 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`spinner.tsx`** _(17 linhas)_
Componente de CARREGAMENTO — animacao visual que aparece enquanto dados estao sendo buscados.

**`switch.tsx`** _(28 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`table.tsx`** _(121 linhas)_
Componente de TABELA — exibe dados em linhas e colunas.

**`tabs.tsx`** _(54 linhas)_
Componente de ABAS — permite alternar entre diferentes secoes de conteudo com clique.

**`textarea.tsx`** _(23 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`toast.tsx`** _(128 linhas)_
Componente de NOTIFICACAO/ALERTA — mensagem temporaria que aparece na tela (ex: 'Salvo com sucesso!').

**`toaster.tsx`** _(34 linhas)_
Componente de NOTIFICACAO/ALERTA — mensagem temporaria que aparece na tela (ex: 'Salvo com sucesso!').

**`toggle-group.tsx`** _(62 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`toggle.tsx`** _(44 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`tooltip.tsx`** _(33 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

---

## CONTEXTO PARA IA (copie e cole para continuar o projeto)

> Use este bloco para explicar o projeto para qualquer IA ou desenvolvedor:

```
Projeto: HTML/CSS/JS
Tipo: Aplicacao Web Frontend (React)
Stack: React, TypeScript
Arquivos: 327 | Linhas: ~63.458
Rotas API: 36 endpoint(s) detectado(s)
Variaveis de ambiente necessarias: LOG_LEVEL, AI_INTEGRATIONS_OPENAI_BASE_URL, AI_INTEGRATIONS_OPENAI_API_KEY, PORT, ALLOWED_ORIGINS, JWT_SECRET, JWT_EXPIRES_IN, DATABASE_URL, BASE_PATH, REPL_ID, OPENAI_API_KEY

Estrutura principal:
  .gitignore
  MANUAL.md
  PLANO.md
  README.md
  artifacts/api-server/.replit-artifact/artifact.toml
  artifacts/api-server/build.mjs
  artifacts/api-server/package.json
  artifacts/api-server/src/app.ts
  artifacts/api-server/src/index.ts
  artifacts/api-server/src/lib/.gitkeep
  artifacts/api-server/src/lib/logger.ts
  artifacts/api-server/src/middlewares/.gitkeep
  artifacts/api-server/src/routes/ai-chat.ts
  artifacts/api-server/src/routes/exec.ts
  artifacts/api-server/src/routes/github.ts
  artifacts/api-server/src/routes/health.ts
  artifacts/api-server/src/routes/index.ts
  artifacts/api-server/src/routes/proxy.ts
  artifacts/api-server/src/routes/search.ts
  artifacts/api-server/src/routes/voice.ts
  artifacts/api-server/tsconfig.json
  artifacts/code-editor/.replit-artifact/artifact.toml
  artifacts/code-editor/SYSTEM_DOCS.md
  artifacts/code-editor/components.json
  artifacts/code-editor/index.html
  artifacts/code-editor/package.json
  artifacts/code-editor/public/favicon.svg
  artifacts/code-editor/public/icon-192.png
  artifacts/code-editor/public/icon-512.png
  artifacts/code-editor/public/manifest.json
  artifacts/code-editor/public/opengraph.jpg
  artifacts/code-editor/public/sw.js
  artifacts/code-editor/src/App.tsx
  artifacts/code-editor/src/components/AIChat.tsx
  artifacts/code-editor/src/components/AssistenteJuridico.tsx
  artifacts/code-editor/src/components/CampoLivre.tsx
  artifacts/code-editor/src/components/CodeEditor.tsx
  artifacts/code-editor/src/components/EditorLayout.tsx
  artifacts/code-editor/src/components/FileTree.tsx
  artifacts/code-editor/src/components/GitHubPanel.tsx
  artifacts/code-editor/src/components/PackageSearch.tsx
  artifacts/code-editor/src/components/Preview.tsx
  artifacts/code-editor/src/components/QuickPrompt.tsx
  artifacts/code-editor/src/components/RealTerminal.tsx
  artifacts/code-editor/src/components/TemplateSelector.tsx
  artifacts/code-editor/src/components/Terminal.tsx
  artifacts/code-editor/src/components/VoiceCard.tsx
  artifacts/code-editor/src/components/VoiceMode.tsx
  artifacts/code-editor/src/components/ui/accordion.tsx
  artifacts/code-editor/src/components/ui/alert-dialog.tsx
  artifacts/code-editor/src/components/ui/alert.tsx
  artifacts/code-editor/src/components/ui/aspect-ratio.tsx
  artifacts/code-editor/src/components/ui/avatar.tsx
  artifacts/code-editor/src/components/ui/badge.tsx
  artifacts/code-editor/src/components/ui/breadcrumb.tsx
  artifacts/code-editor/src/components/ui/button-group.tsx
  artifacts/code-editor/src/components/ui/button.tsx
  artifacts/code-editor/src/components/ui/calendar.tsx
  artifacts/code-editor/src/components/ui/card.tsx
  artifacts/code-editor/src/components/ui/carousel.tsx
  artifacts/code-editor/src/components/ui/chart.tsx
  artifacts/code-editor/src/components/ui/checkbox.tsx
  artifacts/code-editor/src/components/ui/collapsible.tsx
  artifacts/code-editor/src/components/ui/command.tsx
  artifacts/code-editor/src/components/ui/context-menu.tsx
  artifacts/code-editor/src/components/ui/dialog.tsx
  artifacts/code-editor/src/components/ui/drawer.tsx
  artifacts/code-editor/src/components/ui/dropdown-menu.tsx
  artifacts/code-editor/src/components/ui/empty.tsx
  artifacts/code-editor/src/components/ui/field.tsx
  artifacts/code-editor/src/components/ui/form.tsx
  artifacts/code-editor/src/components/ui/hover-card.tsx
  artifacts/code-editor/src/components/ui/input-group.tsx
  artifacts/code-editor/src/components/ui/input-otp.tsx
  artifacts/code-editor/src/components/ui/input.tsx
  artifacts/code-editor/src/components/ui/item.tsx
  artifacts/code-editor/src/components/ui/kbd.tsx
  artifacts/code-editor/src/components/ui/label.tsx
  artifacts/code-editor/src/components/ui/menubar.tsx
  artifacts/code-editor/src/components/ui/navigation-menu.tsx
  artifacts/code-editor/src/components/ui/pagination.tsx
  artifacts/code-editor/src/components/ui/popover.tsx
  artifacts/code-editor/src/components/ui/progress.tsx
  artifacts/code-editor/src/components/ui/radio-group.tsx
  artifacts/code-editor/src/components/ui/resizable.tsx
  artifacts/code-editor/src/components/ui/scroll-area.tsx
  artifacts/code-editor/src/components/ui/select.tsx
  artifacts/code-editor/src/components/ui/separator.tsx
  artifacts/code-editor/src/components/ui/sheet.tsx
  artifacts/code-editor/src/components/ui/sidebar.tsx
  artifacts/code-editor/src/components/ui/skeleton.tsx
  artifacts/code-editor/src/components/ui/slider.tsx
  artifacts/code-editor/src/components/ui/sonner.tsx
  artifacts/code-editor/src/components/ui/spinner.tsx
  artifacts/code-editor/src/components/ui/switch.tsx
  artifacts/code-editor/src/components/ui/table.tsx
  artifacts/code-editor/src/components/ui/tabs.tsx
  artifacts/code-editor/src/components/ui/textarea.tsx
  artifacts/code-editor/src/components/ui/toast.tsx
  artifacts/code-editor/src/components/ui/toaster.tsx
  artifacts/code-editor/src/components/ui/toggle-group.tsx
  artifacts/code-editor/src/components/ui/toggle.tsx
  artifacts/code-editor/src/components/ui/tooltip.tsx
  artifacts/code-editor/src/hooks/use-mobile.tsx
  artifacts/code-editor/src/hooks/use-toast.ts
  artifacts/code-editor/src/index.css
  artifacts/code-editor/src/lib/ai-service.ts
  artifacts/code-editor/src/lib/github-service.ts
  artifacts/code-editor/src/lib/projects.ts
  artifacts/code-editor/src/lib/store.ts
  artifacts/code-editor/src/lib/templates.ts
  artifacts/code-editor/src/lib/tts-service.ts
  artifacts/code-editor/src/lib/utils.ts
  artifacts/code-editor/src/lib/virtual-fs.ts
  artifacts/code-editor/src/lib/zip-service.ts
  artifacts/code-editor/src/main.tsx
  artifacts/code-editor/tsconfig.json
  artifacts/code-editor/vite.config.ts
  artifacts/mockup-sandbox/components.json
  artifacts/mockup-sandbox/index.html
  artifacts/mockup-sandbox/mockupPreviewPlugin.ts
  artifacts/mockup-sandbox/package.json
  artifacts/mockup-sandbox/src/App.tsx
  artifacts/mockup-sandbox/src/components/ui/accordion.tsx
  artifacts/mockup-sandbox/src/components/ui/alert-dialog.tsx
  artifacts/mockup-sandbox/src/components/ui/alert.tsx
  artifacts/mockup-sandbox/src/components/ui/aspect-ratio.tsx
  artifacts/mockup-sandbox/src/components/ui/avatar.tsx
  artifacts/mockup-sandbox/src/components/ui/badge.tsx
  artifacts/mockup-sandbox/src/components/ui/breadcrumb.tsx
  artifacts/mockup-sandbox/src/components/ui/button-group.tsx
  artifacts/mockup-sandbox/src/components/ui/button.tsx
  artifacts/mockup-sandbox/src/components/ui/calendar.tsx
  artifacts/mockup-sandbox/src/components/ui/card.tsx
  artifacts/mockup-sandbox/src/components/ui/carousel.tsx
  artifacts/mockup-sandbox/src/components/ui/chart.tsx
  artifacts/mockup-sandbox/src/components/ui/checkbox.tsx
  artifacts/mockup-sandbox/src/components/ui/collapsible.tsx
  artifacts/mockup-sandbox/src/components/ui/command.tsx
  artifacts/mockup-sandbox/src/components/ui/context-menu.tsx
  artifacts/mockup-sandbox/src/components/ui/dialog.tsx
  artifacts/mockup-sandbox/src/components/ui/drawer.tsx
  artifacts/mockup-sandbox/src/components/ui/dropdown-menu.tsx
  artifacts/mockup-sandbox/src/components/ui/empty.tsx
  artifacts/mockup-sandbox/src/components/ui/field.tsx
  artifacts/mockup-sandbox/src/components/ui/form.tsx
  artifacts/mockup-sandbox/src/components/ui/hover-card.tsx
  artifacts/mockup-sandbox/src/components/ui/input-group.tsx
  artifacts/mockup-sandbox/src/components/ui/input-otp.tsx
  artifacts/mockup-sandbox/src/components/ui/input.tsx
  artifacts/mockup-sandbox/src/components/ui/item.tsx
  artifacts/mockup-sandbox/src/components/ui/kbd.tsx
  artifacts/mockup-sandbox/src/components/ui/label.tsx
  artifacts/mockup-sandbox/src/components/ui/menubar.tsx
  artifacts/mockup-sandbox/src/components/ui/navigation-menu.tsx
  artifacts/mockup-sandbox/src/components/ui/pagination.tsx
  artifacts/mockup-sandbox/src/components/ui/popover.tsx
  artifacts/mockup-sandbox/src/components/ui/progress.tsx
  artifacts/mockup-sandbox/src/components/ui/radio-group.tsx
  artifacts/mockup-sandbox/src/components/ui/resizable.tsx
  artifacts/mockup-sandbox/src/components/ui/scroll-area.tsx
  artifacts/mockup-sandbox/src/components/ui/select.tsx
  artifacts/mockup-sandbox/src/components/ui/separator.tsx
  artifacts/mockup-sandbox/src/components/ui/sheet.tsx
  artifacts/mockup-sandbox/src/components/ui/sidebar.tsx
  artifacts/mockup-sandbox/src/components/ui/skeleton.tsx
  artifacts/mockup-sandbox/src/components/ui/slider.tsx
  artifacts/mockup-sandbox/src/components/ui/sonner.tsx
  artifacts/mockup-sandbox/src/components/ui/spinner.tsx
  artifacts/mockup-sandbox/src/components/ui/switch.tsx
  artifacts/mockup-sandbox/src/components/ui/table.tsx
  artifacts/mockup-sandbox/src/components/ui/tabs.tsx
  artifacts/mockup-sandbox/src/components/ui/textarea.tsx
  artifacts/mockup-sandbox/src/components/ui/toast.tsx
  artifacts/mockup-sandbox/src/components/ui/toaster.tsx
  artifacts/mockup-sandbox/src/components/ui/toggle-group.tsx
  artifacts/mockup-sandbox/src/components/ui/toggle.tsx
  artifacts/mockup-sandbox/src/components/ui/tooltip.tsx
  artifacts/mockup-sandbox/src/hooks/use-mobile.tsx
  artifacts/mockup-sandbox/src/hooks/use-toast.ts
  artifacts/mockup-sandbox/src/index.css
  artifacts/mockup-sandbox/src/lib/utils.ts
  artifacts/mockup-sandbox/src/main.tsx
  artifacts/mockup-sandbox/tsconfig.json
  artifacts/mockup-sandbox/vite.config.ts
  campo-juridico/README.md
  campo-juridico/index.html
  campo-juridico/package-lock.json
  campo-juridico/package.json
  campo-juridico/public/manifest.json
  campo-juridico/public/sw.js
  campo-juridico/src/App.tsx
  campo-juridico/src/index.css
  campo-juridico/src/lib/docReader.ts
  campo-juridico/src/main.tsx
  campo-juridico/tsconfig.json
  campo-juridico/vercel.json
  campo-juridico/vite.config.ts
  lib/api-client-react/package.json
  lib/api-client-react/src/custom-fetch.ts
  lib/api-client-react/src/generated/api.schemas.ts
  lib/api-client-react/src/generated/api.ts
  lib/api-client-react/src/index.ts
  lib/api-client-react/tsconfig.json
  lib/api-client-react/tsconfig.tsbuildinfo
  lib/api-spec/openapi.yaml
  lib/api-spec/orval.config.ts
  lib/api-spec/package.json
  package.json
  pnpm-workspace.yaml
  sk-assistente/README.md
  sk-assistente/api/search.ts
  sk-assistente/index.html
  sk-assistente/package-lock.json
  sk-assistente/package.json
  sk-assistente/public/manifest.json
  sk-assistente/public/sw.js
  sk-assistente/src/App.tsx
  sk-assistente/src/components/Chat.tsx
  sk-assistente/src/components/Playground.tsx
  sk-assistente/src/components/Search.tsx
  sk-assistente/src/index.css
  sk-assistente/src/main.tsx
  sk-assistente/tsconfig.json
  sk-assistente/vercel.json
  sk-assistente/vite.config.ts
  vercel-export/README.md
  vercel-export/api/healthz.ts
  vercel-export/api/npm-search.ts
  vercel-export/api/search.ts
  vercel-export/api/voice/speak.ts
  vercel-export/api/voice/transcribe.ts
  vercel-export/index.html
  vercel-export/package.json
  vercel-export/public/favicon.svg
  vercel-export/public/icon-192.png
  vercel-export/public/icon-512.png
  vercel-export/public/manifest.json
  vercel-export/public/opengraph.jpg
  vercel-export/public/sw.js
  vercel-export/src/App.tsx
  vercel-export/src/components/AIChat.tsx
  vercel-export/src/components/AssistenteJuridico.tsx
  vercel-export/src/components/CampoLivre.tsx
  vercel-export/src/components/CodeEditor.tsx
  vercel-export/src/components/EditorLayout.tsx
  vercel-export/src/components/FileTree.tsx
  vercel-export/src/components/GitHubPanel.tsx
  vercel-export/src/components/PackageSearch.tsx
  vercel-export/src/components/Preview.tsx
  vercel-export/src/components/QuickPrompt.tsx
  vercel-export/src/components/RealTerminal.tsx
  vercel-export/src/components/TemplateSelector.tsx
  vercel-export/src/components/Terminal.tsx
  vercel-export/src/components/VoiceCard.tsx
  vercel-export/src/components/VoiceMode.tsx
  vercel-export/src/components/ui/accordion.tsx
  vercel-export/src/components/ui/alert-dialog.tsx
  vercel-export/src/components/ui/alert.tsx
  vercel-export/src/components/ui/aspect-ratio.tsx
  vercel-export/src/components/ui/avatar.tsx
  vercel-export/src/components/ui/badge.tsx
  vercel-export/src/components/ui/breadcrumb.tsx
  vercel-export/src/components/ui/button-group.tsx
  vercel-export/src/components/ui/button.tsx
  vercel-export/src/components/ui/calendar.tsx
  vercel-export/src/components/ui/card.tsx
  vercel-export/src/components/ui/carousel.tsx
  vercel-export/src/components/ui/chart.tsx
  vercel-export/src/components/ui/checkbox.tsx
  vercel-export/src/components/ui/collapsible.tsx
  vercel-export/src/components/ui/command.tsx
  vercel-export/src/components/ui/context-menu.tsx
  vercel-export/src/components/ui/dialog.tsx
  vercel-export/src/components/ui/drawer.tsx
  vercel-export/src/components/ui/dropdown-menu.tsx
  vercel-export/src/components/ui/empty.tsx
  vercel-export/src/components/ui/field.tsx
  vercel-export/src/components/ui/form.tsx
  vercel-export/src/components/ui/hover-card.tsx
  vercel-export/src/components/ui/input-group.tsx
  vercel-export/src/components/ui/input-otp.tsx
  vercel-export/src/components/ui/input.tsx
  vercel-export/src/components/ui/item.tsx
  vercel-export/src/components/ui/kbd.tsx
  vercel-export/src/components/ui/label.tsx
  vercel-export/src/components/ui/menubar.tsx
  vercel-export/src/components/ui/navigation-menu.tsx
  vercel-export/src/components/ui/pagination.tsx
  vercel-export/src/components/ui/popover.tsx
  vercel-export/src/components/ui/progress.tsx
  vercel-export/src/components/ui/radio-group.tsx
  vercel-export/src/components/ui/resizable.tsx
  vercel-export/src/components/ui/scroll-area.tsx
  vercel-export/src/components/ui/select.tsx
  vercel-export/src/components/ui/separator.tsx
  vercel-export/src/components/ui/sheet.tsx
  vercel-export/src/components/ui/sidebar.tsx
  vercel-export/src/components/ui/skeleton.tsx
  vercel-export/src/components/ui/slider.tsx
  vercel-export/src/components/ui/sonner.tsx
  vercel-export/src/components/ui/spinner.tsx
  vercel-export/src/components/ui/switch.tsx
  vercel-export/src/components/ui/table.tsx
  vercel-export/src/components/ui/tabs.tsx
  vercel-export/src/components/ui/textarea.tsx
  vercel-export/src/components/ui/toast.tsx
  vercel-export/src/components/ui/toaster.tsx
  vercel-export/src/components/ui/toggle-group.tsx
  vercel-export/src/components/ui/toggle.tsx
  vercel-export/src/components/ui/tooltip.tsx
  vercel-export/src/hooks/use-mobile.tsx
  vercel-export/src/hooks/use-toast.ts
  vercel-export/src/index.css
  vercel-export/src/lib/ai-service.ts
  vercel-export/src/lib/github-service.ts
  vercel-export/src/lib/projects.ts
  vercel-export/src/lib/store.ts
  vercel-export/src/lib/templates.ts
  vercel-export/src/lib/tts-service.ts
  vercel-export/src/lib/utils.ts
  vercel-export/src/lib/virtual-fs.ts
  vercel-export/src/lib/zip-service.ts
  vercel-export/src/main.tsx
  vercel-export/tsconfig.json
  vercel-export/vercel.json
  vercel-export/vite.config.ts
```

---

*Plano gerado pelo SK Code Editor — 14/04/2026, 01:40:47*