# Processo de desenvolvimento: Kanban

## Escolha

Para um projeto individual, com cinco melhorias e apenas uma implementação obrigatória na etapa final, escolho Kanban. O trabalho avança em fluxo contínuo, com prioridade visível e limite de trabalho em andamento, sem introduzir cerimônias ou compromissos de sprint artificiais. Scrum seria adequado a uma equipe com ciclos regulares e papéis estabelecidos; aqui o custo dessa estrutura seria maior que seu benefício.

As semanas do enunciado continuam sendo marcos de entrega. Kanban não elimina planejamento: o backlog é revisto nesses marcos e as tarefas são puxadas conforme capacidade.

## Board do projeto

| Coluna | Política |
|---|---|
| Backlog | Ideias priorizadas, ainda sem compromisso de execução |
| Pronto | História compreendida, critérios definidos, dependências identificadas |
| Em andamento | No máximo um card de implementação |
| Em revisão | No máximo um card; revisão de código, testes e documentação |
| Concluído | Critérios conferidos e evidência de revisão registrada |

O board foi criado em https://github.com/users/Richardmoc/projects/2. Os cinco cards estão vinculados ao fork Richardmoc/esmforum: busca em Em Revisão e as quatro demais funcionalidades em Backlog, na ordem abaixo. Situação conferida nos prints fornecidos pelo aluno em 27/09/2026; o quadro exibe acesso público. `backlog.csv` permanece como roteiro de conteúdo. A publicação do código e o aceite final do aluno ainda estão pendentes.

## Priorização das cinco funcionalidades

1. **Busca**: valor imediato na localização de conteúdo, reaproveita o esquema atual e independe de autenticação. Encontra-se em revisão do aluno neste pacote.
2. **Tags**: melhora organização; requer tabelas e relação muitos-para-muitos. Planejada.
3. **Votação**: destaca relevância, mas exige identidade confiável e unicidade do voto. Planejada.
4. **Perfil**: reúne participação, mas respostas atuais não têm autor persistido. Planejada.
5. **Notificações**: exige identificação do destinatário, registro e política de leitura/entrega. Planejada.

A prioridade equilibra benefício e dependências técnicas, não apenas esforço. Autenticação é uma dependência explícita das histórias que necessitam de identidade, não uma funcionalidade que já exista no projeto-base.

## Definições de pronto e concluído

Pronto: critérios testáveis, escopo conhecido, dados e dependências descritos. Concluído: código integrado, testes relevantes aprovados, interface conferida, documentos atualizados e aceite pessoal do aluno. A aprovação automatizada sozinha não representa o aceite final.

Mediria tempo de ciclo entre Em andamento e Concluído e idade dos cards bloqueados. Neste atendimento não existe histórico suficiente para calcular métricas ou alegar melhoria de produtividade.
