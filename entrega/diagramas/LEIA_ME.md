# Diagramas

As imagens PNG foram renderizadas a partir das fontes Mermaid de mesmo nome.
O diagrama de classes é conceitual e inclui propostas de usuário, tags e votos; não representa tabelas já criadas.
A sequência agrupa controller/API e adaptador/banco para manter a leitura; a separação interna está nos documentos.
O diagrama de atividades usa o subconjunto de fluxo do Mermaid como sketch UML: início/fim, ações e decisões; não há paralelismo no caso de uso.
O diagrama de estados representa estados derivados de Pergunta, sem inventar exclusão ou fechamento inexistentes.

Para renderizar novamente, com Mermaid CLI instalado:

```bash
mmdc -i diagrama_classes.mmd -o diagrama_classes.png -b white -s 2
```
