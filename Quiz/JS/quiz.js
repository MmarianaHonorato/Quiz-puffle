const perguntas = [
    {
        titulo: "1ª Pergunta",
        texto: "O que você prefere fazer no seu tempo livre?",
        opcoes: [
            { texto: "Ficar no conforto de casa, enrolado nas cobertas assistindo séries.", pontuacao: [ { cor: "Azul", valor: 7 }, { cor: "Amarelo", valor: 3 } ] },
            { texto: "Sair para uma aventura, explorar algum lugar novo ou tentar um esporte radical.", pontuacao: [ { cor: "Vermelho", valor: 5 }, { cor: "Preto", valor: 3 } ] },
            { texto: "Jogar videogame, ler ficção científica, resolver quebra-cabeças ou montar engenhocas.", pontuacao: [ { cor: "Marrom", valor: 7 }, { cor: "Verde", valor: 1 } ] }
        ]
    },
    {
        titulo: "2ª Pergunta",
        texto: "Se você fosse dar uma festa, como ela seria?",
        opcoes: [
            { texto: "Uma noite de jogos (tabuleiro, RPG ou fliperama) super competitiva e cheia de risadas!", pontuacao: [ { cor: "Verde", valor: 5 }, { cor: "Marrom", valor: 3 } ] },
            { texto: "Uma reunião bem pequena, só pros mais chegados, com pouca luz e uma playlist alternativa.", pontuacao: [ { cor: "Preto", valor: 7 }, { cor: "Vermelho", valor: 2 } ] },
            { texto: "Uma festa super criativa e temática, talvez uma noite do pijama com cinema e pintura.", pontuacao: [ { cor: "Amarelo", valor: 5 }, { cor: "Azul", valor: 3 } ] }
        ]
    },
    {
        titulo: "3ª Pergunta",
        texto: "Como você reage quando um imprevisto estraga seus planos?",
        opcoes: [
            { texto: "Analiso a situação logicamente e invento um plano B genial usando o que tiver pela frente!", pontuacao: [ { cor: "Marrom", valor: 5 }, { cor: "Verde", valor: 3 } ] },
            { texto: "Fico irritado, fecho a cara na hora e meu humor vai pro espaço (posso até pegar fogo).", pontuacao: [ { cor: "Preto", valor: 5 }, { cor: "Vermelho", valor: 3 } ] },
            { texto: "Invento uma solução super mirabolante e fora da caixa na mesma hora.", pontuacao: [ { cor: "Amarelo", valor: 7 }, { cor: "Azul", valor: 2 } ] }
        ]
    },
    {
        titulo: "4ª Pergunta",
        texto: "Qual acessório tem mais a sua cara?",
        opcoes: [
            { texto: "Um moletom oversized bem confortável, uma ecobag ou fones de ouvido grandes.", pontuacao: [ { cor: "Azul", valor: 5 }, { cor: "Amarelo", valor: 1 } ] },
            { texto: "Óculos coloridos ou de proteção, camisetas divertidas de cultura geek ou chapéus engraçados.", pontuacao: [ { cor: "Verde", valor: 7 }, { cor: "Marrom", valor: 2 } ] },
            { texto: "Um tênis de skate clássico, coturno escuro, jaqueta ou acessórios como pulseiras e anéis.", pontuacao: [ { cor: "Vermelho", valor: 7 }, { cor: "Preto", valor: 1 } ] }
        ]
    },
    {
        titulo: "5ª Pergunta",
        texto: "Qual seria a viagem dos seus sonhos?",
        opcoes: [
            { texto: "Uma viagem para um parque com montanhas-russas gigantes ou trilhas de aventura na natureza.", pontuacao: [ { cor: "Vermelho", valor: 5 }, { cor: "Verde", valor: 3 } ] },
            { texto: "Conhecer museus de arte, ir a teatros famosos ou visitar feiras de tecnologia e inovação.", pontuacao: [ { cor: "Amarelo", valor: 5 }, { cor: "Marrom", valor: 1 } ] },
            { texto: "Um resort bem tranquilo e aconchegante onde eu possa apenas descansar e relaxar.", pontuacao: [ { cor: "Azul", valor: 7 }, { cor: "Preto", valor: 2 } ] }
        ]
    },
    {
        titulo: "6ª Pergunta",
        texto: "No seu grupo de amigos, você é aquele que...",
        opcoes: [
            { texto: "É o cérebro curioso. Sabe fatos aleatórios sobre o universo e ama debater teorias malucas.", pontuacao: [ { cor: "Marrom", valor: 7 }, { cor: "Amarelo", valor: 2 } ] },
            { texto: "É o palhaço da turma, fazendo piada com tudo e arrancando risadas nos momentos errados.", pontuacao: [ { cor: "Verde", valor: 5 }, { cor: "Vermelho", valor: 1 } ] },
            { texto: "Observa tudo em silêncio, finge que não liga, mas protege os amigos com unhas e dentes.", pontuacao: [ { cor: "Preto", valor: 5 }, { cor: "Azul", valor: 3 } ] }
        ]
    },
    {
        titulo: "7ª Pergunta",
        texto: "Qual estilo musical mais aparece nas suas playlists?",
        opcoes: [
            { texto: "MPB, acústico ou trilhas sonoras. Músicas perfeitas para relaxar e se inspirar.", pontuacao: [ { cor: "Azul", valor: 5 }, { cor: "Amarelo", valor: 3 } ] },
            { texto: "Rock, metal, trap, rap ou eletrônica. Aquela batida intensa e marcante.", pontuacao: [ { cor: "Preto", valor: 7 }, { cor: "Vermelho", valor: 3 } ] },
            { texto: "Trilhas sonoras épicas de jogos, synthwave ou podcasts sobre ciência e curiosidades.", pontuacao: [ { cor: "Marrom", valor: 5 }, { cor: "Verde", valor: 2 } ] }
        ]
    },
    {
        titulo: "8ª Pergunta",
        texto: "Como você prefere gastar sua energia?",
        opcoes: [
            { texto: "Competindo em algo que exija estratégia! E-sports, xadrez ou resolver enigmas difíceis.", pontuacao: [ { cor: "Marrom", valor: 5 }, { cor: "Amarelo", valor: 3 } ] },
            { texto: "Só curto se tiver adrenalina física envolvida! Esportes radicais, velocidade e um pouco de risco.", pontuacao: [ { cor: "Vermelho", valor: 5 }, { cor: "Preto", valor: 3 } ] },
            { texto: "Eu prefiro a diversão pela diversão! Jogos de festa, mímicas ou só dar boas risadas em grupo.", pontuacao: [ { cor: "Verde", valor: 5 }, { cor: "Azul", valor: 1 } ] }
        ]
    },
    {
        titulo: "9ª Pergunta",
        texto: "Se você pudesse ter um talento especial instantâneo, qual seria?",
        opcoes: [
            { texto: "Pintar obras de arte maravilhosas ou ser um grande ator/diretor de cinema.", pontuacao: [ { cor: "Amarelo", valor: 7 }, { cor: "Marrom", valor: 3 } ] },
            { texto: "Fazer acrobacias impossíveis, ser o melhor comediante do mundo ou um grande mágico.", pontuacao: [ { cor: "Vermelho", valor: 7 }, { cor: "Verde", valor: 3 } ] },
            { texto: "Ter a capacidade de dormir rapidamente em qualquer lugar e acordar 100% descansado.", pontuacao: [ { cor: "Azul", valor: 5 }, { cor: "Preto", valor: 3 } ] }
        ]
    },
    {
        titulo: "10ª Pergunta",
        texto: "O que você escolheria como o seu lanche perfeito?",
        opcoes: [
            { texto: "O clássico lanche da madrugada para virar a noite: pizza, salgadinhos e um energético.", pontuacao: [ { cor: "Amarelo", valor: 5 }, { cor: "Marrom", valor: 3 } ] },
            { texto: "Algo bem exótico, intenso ou apimentado, que poucas pessoas teriam coragem de comer.", pontuacao: [ { cor: "Preto", valor: 5 }, { cor: "Vermelho", valor: 3 } ] },
            { texto: "Uma comida rápida e prática, ou vários doces divertidos para dividir com a galera.", pontuacao: [ { cor: "Verde", valor: 7 }, { cor: "Azul", valor: 3 } ] }
        ]
    }
];

