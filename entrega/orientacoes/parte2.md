# Projeto Final ES1 - Parte 2

## Tarefas da Parte 2

### Tarefa 1: Histórias de Usuário (2.0 pontos)

**Nota sobre adaptação didática**: Em projetos ágeis reais, histórias de usuário são intencionalmente concisas. O Product Owner e desenvolvedores detalham requisitos através de conversas. Para fins educacionais, documentaremos histórias de forma mais estruturada.

Escolha **3 funcionalidades** das 5 solicitadas na Parte 1 e escreva histórias de usuário para cada uma.

**a) Escrita das Histórias (1.5 pontos)**

Para cada funcionalidade escolhida, escreva:
- **História de Usuário** no formato: "Como [usuário], eu quero [objetivo] para [benefício]"
- **Critérios de Aceitação**: 3-5 critérios objetivos que definem quando a história está completa

Documente em arquivo `HISTORIAS.md`.

**Exemplo de formato esperado:**
```markdown
## História 1: Sistema de Votação

**Como** usuário do fórum,  
**Eu quero** votar em perguntas (upvote/downvote),  
**Para** destacar perguntas úteis e relevantes para a comunidade.

**Critérios de Aceitação:**
- [ ] Cada pergunta deve exibir botões de upvote e downvote
- [ ] O contador de votos deve ser atualizado em tempo real
- [ ] Usuários podem mudar seu voto (de upvote para downvote e vice-versa)
- [ ] Usuários não podem votar múltiplas vezes na mesma pergunta
```

**b) Priorização (0.5 pontos)**

**Nota sobre adaptação didática**: Em projetos reais, a priorização é responsabilidade do Product Owner/cliente. Para fins educacionais, você simulará este papel.

Ordene as 3 histórias por prioridade e justifique a ordem escolhida em `HISTORIAS.md`.

**Entrega**: Arquivo `HISTORIAS.md` com 3 histórias completas e priorizadas.

---

### Tarefa 2: Caso de Uso Detalhado (1.5 pontos)

Escolha **1 história** das 3 criadas na Tarefa 1 e detalhe como um **Caso de Uso**.

Documente em arquivo `CASO_DE_USO.md` incluindo:

- **Nome do Caso de Uso**
- **Atores**
- **Pré-condições**
- **Fluxo Principal** (numerado, passo a passo)
- **Fluxos Alternativos** (pelo menos 1)
- **Pós-condições**

**Exemplo de estrutura:**
```markdown
## Caso de Uso: Votar em Pergunta

**Atores:** Usuário autenticado

**Pré-condições:**
- Usuário está logado no sistema
- Pergunta existe no banco de dados

**Fluxo Principal:**
1. Sistema exibe lista de perguntas com contador de votos
2. Usuário seleciona botão de upvote/downvote em uma pergunta
3. Sistema valida se usuário já votou nesta pergunta
4. Sistema registra o voto no banco de dados
5. Sistema atualiza o contador de votos
6. Sistema exibe confirmação visual do voto

**Fluxo Alternativo 1: Usuário já votou**
3a. Sistema detecta que usuário já votou
3b. Sistema remove voto anterior
3c. Sistema registra novo voto
3d. Retorna ao passo 5 do fluxo principal
```

**Entrega**: Arquivo `CASO_DE_USO.md`.

---

### Tarefa 3: Diagramas UML (6.5 pontos)

**Nota sobre UML como sketch**: Use UML de forma leve e pragmática. Os diagramas devem comunicar ideias, não documentar exaustivamente todos os detalhes. Ferramentas simples são suficientes (draw.io, Mermaid, Lucidchart, ou até papel fotografado).

Crie 4 diagramas UML para o sistema ESM Forum com as extensões propostas:

#### a) Diagrama de Classes (2.0 pontos)

