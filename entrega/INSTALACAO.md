# Instalação e execução

## Base

Backend: Node.js, Express, better-sqlite3 e SQLite. Frontend: React e react-scripts. Os arquivos `requirements.txt` dos enunciados contêm pytest/reportlab, mas não são as dependências da aplicação Node; utilizam-se os arquivos package.json dos repositórios.

Use **Node.js 22** e npm. A verificação do backend utiliza Node 22.23.3. O Node 24.19.0 compilou o frontend, mas foi incompatível com a versão nativa de better-sqlite3 fixada no lockfile original. Por isso, utilize Node 22 para os dois projetos. `better-sqlite3` é uma dependência nativa; a instalação pode exigir compilador e Python se não houver binário para o seu sistema.

## Backend

Abra um terminal **dentro de backend**:

```bash
npm ci
npm test
npm start
```

O backend responde em http://localhost:5000. Execute nessa pasta porque o código original abre o banco em `./bd/esmforum.db`. O banco didático vem com o projeto. Para preservar dados, faça uma cópia antes de alterá-lo. Não é necessário executar `criar_bd.sh` para iniciar com o banco fornecido.

## Frontend

Em outro terminal, dentro de frontend:

```bash
npm ci
npm start
```

Abra http://localhost:3000. A configuração preserva a API em localhost:5000; se a porta for alterada, ajuste também os componentes originais de respostas. Para verificar a compilação:

```bash
npm run build
```

## Experimento rápido

```bash
curl "http://localhost:5000/perguntas/busca?q=JavaScript"
curl "http://localhost:5000/perguntas/busca"
```

A primeira chamada busca o texto; a segunda lista tudo. A busca retorna JSON com `id_pergunta`, `texto`, `id_usuario` e `num_respostas`. O banco fornecido pode não conter JavaScript: lista vazia é resultado válido. Crie uma pergunta pela interface para conferir a busca com um dado conhecido.

## Testes

`npm test` no backend executa os testes originais e os novos. Os testes de busca criam banco em memória. Um teste original limpa o banco específico `bd/esmforum-teste.db`; ele não deve apontar para o banco principal. Os resultados desta execução estão em TESTES.md. Execute também o roteiro de navegador antes da entrega.

## Ajuste de dependências realizado

Foi removido `sqlite3` do package.json e do lockfile porque nenhum módulo do projeto o utiliza. O acesso real usa better-sqlite3 11.0.0, preservado. A compilação local exigiu disponibilizar os headers do Node 22, pois a extração automática encontrou uma restrição de propriedade de arquivos neste ambiente. Isso foi uma limitação do ambiente de validação, não uma mudança necessária no código da aplicação.