class QuizPuffles {
    constructor(listaPerguntas) {
        this.perguntas = listaPerguntas;
        this.indiceAtual = 0;
        
        this.placar = {
            Azul: 0.0001,
            Vermelho: 0.0002,
            Verde: 0.0003,
            Marrom: 0.0004,
            Amarelo: 0.0005,
            Preto: 0.0006
        };

        this.titulo = document.getElementById("titulo");
        this.pergunta = document.getElementById("pergunta");
        this.resposta1 = document.getElementById("resposta1");
        this.resposta2 = document.getElementById("resposta2");
        this.resposta3 = document.getElementById("resposta3");

        this.inicializarEventos();
    }

    inicializarEventos() {
        this.resposta1.addEventListener("click", (e) => { e.preventDefault(); this.lidarComClique(0); });
        this.resposta2.addEventListener("click", (e) => { e.preventDefault(); this.lidarComClique(1); });
        this.resposta3.addEventListener("click", (e) => { e.preventDefault(); this.lidarComClique(2); });
    }

    carregarPergunta() {
        const p = this.perguntas[this.indiceAtual];
        
        console.log(`\n======================================`);
        console.log(`Carregando: ${p.titulo}`);
        console.log(`======================================`);

        this.titulo.innerText = p.titulo;
        this.pergunta.innerText = p.texto;
        
        this.resposta1.innerText = p.opcoes[0].texto;
        this.resposta2.innerText = p.opcoes[1].texto;
        this.resposta3.innerText = p.opcoes[2].texto;
    }

