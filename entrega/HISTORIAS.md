# Histórias de usuário priorizadas

## H1 — Buscar perguntas (prioridade 1; implementada, aguardando revisão pessoal)

**Como** leitor do fórum, **eu quero** buscar perguntas por palavra-chave **para** localizar discussões relevantes sem percorrer toda a listagem.

Critérios de aceitação:
1. Dado um termo de até 100 caracteres, encontrar perguntas cujo texto contenha esse termo; remover espaços externos e ignorar caixa para ASCII. Acentos permanecem significativos.
2. Mostrar ID, texto e quantidade de respostas de cada resultado em ordem crescente de ID.
3. Termo vazio, ausente ou somente espaços deve listar todas as perguntas; “Limpar busca” restaura a listagem.
4. Nenhuma correspondência deve retornar lista vazia e apresentar “Nenhuma pergunta encontrada”, sem tratar isso como falha.
5. Entrada não textual ou acima do limite deve gerar HTTP 400; a interface deve mostrar carregamento e falhas de requisição sem apresentar resultados antigos como atuais.

## H2 — Classificar perguntas por tags (prioridade 2; proposta)

**Como** autor de uma pergunta, **eu quero** associar categorias ao conteúdo **para** facilitar sua descoberta por leitores interessados no tema.

Critérios de aceitação:
1. Uma pergunta deve receber de uma a três tags escolhidas em catálogo, como tecnologia, carreira e duvidas-gerais.
2. O sistema deve normalizar tags e impedir associação duplicada à mesma pergunta.
3. A listagem e o detalhe devem exibir as tags associadas.
4. A seleção de uma tag deve mostrar apenas perguntas com essa associação; ausência de resultados deve ser informada.
5. Alteração de tags deve exigir autoria validada; sem autorização, responder 403 e não modificar associações.

Dependências: tabela de tags, associação pergunta-tag e identidade/autorização do autor. A aplicação-base ainda não atende à última dependência.

## H3 — Votar em perguntas (prioridade 3; proposta)

**Como** usuário autenticado, **eu quero** votar positiva ou negativamente em perguntas **para** sinalizar conteúdos relevantes para a comunidade.

Critérios de aceitação:
1. Cada pergunta deve apresentar upvote, downvote e saldo de votos.
2. Um usuário pode ter apenas um voto por pergunta, garantido por chave única no banco.
3. Trocar +1 por -1, ou o inverso, deve atualizar o mesmo registro e ajustar o saldo; repetir o mesmo voto é idempotente.
4. Sem sessão válida, responder 401 e manter o saldo; voto diferente de +1/-1 recebe 400.
5. Após confirmação da API, a interface deve exibir o saldo atualizado; em falha, deve manter o último saldo confirmado e informar o erro.

Dependências: autenticação, tabela de votos e atualização transacional. Não é suficiente confiar em um id_usuario enviado livremente pelo cliente.

## Justificativa

Busca produz utilidade com menor acoplamento à identidade de usuários e pode ser concluída na única iteração de implementação. Tags ampliam a organização do conteúdo, enquanto votação exige garantir integridade e impedir duplicações por usuário. Essa ordem é coerente com PROCESSO.md. As demais funcionalidades continuam no backlog, mas não recebem histórias detalhadas nesta parte porque o enunciado pede três.
