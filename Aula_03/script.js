rodada = 1;
while(rodada <= 3){
  console.log('Rodada:' + rodada);
  escolhaJogador = prompt('Nivel ' + rodada + ', vidro(1, 2 ou 3)?'
  pisoQuebrado = Math.floor(Math.random() * 3 ) + 1;
  if(escolhaJogador == pisoQuebrado){
    alert('O vidro quebrou!!');
    rodada = 999;
  }else{
    alert('Passou, piso quebrado estava na ' + pisoQuebrado)
    rodada += 1;
  };
};

if(rodada == 4){
  alert('Parabéns!! Você venceu!')
}