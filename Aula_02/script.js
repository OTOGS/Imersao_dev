let escolhaJogador = 0;
let escolhaComputador =0;

function jogar() {
    possibilidades = ['Pedra', 'Papel', 'Tesoura'];
    idade = parseInt(prompt("Qual a sua idade?"));

    if (idade < 18) {
        alert('Você não pode jogar!')
    };
    if (idade >= 18) {
        
        escolhaJogador = parseInt(prompt('Digite: 1 - Pedra, 2 - Papel, 3 - Tesoura:'));
        escolhaComputador = Math.floor(Math.random() * 3) + 1;

        const resultado = (escolhaJogador - escolhaComputador + 3) % 3;

        escolhaComputador = possibilidades[escolhaComputador - 1];
        escolhaJogador = possibilidades[escolhaJogador - 1];

        if (resultado === 1) {
            alert('Você escolheu ' + escolhaJogador + ' o computador escolheu ' + escolhaComputador + '! Você VENCEU 🎉');
        } else if (resultado === 2) {
            alert('Você escolheu ' + escolhaJogador + ' o computador escolheu ' + escolhaComputador + '! Você PERDEU 🙁');
        } else {
            alert('Você escolheu ' + escolhaJogador + ' o computador escolheu ' + escolhaComputador + '! EMPATE 🤝');
        };
        console.log(escolhaComputador);
    };
}
