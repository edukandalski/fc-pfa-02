# Code Education - Docker PFA - Desafio 2

## Sobre a tarefa

Para resolver o desafio usei a imagem padrão do MySQL (5.7) e criei duas imagens custom, baseadas no Nginx e no Node.js.
O banco ao iniciar vai executar o script init.sql para criar a tabela, limpar e inserir os dados iniciais na mesma.
O programa base Node ao ser iniciado o container basicamente sobe um servidor com express na porta 3000.
A cada requisição recebida que virá através do Nginx, que está escutando na porta 8000 do localhost, o app node faz um SELECT \* para retornar todos os tópicos em uma lista não ordenada simples.
Os containeres do Nginx e do Node usam o Dockerize para assegurar a disponibilidade dos serviços, o Node aguarda o MySQL e o Nginx aguarda o Node estar ouvindo na porta 3000.

## Como executar

Para criar as imagens e testar a tarefa basta executar:

```sh
docker-compose up
```

E depois para finalizar, basta executar:

```sh
docker-compose down
```
