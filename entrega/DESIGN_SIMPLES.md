# Design simples no código-base

Base analisada: backend no commit indicado em FONTES.md. O código está em `server.js` e `modelo.js`, não em routes/perguntas.js ou routes/respostas.js.

## Aspectos favoráveis a YAGNI

1. Cada operação usa uma função pequena, sem hierarquia de classes para CRUD simples. Em `modelo.js`:

```js
function get_pergunta(id_pergunta) {
  return bd.query('select * from perguntas where id_pergunta = ?', [id_pergunta]);
}
```

A função atende à necessidade atual de obter uma pergunta. Não antecipa regras de perfil ou de votação ainda inexistentes.

2. `server.js` monta um objeto JSON diretamente na leitura de respostas:

```js
res.json({ pergunta: pergunta, respostas: respostas });
```

É suficiente para o cliente didático. Acrescentar uma infraestrutura genérica de serialização a todas as rotas não seria necessário neste tamanho de sistema.

3. SQLite concentra a persistência local, sem introduzir serviços distribuídos. Simplicidade é adequação ao contexto, não ausência de validação ou testes.

## Oportunidades concretas

`listar_perguntas()` consulta todas as perguntas e depois chama `get_num_respostas()` para cada uma. Isso gera N+1 consultas. A busca implementada usa LEFT JOIN e COUNT em uma consulta, mantendo perguntas sem respostas e sem criar um framework de consultas.

Na rota GET `/respostas/:id_pergunta`, `get_pergunta` e `get_respostas` são chamados antes do try. Uma revisão futura deve colocá-los no bloco protegido e responder 404 para pergunta inexistente. Essa correção é uma oportunidade identificada; não é alegada como implementada nesta entrega.

Evitaria introduzir classes para cada tabela apenas por formalidade. A nova busca tem somente um serviço, um adaptador de persistência e um controller; o contrato por método basta em JavaScript. O enunciado exige demonstrar SOLID, mas isso não justifica criar autenticação, mensageria ou uma camada abstrata genérica sem uso.
