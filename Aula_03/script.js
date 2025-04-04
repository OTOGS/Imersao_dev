idade = prompt("Qual a sua idade?");
if(idade < 18){
   alert('Você não pode jogar!');
};
if (idade >= 18){
   escolhaJogador = prompt('Digite: 1 - Pedra, 2 - Papel, 3 - Tesoura:');
   escolhaComputador = Math.floor(Math.random() * 3) + 1;
   
   if(escolhaJogador == escolhaComputador){
      alert('Empate!!');
   };
}
alert('Teste GIT');