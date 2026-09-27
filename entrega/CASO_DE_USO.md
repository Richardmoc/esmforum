# UC01 — Buscar perguntas por palavra-chave

**História:** H1. **Ator principal:** leitor do fórum. **Atores de apoio:** API e banco SQLite, representados como participantes técnicos no diagrama de sequência.

**Pré-condições:** frontend acessível, backend iniciado, esquema de perguntas e respostas disponível. Login não é necessário. Uma base vazia é válida.

## Fluxo principal

1. O leitor acessa a página de perguntas e visualiza a lista inicial.
2. Informa um termo no campo de busca e aciona Buscar.
3. O frontend codifica o termo e envia GET `/perguntas/busca?q=termo`.
4. O controller entrega o parâmetro ao serviço, que valida tipo/tamanho e remove espaços externos.
5. O serviço solicita a busca ao contrato do repositório.
6. O adaptador SQLite executa consulta parametrizada por substring, com contagem de respostas.
7. A API devolve HTTP 200 com um array de perguntas.
8. O frontend encerra o carregamento e apresenta os resultados e suas quantidades de respostas.

## Fluxos alternativos

A1 — Termo vazio: no passo 4, normaliza-se para string vazia; o passo 6 retorna todas as perguntas. “Limpar busca” também aciona esse comportamento.

A2 — Sem correspondências: no passo 7, retorna-se `[]`; no passo 8, aparece mensagem de ausência de resultados.

A3 — Termo inválido: no passo 4, valor não textual ou maior que 100 caracteres gera HTTP 400 com mensagem de validação. A interface limita o campo, mas o servidor também valida clientes diretos.

A4 — Falha de persistência: no passo 6, a API responde 500 com mensagem genérica. A interface informa a falha. Não são expostos SQL, caminhos ou detalhes internos.

A5 — Nova busca durante requisição anterior: a interface cancela a requisição anterior e ignora seu resultado, evitando que a busca antiga sobrescreva a atual.

**Pós-condições de sucesso:** resultados coerentes com o filtro; nenhuma pergunta ou resposta alterada. **Pós-condições de falha:** dados preservados e erro informado. Não há execução paralela de atividades de negócio nesse caso de uso.

Diagramas: `diagramas/diagrama_sequencia.png` e `diagramas/diagrama_atividades.png`.
