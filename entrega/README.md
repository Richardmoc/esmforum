# ESM Forum — Projeto Final de Engenharia de Software I

Material de apoio à entrega de Richard Brandão • FGV • 27/09/2026

Este pacote reúne as três partes do enunciado, duas cópias de repositórios Git com histórico original e alterações locais, documentação e diagramas. A funcionalidade implementada é **busca por palavra-chave**. Votação, tags, perfil e notificações têm planejamento; não estão implementados.

## Antes de entregar

1. Leia e revise os documentos e execute o projeto conforme `INSTALACAO.md`. A atividade é individual; adapte a redação às suas decisões e às regras da instituição para uso de IA.
2. Crie seus forks e o GitHub Projects, seguindo `ENTREGA.md`. **Nenhum fork pessoal ou board remoto foi criado neste atendimento.**
3. Preencha os três links em `LINKS.md`, confira os cards e só então gere o ZIP final. O pacote atual tem pendências externas, identificadas na matriz abaixo.

## Conteúdo e atendimento

| Parte | Requisito | Local | Situação |
|---|---|---|---|
| 1 | Ambiente e links dos forks | INSTALACAO.md; LINKS.md | Código obtido; links pessoais pendentes |
| 1 | Board com cinco cards | PROCESSO.md; backlog.csv | Planejamento pronto; configuração remota pendente |
| 1 | Design simples e pair programming | DESIGN_SIMPLES.md; PAIR_PROGRAMMING.md | Análise e plano individual |
| 2 | Três histórias priorizadas | HISTORIAS.md | Busca, tags e votação |
| 2 | Caso de uso | CASO_DE_USO.md | Buscar perguntas |
| 2 | Quatro diagramas UML | diagramas/diagrama_*.mmd e .png | Modelo conceitual e fluxos |
| 3 | Análise e implementação SOLID | ANALISE_SOLID.md; IMPLEMENTACAO_SOLID.md | Busca implementada |
| 3 | Padrões atuais e três propostas | PADROES_EXISTENTES.md; PADROES_PROPOSTOS.md | Análise e propostas |
| 3 | Arquitetura atual e proposta | ARQUITETURA.md; PROPOSTA_ARQUITETURA.md | Diagramas e fluxos |
| Todas | Verificação | TESTES.md; evidencias/ | Resultados registrados após execução |

## Organização

- `backend/`: repositório Node.js/Express/SQLite, com sua pasta `.git`.
- `frontend/`: repositório React, com sua pasta `.git`.
- Arquivos Markdown na raiz: dossiê acadêmico. Também disponibilizado em `backend/entrega/` no fechamento do pacote, para integrar o repositório solicitado.
- `diagramas/`: fontes Mermaid e imagens PNG.
- `orientacoes/`: enunciados fornecidos, preservados para rastreabilidade.
- `FONTES.md`: origem, commits de referência e limites das análises.

O enunciado menciona `routes/` e `models/`; os commits consultados usam `server.js`, `modelo.js` e `bd/bd_utils.js`. As análises apontam esses arquivos reais, sem pressupor uma estrutura inexistente.

## Limites conhecidos

Busca por substring no texto, até 100 caracteres, com espaços externos removidos. Caixa é ignorada para caracteres ASCII; não há remoção de acentos nem equivalência garantida entre maiúsculas/minúsculas acentuadas no SQLite padrão. Sem paginação ou ranking. A aplicação didática original não tem autenticação real: o cadastro de perguntas fixa usuário 1 e respostas não possuem autor persistido. Não apresentar votação/perfil como concluídos. O lockfile foi atualizado apenas para remover sqlite3, dependência não utilizada; isto não é uma aplicação pronta para produção.
