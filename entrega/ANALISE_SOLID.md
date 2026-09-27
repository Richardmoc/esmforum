# Análise SOLID do backend existente

## Escopo e cautela

Análise do commit original `e819f6da358c11c1e43b8db4561145b297446edb`. Os exemplos abaixo são de `server.js`, `modelo.js` e `bd/bd_utils.js`. Não existem pastas routes/models nesse snapshot. O backend é procedural, pequeno e didático: os pontos positivos são **aderências locais**, não prova de conformidade integral a SOLID. Não atribuo LSP a um sistema sem hierarquia ou contrato de subtipos demonstrado.

## Três pontos positivos

### 1. SRP: consulta específica em modelo.js

```js
function get_pergunta(id_pergunta) {
  return bd.query('select * from perguntas where id_pergunta = ?', [id_pergunta]);
}
```

A função tem uma finalidade coesa: recuperar a pergunta. Não conhece HTTP nem renderiza componentes. Essa separação reduz seus motivos de mudança, embora o módulo completo ainda misture domínio e persistência.

### 2. SRP: encapsulamento do driver em bd/bd_utils.js

```js
function queryAll(query, params) {
  return bd.prepare(query).all(params);
}
```

A preparação e execução pelo driver estão concentradas no módulo de banco. Alterações no modo de chamar better-sqlite3 ficam localizadas. Isso não torna o modelo independente de SQL; é uma separação parcial de responsabilidade técnica.

### 3. DIP parcial: substituição da dependência nos testes

```js
var bd = require('./bd/bd_utils.js');
function reconfig_bd(mock_bd) {
  bd = mock_bd;
}
```

`modelo.js` utiliza os métodos query, queryAll e exec, permitindo substituir a dependência por um objeto compatível, como em `testes/listar_perguntas.test.js`. A operação pode ser testada sem banco real. É um ponto favorável à inversão, mas incompleto: o módulo ainda importa uma implementação concreta e permite mutação global. Injeção por construtor/fábrica e contrato explícito seriam preferíveis.

## Duas oportunidades de melhoria

### 1. DIP: o modelo depende de SQL e importa o banco concreto

```js
const params = [texto, 1];
const result = bd.exec('INSERT INTO perguntas (texto, id_usuario) VALUES(?, ?) RETURNING id_pergunta', params);
```

A operação de aplicação conhece instrução SQL, formato do retorno e detalhes de autoria. Trocar persistência exige alterar o modelo. Proposta: um serviço recebe contrato `perguntas.salvar(...)`, enquanto um adaptador SQLite contém SQL. Na busca implementada, o contrato adotado é `buscar(termo)`; a composição concreta fica em server.js.

### 2. SRP: listar_perguntas combina listagem e enriquecimento por resposta

```js
const perguntas = bd.queryAll('select * from perguntas', []);
perguntas.forEach(pergunta => pergunta['num_respostas'] = get_num_respostas(pergunta['id_pergunta']));
```

A função coordena a política da listagem e a estratégia de acesso para calcular contagens. Mudanças na representação e no plano de consulta afetam o mesmo trecho, e a execução faz N+1 consultas. A violação é de separação de responsabilidades; o custo N+1 é uma consequência técnica adicional, não um princípio SOLID por si só. Proponho devolver uma projeção pronta pelo repositório e deixar o serviço coordenar o caso de uso. A nova busca materializa essa separação sem reescrever todo o legado.

## Limite da análise

Não há três evidências fortes de três princípios diferentes no código-base. O enunciado solicita três trechos positivos, e os exemplos acima demonstram SRP e uma aproximação de DIP, com suas limitações explicitadas. OCP é demonstrado na extensão de busca, não atribuído retrospectivamente a cada função original.
