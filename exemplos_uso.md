# Exemplos de Uso das Funções do Projeto

## 1. Exemplo de uso das rotas da API

### 1.1. IA Chat
**Rota:** `POST /api/ai/chat`  
**Uso:**
```javascript
const response = await fetch('/api/ai/chat', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    messages: [
      { role: 'user', content: 'Qual é a previsão do tempo para amanhã?' },
      { role: 'assistant', content: 'Não sei, mas posso ajudar a encontrar.' }
    ],
    system: 'Você é um assistente virtual.'
  }),
});
const data = await response.json();
console.log(data.content); // Resposta da IA