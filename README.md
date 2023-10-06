# Gestão de estoque
Este é um projeto de gestão de estoque que permite ao usuário controlar o seu inventário. É possível realizar diversas operações relacionadas ao controle de itens. Dentre elas, estão as funcionalidades adicionar itens ao estoque, remover itens, listar itens, calcular o valor total do inventário, calcular o peso total do inventário, calcular a média de valor dos itens, calcular a média de peso dos itens, ver a quantidade de itens no total e ver a quantidade de produtos no total.

## Funcionalidades
**Adicionar item ao estoque:** O usuário pode adicionar novos itens ao inventário, de forma que preencha as seguintes informações: Nome, peso, valor e quantidade do item.

**Remover item do estoque:** É possível remover itens do inventário, basta informar o nome do item a ser removido. O usuário pode confirmar se realmente deseja a remoção ou cancelá-la.

**Listar itens do estoque:** Os usuários podem listar todos os itens do inventário, exibindo informações como nome, peso, valor e quantidade.

**Valor total do inventário:** O sistema calcula o valor total de todos os itens cadastrados no inventário.

**Peso total do inventário:** O sistema calcula o peso total de todos os itens cadastrados no inventário.

**Média de valor dos itens:** Calcula a média de valor dos itens presentes no inventário.

**Média de Peso dos Itens:** Calcula a média de peso dos itens presentes no inventário.

**Quantidade Total de Itens no Inventário:**  Exibe a quantidade total de itens no inventário, inclusive aqueles com mais quantidade.

**Quantidade Total de Produtos no Inventário:** Exibe a quantidade total de produtos no inventário, sendo que os produtos são itens distintos.

## Pré-requisitos
Para executar este projeto, você precisará ter o `node.js` instalado na sua máquina. Você também precisará das dependências especificadas no arquivo `package.json`, que podem ser instaladas usando o `npm install`.

## Como usar
1. Clone esse repositório
`git clone https://github.com/arigsf/gestao-de-estoque`
2. Entre no diretório do projeto
`cd gestao-de-estoque`
3. Instale as dependências
`npm install`
4. Execute o projeto
`tsc index.ts`
`node index.js`