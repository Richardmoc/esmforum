# Projeto Final ES1 - Parte 1

## Contexto do Projeto

Você (individual ou em dupla) foi contratado para trabalhar como desenvolvedor no projeto **ESM Forum**, um sistema minimalista de fórum de perguntas e respostas mantido pela comunidade do livro *Engenharia de Software Moderna*.

O ESM Forum é um sistema real com objetivo didático, composto por:
- **Backend**: Node.js, Express, SQLite ([repositório](https://github.com/jeffsantos/esmforum))
- **Frontend**: React ([repositório](https://github.com/jeffsantos/esmforum-react))

O cliente solicitou melhorias e novas funcionalidades no sistema. Seu papel como desenvolvedor é entender o sistema existente, planejar as extensões solicitadas e implementá-las seguindo boas práticas de Engenharia de Software.

---

## Tarefas da Parte 1

### Tarefa 1: Configuração do Ambiente (1.0 ponto)

Clone os repositórios do projeto e configure o ambiente de desenvolvimento:
- Fork dos repositórios [esmforum](https://github.com/jeffsantos/esmforum) e [esmforum-react](https://github.com/jeffsantos/esmforum-react)
- Instalação e execução local do backend e frontend
- Documentação do processo de instalação em arquivo `INSTALACAO.md` no seu repositório

**Entrega**: Links dos repositórios configurados e arquivo de documentação.

---

### Tarefa 2: Planejamento Ágil com GitHub Projects (5.0 pontos)

O cliente solicitou 5 novas funcionalidades para o sistema:

1. **Sistema de votação em perguntas** (upvote/downvote)
2. **Busca de perguntas por palavra-chave**
3. **Categorização de perguntas** (tags: tecnologia, carreira, dúvidas-gerais, etc.)
4. **Perfil de usuário** com histórico de perguntas e respostas
5. **Notificação de novas respostas** às suas perguntas

Crie um projeto no GitHub Projects para gerenciar o desenvolvimento:

**a) Escolha do Board (2.0 pontos)**
- Escolha entre board estilo **Scrum** ou **Kanban** 
- Justifique sua escolha em arquivo `PROCESSO.md` explicando as características do processo escolhido e por que ele é adequado para este projeto

**b) Estruturação do Board (3.0 pontos)**
- Configure as colunas adequadas ao processo escolhido
- Crie cards iniciais para as 5 funcionalidades solicitadas
- Priorize as funcionalidades (ordene os cards por prioridade)

**Entrega**: Link do GitHub Projects configurado e arquivo `PROCESSO.md`.

---

### Tarefa 3: Práticas de Extreme Programming (4.0 pontos)

**Nota sobre adaptação didática**: Em projetos reais, muitas dessas práticas são aplicadas de forma orgânica pela equipe. Para fins educacionais, documentaremos explicitamente algumas práticas para demonstrar seu entendimento.

**a) Design Simples (2.0 pontos)**

Analise o código atual do backend (especialmente `routes/perguntas.js` e `routes/respostas.js`) e identifique:
- Aspectos do código que seguem o princípio de design simples (YAGNI - You Aren't Gonna Need It)
- Oportunidades de simplificação, se houver

Documente em arquivo `DESIGN_SIMPLES.md` com exemplos de código.

**b) Planejamento de Pair Programming (2.0 pontos)**

**Nota sobre adaptação didática**: Em contextos educacionais a distância, pair programming pode ser adaptado. Se trabalhar em dupla, documente como pretendem aplicar esta prática (ferramentas de compartilhamento de tela, divisão de papéis de driver e navigator). Se trabalhar individualmente, descreva como aplicaria pair programming se tivesse um par.

Documente em `PAIR_PROGRAMMING.md`:
- Estratégia para aplicar pair programming no desenvolvimento das funcionalidades
- Ferramentas que serão utilizadas (VS Code Live Share, Discord, etc.)
- Rotação de papéis (driver/navigator)

**Entrega**: Arquivos `DESIGN_SIMPLES.md` e `PAIR_PROGRAMMING.md`.

---

## Pontuação Total da Parte 1: 10.0 pontos

| Tarefa | Nota |
|--------|--------|
| Configuração do Ambiente | 1.0 |
| Planejamento Ágil | 5.0 |
| Práticas XP | 4.0 |
| **TOTAL** | **10.0** |

---

## Critérios de Qualidade

- **Clareza na documentação**: Explicações objetivas e bem estruturadas
- **Aplicação correta dos conceitos**: Demonstrar entendimento de processos ágeis e práticas XP
- **Justificativas**: Decisões devem ser fundamentadas com base nos conceitos estudados
- **Organização**: Repositórios bem estruturados com documentação clara

---

## Prazo de Entrega

**Até o final da Semana 3**

Submeta:
- Links dos repositórios (fork do esmforum e esmforum-react)
- Link do GitHub Projects
- Todos os arquivos markdown solicitados devem estar nos repositórios
