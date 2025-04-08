let personagem = ['', '', ''];
let viloes = ['', '', ''];

let forcaPersonagem = 0;
let forcaViloes = 0;
let resultado = '';

function jogar() {
    for (let i = 0; i < 3; i++) {
        personagem[i] = prompt('Digite o nome do personagem ' + (i + 1) + ': ');
        forcaPersonagem += Math.floor(Math.random() * 10) + 1;
    }

    document.getElementById('informacoesJogador').innerHTML = 'Seus jogadores: ' + personagem.join(', ');

    for (let i = 0; i < 3; i++) {
        indiceAleatorio = Math.floor(Math.random() * 10);
        viloesPossiveis = ['Pain', 'Orochimaru', 'Kakashi', 'Tsunade', 'Jiraiya', 'Nagato', 'Kisame', 'Deidara', 'Sasuke', 'Itachi'];
        viloes[i] = viloesPossiveis[indiceAleatorio];
        forcaViloes += Math.floor(Math.random() * 10);
    }

    document.getElementById('informacoesComputador').innerHTML = 'Vilões: ' + viloes.join(', ');

    if (forcaPersonagem > forcaViloes) {
        resultado = 'Seu time venceu!';
    } else if (forcaPersonagem < forcaViloes) {
        resultado = 'Seu time foi derrotado!';
    } else {
        resultado = 'Empate!';
    };

    document.getElementById('resultadoFinal').innerHTML = resultado;
}
