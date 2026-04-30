# 03 — Quiz de Personalidade
 
> Perguntas com opções, JS contabiliza as respostas e exibe um resultado no final.
 
---
 
## Checklist de desenvolvimento
 
### Estrutura do projeto
- [ ] Criar pasta com `index.html`, `style.css` e `script.js`
- [ ] Planejar o tema do quiz (filmes, times, animes, etc.)
- [ ] Escrever pelo menos 5 perguntas com 3 opções cada
- [ ] Definir pelo menos 3 resultados possíveis
### HTML semântico
- [ ] Usar `<main>` como container principal
- [ ] Cada pergunta dentro de `<section>` ou `<fieldset>`
- [ ] Opções com `<input type="radio">` + `<label>` linkados
- [ ] Tela de resultado em elemento separado (escondido no início)
- [ ] Botão de reiniciar o quiz
### JavaScript
- [ ] Variáveis com `const` e `let` (sem `var`)
- [ ] JS em arquivo separado (`script.js`)
- [ ] Mostrar só a pergunta atual (esconder as outras com JS)
- [ ] Avançar para próxima pergunta ao selecionar uma opção ou clicar em botão
- [ ] Contabilizar pontuação ou perfil conforme as respostas
- [ ] Exibir resultado correto no final baseado na pontuação
- [ ] Botão de reiniciar que zera tudo e volta ao começo
### CSS
- [ ] Variáveis no `:root`
- [ ] Transição suave ao trocar de pergunta (opacity ou transform)
- [ ] Opção selecionada com estilo visual diferente (`:checked` + CSS)
- [ ] Tela de resultado com destaque visual
- [ ] Responsivo para mobile
### Qualidade
- [ ] Sem erros no console
- [ ] Testado com todas as combinações de respostas
- [ ] README com print do projeto
---
 
## Resultado esperado
Quiz funcional que percorre todas as perguntas, calcula o resultado corretamente e exibe de forma visualmente clara. Alguém que nunca viu o código consegue jogar sem travar.