    registrarResposta(indiceDaOpcaoEscolhida) {
        let opcaoMapeada = this.perguntas[this.indiceAtual].opcoes[indiceDaOpcaoEscolhida];
        let pontosGanhos = opcaoMapeada.pontuacao;

        console.log(`>> Você clicou no Botão ${indiceDaOpcaoEscolhida + 1}`);
        console.log(`Texto: "${opcaoMapeada.texto}"`);

        pontosGanhos.forEach(item => {
            this.placar[item.cor] += item.valor; 
            console.log(`Adicionado +${item.valor} pontos para o Puffle ${item.cor}. (Total do ${item.cor}: ${this.placar[item.cor]})`);
        });

        console.log(`\n PLACAR ATUALIZADO:`);
        console.table(this.placar);
    }


    calcularVencedor() {
        let puffleVencedor = "";
        let maiorPontuacao = 0;

        for (let cor in this.placar) {
            if (this.placar[cor] > maiorPontuacao) {
                maiorPontuacao = this.placar[cor]; 
                puffleVencedor = cor;         
            }
        }

        localStorage.setItem("puffleVencedor", puffleVencedor);
        localStorage.setItem("pufflePontuacao", Math.floor(maiorPontuacao)); 

        window.location.href = "resultado.html";
    }
    lidarComClique(indiceBotao) {
        this.registrarResposta(indiceBotao);

        if (this.indiceAtual < this.perguntas.length - 1) {
            this.indiceAtual++;
            this.carregarPergunta();
        } else {
            this.calcularVencedor();
        }
    }
}

console.log("INICIANDO O JOGO...");
const meuQuiz = new QuizPuffles(perguntas);
meuQuiz.carregarPergunta();