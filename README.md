# Quiz Puffle - Descubra que Puffle você é! 🐧🎮

## 📝 Sobre o Projeto
O **Quiz Puffle** é um Sistema Web interativo desenvolvido como avaliação (N1 - AT2) para a disciplina de Programação para Web. O objetivo do jogo é permitir que o usuário descubra qual Puffle (criaturas icônicas e nostálgicas do universo do Club Penguin) mais combina com a sua personalidade, respondendo a um questionário dinâmico de 10 perguntas.

## ✨ Funcionalidades
* **Página Inicial (`Inicio.html`):** Tela de boas-vindas com a apresentação do universo dos Puffles e o convite para iniciar o jogo.
* **Questionário Interativo (`quiz.html`):** Sistema com 10 perguntas de múltipla escolha. As perguntas são injetadas dinamicamente na tela via JavaScript.
* **Sistema de Pontuação Oculto:** O script calcula a afinidade do usuário com 6 tipos de Puffles (Azul, Vermelho, Verde, Marrom, Amarelo e Preto) em segundo plano, somando os valores de cada resposta.
* **Resultado Dinâmico (`resultado.html`):** Lê o resultado processado pelo quiz e exibe o Puffle vencedor com um título, uma descrição de personalidade divertida e imagens customizadas.
* **Créditos da Equipe (`creditos.html`):** Página dedicada a apresentar os desenvolvedores do projeto utilizando um CSS Grid estilizado.

## 🛠️ Tecnologias Utilizadas
* **HTML5:** Estruturação semântica de todas as telas.
* **CSS3:** Estilização visual rica, com layouts flexíveis (Flexbox/Grid), backgrounds imersivos, botões com efeito de clique animado e uso de web fonts (*Luckiest Guy* e *Ubuntu*).
* **JavaScript (Vanilla):** * Manipulação intensa do DOM (`getElementById`, `innerText`, `addEventListener`).
    * Uso de listas (Arrays) e Objetos literais para organizar o banco de perguntas e as propriedades dos resultados.
    * Algoritmo de validação e cálculo do vencedor (`Math.max` logik).
    * Uso do `localStorage` da Web API para persistência de dados entre as páginas `quiz.html` e `resultado.html`.

## 🧠 A Lógica de Desempate (Engine do Quiz)
Para garantir que o sistema entregue sempre um único vencedor de forma justa, a equipe previu a possibilidade matemática de empates. No arquivo `quiz.js`, o placar inicial de cada Puffle não começa em `0`, mas sim com uma **fração decimal invisível** (ex: `Azul: 0.0001`, `Vermelho: 0.0002`). 

Durante o jogo, os pontos inteiros (ex: +7, +5) são somados normalmente de acordo com as respostas do usuário. Caso dois personagens alcancem a mesma pontuação base (ex: 25 pontos), a pequena casa decimal garante o desempate de forma silenciosa para o sistema (ex: `25.0006` vence `25.0004`), evitando falhas no processamento do resultado final.

## 🚀 Como Executar o Projeto Localmente
Este é um projeto front-end estático. Não há necessidade de instalar dependências (como Node.js) ou configurar um servidor local.

## 👥 Equipe de Desenvolvimento
Projeto desenvolvido colaborativamente por:

Leticia Delmilio Soares
Marcos Vinicius Nunes Moreira 
Maria Luiza Ricardo Fernandes 
Mariana Cardoso Honorato
Paulo Vinícius Sousa Lima
