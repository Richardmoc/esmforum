# Verificação executada em 27/09/2026

## Resultados

| Verificação | Resultado | Evidência |
|---|---|---|
| Backend, Jest, Node 22.23.3 | 4 suítes e 22 testes aprovados | evidencias/testes-backend.txt |
| Frontend, build de produção, Node 22.23.3 | Compilação concluída com avisos legados | evidencias/build-frontend.txt |
| Navegador Chromium automatizado | Carregamento, busca, vazio e limpeza aprovados | evidencias/teste-interface.txt |
| Captura real da interface | Página de busca funcionando | evidencias/busca-interface.png |
| Diagramas | 9 fontes Mermaid renderizadas e imagens inspecionadas | diagramas/ |

## O que os testes verificam

`backend/testes/busca.test.js`: busca parcial; normalização dos espaços; caixa ASCII; contagem de respostas; listagem sem filtro; ausência de resultados; percentagem e sublinhado literais; tentativa de injeção; entrada inválida; limite de 100 caracteres; substituição do repositório por contrato; resposta 400 e erro interno genérico.

`backend/testes/busca-http.test.js`: requisições HTTP reais em porta temporária, contrato JSON, termo excessivo, parâmetro duplicado e preservação da rota raiz.

As duas suítes originais também passaram. O banco específico de testes alterado por elas foi restaurado ao conteúdo original antes do empacotamento; o banco principal não foi modificado.

A automação de navegador abriu o build React junto à API real, buscou um texto presente na base original, verificou o retorno, pesquisou um texto inexistente e usou Limpar busca. Não houve erro JavaScript nem alteração de dados nesse experimento. A base original contém seis perguntas iguais a “3+3”; por isso a captura mostra seis resultados. Os testes de banco em memória usam textos distintos para validar a seleção efetiva por termo.

## Avisos e limites

O build aponta um aviso de dependência do useEffect no componente original Resposta.js e avisos de ferramentas legadas/Browserslist. São registrados, sem afirmar compilação sem avisos. Não foi feita auditoria completa de segurança ou refatoração da aplicação legada.

O primeiro ambiente Node 24 não compilou a versão nativa original de better-sqlite3; a validação final usou Node 22, indicado nos arquivos .nvmrc. A dependência sqlite3 sem uso foi removida. Os logs de tentativas intermediárias não integram as evidências de aprovação final.

## Conferência pessoal antes do envio

1. Instale conforme INSTALACAO.md e abra a aplicação.
2. Cadastre uma pergunta com texto conhecido, busque parte dele e confirme o resultado.
3. Use um termo inexistente e confira a mensagem de lista vazia.
4. Limpe o filtro e abra as respostas de uma pergunta.
5. Confira os três links pessoais em LINKS.md e a visibilidade do board para o tutor.

Não foram testadas votação, tags, perfil ou notificações: elas permanecem propostas. Não houve publicação em forks pessoais nem submissão acadêmica.