Modele as principais classes do domínio:
- Classes do sistema atual: `Pergunta`, `Resposta`, `Usuario`
- Novas classes relacionadas às funcionalidades escolhidas
- Atributos principais
- Relacionamentos (associações, multiplicidades)

Não é necessário incluir métodos detalhadamente - foque na estrutura de dados.

**Entrega**: 
- Arquivo de imagem `diagrama_classes.png` (ou `.jpg`, `.svg`)
- **SE usar Mermaid ou PlantUML**: arquivo fonte (`.mmd` ou `.puml`)
- **SE usar draw.io ou Lucidchart**: link compartilhável do projeto
- **SE usar ferramenta de modelagem (Modelio, ArgoUML, etc.)**: arquivo do projeto

#### b) Diagrama de Sequência (2.0 pontos)

Modele a interação entre objetos para o **caso de uso detalhado** (Tarefa 2).

Inclua:
- Atores e objetos principais (ex: `:Usuario`, `:Frontend`, `:API`, `:Banco`)
- Mensagens trocadas entre objetos
- Fluxo completo de uma operação

**Entrega**: 
- Arquivo de imagem `diagrama_sequencia.png`
- **SE usar Mermaid ou PlantUML**: arquivo fonte (`.mmd` ou `.puml`)
- **SE usar draw.io ou Lucidchart**: link compartilhável do projeto
- **SE usar ferramenta de modelagem (Modelio, ArgoUML, etc.)**: arquivo do projeto

#### c) Diagrama de Atividades (1.5 pontos)

Modele o fluxo de atividades para **uma funcionalidade** escolhida (pode ser a mesma do caso de uso ou outra).

Inclua:
- Atividades principais
- Decisões (diamantes)
- Fluxos paralelos, se aplicável
- Início e fim

**Entrega**: 
- Arquivo de imagem `diagrama_atividades.png`
- **SE usar Mermaid ou PlantUML**: arquivo fonte (`.mmd` ou `.puml`)
- **SE usar draw.io ou Lucidchart**: link compartilhável do projeto
- **SE usar ferramenta de modelagem (Modelio, ArgoUML, etc.)**: arquivo do projeto

#### d) Diagrama de Estados (1.0 ponto)

Modele os estados possíveis de **um objeto do domínio** (ex: `Pergunta`, `Usuario`, etc.).

Inclua:
- Estados principais
- Transições entre estados
- Eventos que causam transições

**Entrega**: 
- Arquivo de imagem `diagrama_estados.png`
- **SE usar Mermaid ou PlantUML**: arquivo fonte (`.mmd` ou `.puml`)
- **SE usar draw.io ou Lucidchart**: link compartilhável do projeto
- **SE usar ferramenta de modelagem (Modelio, ArgoUML, etc.)**: arquivo do projeto

**Dica**: Para diagramas, você pode usar:
- [Mermaid](https://mermaid.live/) (pode ser embutido direto no README do GitHub)
- [draw.io](https://app.diagrams.net/)
- [Lucidchart](https://www.lucidchart.com/)
- Papel e caneta (fotografe e inclua a imagem)

---

## Pontuação Total da Parte 2: 10.0 pontos

| Tarefa | Nota |
|--------|--------|
| Histórias de Usuário | 2.0 |
| Caso de Uso Detalhado | 1.5 |
| Diagrama de Classes | 2.0 |
| Diagrama de Sequência | 2.0 |
| Diagrama de Atividades | 1.5 |
| Diagrama de Estados | 1.0 |
| **TOTAL** | **10.0** |

---

## Critérios de Qualidade

- **Completude**: Histórias, caso de uso e diagramas devem cobrir aspectos essenciais
- **Corretude**: Uso correto das notações e conceitos estudados
- **Clareza**: Diagramas legíveis e bem organizados
- **Relevância**: Foco nos aspectos mais importantes, evitando detalhamento excessivo

---

## Prazo de Entrega

**Até o final da Semana 6**

Submeta todos os arquivos markdown e imagens nos repositórios do projeto.
