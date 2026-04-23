const puffleVencedor = localStorage.getItem("puffleVencedor");

const dadosResultado = {
    Preto: {
        nome: "Puffle Preto",
        subtitulo: "Você é: O Emo/Ranzinza",
        texto: "Você não é ranzinza, só está economizando sorrisos para o apocalipse. Se pudesse, seu iglu seria apenas uma parede preta com um som tocando rock melancólico. Por favor, não incendeie o quiz com sua intensidade (ou com seus lanchinhos flamejantes).",
        img1: "../css/img/puffle-preto1.png",
        img2: "../css/img/puffle-preto2.png",
        img3: "../css/img/puffle-preto3.png"
    },
    Azul: {
        nome: "Puffle Azul",
        subtitulo: "Você é: O Rei do Conforto",
        texto: "Parabéns, você é a definição de 'ficar de boa'! O seu esporte extremo favorito é mudar de lado na cama sem derrubar o celular no rosto. Você é o amigo leal para todas as horas, desde que essas horas não envolvam sair de casa no frio. Um cobertor e uma soneca curam qualquer problema seu.",
        img1: "../css/img/puffle-azul1.png",
        img2: "../css/img/puffle-azul2.png",
        img3: "../css/img/puffle-azul3.png"
    },
    Vermelho: {
        nome: "Puffle Vermelho",
        subtitulo: "Você é: O Caçador de Adrenalina",
        texto: "Sem tempo, irmão! Você acorda e já está pronto para se lançar de um canhão (metaforicamente ou não). Onde tem perigo, aventura e uma ideia péssima que vai render uma ótima história, você está lá no meio. Só tome cuidado para não fazer parkour na sala de estar e quebrar tudo!",
        img1: "../css/img/puffle-vermelho1.png",
        img2: "../css/img/puffle-vermelho2.png",
        img3: "../css/img/puffle-vermelho3.png"
    },
    Verde: {
        nome: "Puffle Verde",
        subtitulo: "Você é: O Inimigo do Tédio",
        texto: "A festa simplesmente não começa até você chegar (provavelmente voando com um chapéu de hélice). Você vive para fazer os outros rirem e acha que 99% dos problemas do mundo podem ser resolvidos com uma piada ruim na hora errada. A vida é o seu palco de stand-up comedy!",
        img1: "../css/img/puffle-verde1.png",
        img2: "../css/img/puffle-verde2.png",
        img3: "../css/img/puffle-verde3.png"
    },
    Marrom: {
        nome: "Puffle Marrom",
        subtitulo: "Você é: O Gênio Inventor",
        texto: "Você é o cérebro da operação! Seus amigos te procuram sempre que algo quebra ou quando precisam de uma teoria genial. Você ama engenhocas e acha que dormir é desperdício de tempo que poderia ser usado criando máquinas incríveis. Só tome cuidado se vir um balão por aí... a gente sabe do seu medo secreto!",
        img1: "../css/img/puffle-marrom1.png",
        img2: "../css/img/puffle-marrom2.png",
        img3: "../css/img/puffle-marrom3.png"
    },
    Amarelo: {
        nome: "Puffle Amarelo",
        subtitulo: "Você é: A Mente Brilhante",
        texto: "Você não vive no mundo real, você vive na sua própria obra de arte! Com uma mente criativa, sua rotina é um grande filme cult que só você entende. As pessoas podem achar você um pouquinho excêntrico, mas é só inveja de quem não tem a mesma visão artística para pintar quadros às 3 da manhã.",
        img1: "../css/img/puffle-amarelo1.png",
        img2: "../css/img/puffle-amarelo2.png",
        img3: "../css/img/puffle-amarelo3.png"
    }
    
};

const elementoNome = document.getElementById("puffle-nome");
const elementoSubtitulo = document.getElementById("subtitulo-puffle");
const elementoTexto = document.getElementById("texto-puffle");
const img1 = document.getElementById("img-1");
const img2 = document.getElementById("img-2");
const img3 = document.getElementById("img-3");

if (puffleVencedor && dadosResultado[puffleVencedor]) {
    const dados = dadosResultado[puffleVencedor];
    
    elementoNome.textContent = dados.nome;
    elementoSubtitulo.textContent = dados.subtitulo;
    elementoTexto.textContent = dados.texto;
    
    img1.src = dados.img1;
    img2.src = dados.img2;
    img3.src = dados.img3;
}

