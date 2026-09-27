# Como concluir e enviar

## Situação atual

Os dois forks e o quadro Kanban já foram criados. Os links reais estão em LINKS.md. Não é necessário criar outro repositório. Os cinco cards estão no esmforum; a busca permanece Em Revisão. Este pacote contém a implementação e a documentação locais, ainda não publicadas nos forks.

## Onde colocar cada arquivo

| Conteúdo do ZIP | Destino |
|---|---|
| Conteúdo da pasta backend | Raiz de Richardmoc/esmforum |
| Conteúdo da pasta frontend | Raiz de Richardmoc/esmforum-react |
| Documentação, diagramas e evidências | Já incluídos em backend/entrega |

Extraia o ZIP primeiro. Envie o conteúdo de cada pasta ao repositório correspondente, preservando suas subpastas. Não crie uma pasta backend dentro do esmforum nem uma pasta frontend dentro do esmforum-react. Não envie o ZIP como substituto dos arquivos de código.

### Pelo site do GitHub

Na aba Code do repositório, use Add file > Upload files. Arraste os arquivos e pastas do destino correspondente e registre o commit. Não inclua a pasta .git no upload pelo navegador. Se o site limitar a quantidade de arquivos, divida o envio em lotes preservando as pastas. A documentação acadêmica está em backend/entrega. Não envie node_modules, build, credenciais ou arquivos .env.

### Pelo Git, preservando os commits locais

Na pasta backend extraída:

```bash
git remote set-url origin https://github.com/Richardmoc/esmforum.git
git push -u origin main
```

Na pasta frontend extraída:

```bash
git remote set-url origin https://github.com/Richardmoc/esmforum-react.git
git push -u origin main
```

Se houver divergência, integre os históricos antes de enviar; não use envio forçado. Os commits de assistência estão identificados como tal, sem simular trabalho anterior do aluno.

## Conferência antes da entrega

- Confira no GitHub a publicação do código e da pasta entrega.
- Execute as instruções de INSTALACAO.md e os testes/roteiro de TESTES.md.
- Revise as análises e os critérios de HISTORIAS.md.
- Mova a busca para Concluído somente após sua revisão e aceite; mantenha as demais funcionalidades em Backlog.
- Verifique o acesso de leitura ao quadro e aos repositórios em uma janela sem login.
- Atualize o registro de situação caso faça novas alterações após este pacote.

## Entrega na FGV

O envio solicitado é um ZIP contendo uma cópia do repositório Git. Este pacote consolida backend e frontend, seus históricos .git, o dossiê, diagramas e evidências. Preserve os históricos ao compactar novamente e exclua node_modules, build e credenciais. O quadro remoto não faz parte do histórico Git: seus links e um print estão documentados no pacote.

Após concluir a publicação e revisar o material, faça um único envio do ZIP à plataforma. Confira o arquivo na área de desempenho. Nenhuma submissão acadêmica foi realizada por este atendimento.
