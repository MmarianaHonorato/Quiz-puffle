const perguntas = [
    { 
        titulo: "1ª Pergunta", 
        texto: "O que você prefere fazer no seu tempo livre?", 
        opcoes: [
            "Ficar no conforto de casa, enrolado nas cobertas assistindo séries.", 
            "Sair para uma aventura, explorar algum lugar novo ou tentar um esporte radical.", 
            "Jogar videogame, ler ficção científica, resolver quebra-cabeças ou montar engenhocas."
        ] 
    },
    { 
        titulo: "2ª Pergunta", 
        texto: "Se você fosse dar uma festa, como ela seria?", 
        opcoes: [
            "Uma noite de jogos (tabuleiro, RPG ou fliperama) super competitiva e cheia de risadas!", 
            "Uma reunião bem pequena, só pros mais chegados, com pouca luz e uma playlist rock/alternativa.", 
            "Uma festa super criativa e temática, talvez uma noite do pijama com cinema e pintura."
        ] 
    },
    { 
        titulo: "3ª Pergunta", 
        texto: "Como você reage quando um imprevisto estraga seus planos?", 
        opcoes: [
            "Analiso a situação logicamente e invento um \"plano B\" genial usando o que tiver pela frente!", 
            "Fico irritado, fecho a cara na hora e meu humor vai pro espaço (posso até \"pegar fogo\").", 
            "Invento uma solução super mirabolante e fora da caixa na mesma hora."
        ] 
    },
    { 
        titulo: "4ª Pergunta", 
        texto: "Qual acessório tem mais a sua cara?", 
        opcoes: [
            "Um moletom oversized bem confortável, uma ecobag ou fones de ouvido grandes.", 
            "Óculos coloridos ou de proteção, camisetas divertidas de cultura geek ou chapéus engraçados.", 
            "Um tênis de skate clássico, coturno escuro, jaqueta ou acessórios como pulseiras e anéis."
        ] 
    },
    { 
        titulo: "5ª Pergunta", 
        texto: "Qual seria a viagem dos seus sonhos?", 
        opcoes: [
            "Uma viagem para um parque com montanhas-russas gigantes ou trilhas de aventura na natureza.", 
            "Conhecer museus de arte, ir a teatros famosos ou visitar feiras de tecnologia e inovação.", 
            "Um resort bem tranquilo e aconchegante onde eu possa apenas descansar e relaxar."
        ] 
    },
    { 
        titulo: "6ª Pergunta", 
        texto: "No seu grupo de amigos, você é aquele que...", 
        opcoes: [
            "É o \"cérebro\" curioso. Sabe fatos aleatórios sobre o universo e ama debater teorias malucas.", 
            "É o palhaço da turma, fazendo piada com tudo e arrancando risadas nos momentos errados.", 
            "Observa tudo em silêncio, finge que não liga, mas protege os amigos com unhas e dentes."
        ] 
    },
    { 
        titulo: "7ª Pergunta", 
        texto: "Qual estilo musical mais aparece nas suas playlists?", 
        opcoes: [
            "MPB, acústico, lo-fi ou trilhas sonoras. Músicas perfeitas para relaxar e se inspirar.", 
            "Rock, metal, trap, rap ou eletrônica pesada. Aquela batida intensa e marcante.", 
            "Trilhas sonoras épicas de jogos, synthwave ou podcasts sobre ciência e curiosidades."
        ] 
    },
    { 
        titulo: "8ª Pergunta", 
        texto: "Como você prefere gastar sua energia?", 
        opcoes: [
            "Competindo em algo que exija estratégia! E-sports, xadrez ou resolver enigmas difíceis.", 
            "Só curto se tiver adrenalina física envolvida! Esportes radicais, velocidade e um pouco de risco.", 
            "Eu prefiro a diversão pela diversão! Jogos de festa, mímicas ou só dar boas risadas em grupo."
        ] 
    },
    { 
        titulo: "9ª Pergunta", 
        texto: "Se você pudesse ter um talento especial instantâneo, qual seria?", 
        opcoes: [
            "Pintar obras de arte maravilhosas ou ser um grande ator/diretor de cinema.", 
            "Fazer acrobacias impossíveis, ser o melhor comediante do mundo ou um grande mágico.", 
            "Ter a capacidade de dormir rapidamente em qualquer lugar e acordar 100% descansado."
        ] 
    },
    { 
        titulo: "10ª Pergunta", 
        texto: "O que você escolheria como o seu lanche perfeito?", 
        opcoes: [
            "O clássico lanche da madrugada para virar a noite: pizza da noite anterior, salgadinhos e um energético.", 
            "Algo bem exótico, intenso ou apimentado, que poucas pessoas teriam coragem de comer.", 
            "Uma comida rápida e prática pra comer em pé mesmo, ou vários doces divertidos para dividir com a galera."
        ] 
    }
];

let indiceAtual = 0;
let respostasUsuario = [];

const titulo = document.getElementById("titulo");
const pergunta = document.getElementById("pergunta");
const resposta1 = document.getElementById("resposta1");
const resposta2 = document.getElementById("resposta2");
const resposta3 = document.getElementById("resposta3");


function carregarPergunta() {
    const p = perguntas[indiceAtual];
    titulo.innerText = p.titulo;
    pergunta.innerText = p.texto;
    p.opcoes.forEach((opcao, index) => {
        if (index === 0) resposta1.innerText = opcao;
        else if (index === 1) resposta2.innerText = opcao;
        else if (index === 2) resposta3.innerText = opcao;
    });
};


resposta1.addEventListener("click", (e) => {
    e.preventDefault();
    
    if (indiceAtual < perguntas.length - 1) {
        indiceAtual++;
        carregarPergunta();
    } else {
        window.location.href = "resultado.html";
    }
});
resposta2.addEventListener("click", (e) => {
    e.preventDefault();

    if (indiceAtual < perguntas.length - 1) {
        indiceAtual++;
        carregarPergunta();
    } else {
        window.location.href = "resultado.html";
    }
});
resposta3.addEventListener("click", (e) => {
    e.preventDefault();

    if (indiceAtual < perguntas.length - 1) {
        indiceAtual++;
        carregarPergunta();
    } else {
        window.location.href = "resultado.html";
    }
});


carregarPergunta();



var resultado = document.getElementById("resultado");
resultado.textContent = "Você não é ranzinza, só está economizando sorrisos para o apocalipse. Se pudesse, seu iglu seria apenas uma parede preta com um som tocando rock melancólico. Por favor, não incendeie o quiz com sua intensidade (ou com seus lanchinhos flamejantes).";
