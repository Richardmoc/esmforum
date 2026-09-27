# Padrões e estruturas presentes no projeto-base

## Adapter — aproximação em bd/bd_utils.js

As funções query, queryAll e exec traduzem chamadas da aplicação para `prepare(...).get/all/run` do better-sqlite3. Isso se aproxima de Adapter: existe uma interface menor entre o modelo e o driver. A adaptação é parcial, pois o modelo ainda envia SQL e conhece lastInsertRowid. Poderia evoluir para operações do domínio em repositórios, como o adaptador da busca.

## Singleton — comportamento parcial do módulo de banco

A instância `var bd = new Database('./bd/esmforum.db')` fica no escopo do módulo, compartilhado pelo cache CommonJS dentro do processo. Isso produz um ponto usual de acesso único, mas **não é um Singleton GoF estrito**: outras instâncias podem ser criadas e `reconfig()` substitui a referência. O módulo também não gerencia explicitamente o fechamento da instância anterior. Melhoraria o ciclo de vida com criação e encerramento no ponto de composição, sobretudo nos testes.

## MVC — separação incompleta

`modelo.js` contém operações de dados, `server.js` faz o controle das requisições e React apresenta as telas. Há afinidade com MVC, porém não uma implementação clássica completa: o backend retorna JSON e o frontend é uma SPA separada. MVC é um padrão arquitetural, diferente dos padrões GoF acima. A proposta detalhada está em PROPOSTA_ARQUITETURA.md.

## O que não foi presumido

O simples uso de callbacks Express não demonstra Observer de domínio. Também não há evidência suficiente para afirmar que o código original implemente Strategy ou Factory Method GoF. A factory de controller da extensão é uma função fábrica simples, não uma hierarquia de Factory Method.
