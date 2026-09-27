# Implementação: busca por palavra-chave

## Escopo

Implementada H1, incluindo endpoint GET `/perguntas/busca`, integração React, validação e testes. Sem migração do esquema. Rotas originais preservadas. `server.js` passa a exportar app e só abre a porta quando executado diretamente, permitindo testes HTTP com porta temporária.

## SRP

| Arquivo | Responsabilidade |
|---|---|
| busca/servico.js | Validar e normalizar a entrada, coordenar o caso de uso |
| busca/repositorio-sqlite.js | Consultar SQLite e montar projeção de perguntas/contagens |
| busca/controller.js | Converter HTTP em entrada de serviço e resultado/erro em HTTP |
| server.js | Compor dependências e registrar a rota |
| frontend/src/pages/Pergunta.js | Formulário, carregamento, resultados e mensagens |

## DIP

O serviço recebe um objeto que respeita `buscar(termo): Array<Pergunta>`. É um contrato estrutural síncrono, documentado em JavaScript; não é necessário criar uma classe abstrata vazia.

```js
class BuscarPerguntas {
  constructor(repositorio) { this.repositorio = repositorio; }
  executar(entrada = '') {
    if (typeof entrada !== 'string' || entrada.length > 100) {
      throw new TermoInvalido('Use um texto de até 100 caracteres.');
    }
    return this.repositorio.buscar(entrada.trim());
  }
}
```

O serviço não importa Express, better-sqlite3 nem SQL. O teste com repositório falso comprova que pode operar com outra implementação do contrato.

## OCP

Uma nova implementação de repositório com o mesmo contrato pode ser adicionada sem modificar o serviço nem o controller. A ligação é feita no ponto de composição:

```js
app.get('/perguntas/busca', criarControllerBusca(
  new BuscarPerguntas(new RepositorioPerguntasSqlite(bd))
));
```

O fechamento é relativo ao eixo de variação escolhido: persistência síncrona. Um driver assíncrono exigiria evoluir o contrato e o controller; não alego substituição automática de qualquer banco. Alterar a composição é esperado, e a inclusão inicial da rota naturalmente modifica server.js.

## Consulta e integridade

A consulta usa `instr(lower(p.texto), lower(?)) > 0`, LEFT JOIN, COUNT e GROUP BY. O parâmetro é vinculado, não interpolado. `%` e `_` não viram curingas. String vazia corresponde a todos os textos. Não há mudanças no banco durante a busca.

## Contrato HTTP

- 200: array, inclusive vazio, com ID/texto/autor/contagem.
- 400: objeto `{erro: mensagem}` para termo inválido.
- 500: objeto com mensagem genérica, sem detalhes de infraestrutura.

Não há autenticação porque a leitura de perguntas é pública no escopo adotado. O limite de 100 caracteres é uma decisão de projeto documentada nos critérios. Busca sem acentos, paginação, relevância e autenticação não integram esta implementação.

## Verificação e histórico

Os testes e resultados reais estão em TESTES.md. Os históricos `.git` dos dois repositórios preservam a origem e commits locais de implementação; foram criados neste atendimento, sem datas retroativas ou simulação de várias semanas de trabalho.
