// PARTE 1: Lista de perguntas e respostas
perguntas = [
  {
    pergunta: "Qual a capital do Brasil?",
    respostas: [
      { opcao: "Rio de Janeiro", correto: false },
      { opcao: "Brasília", correto: true },
      { opcao: "São Paulo", correto: false }
    ]
  },
  {
    pergunta: "Quem escreveu 'Dom Casmurro'?",
    respostas: [
      { opcao: "Machado de Assis", correto: true },
      { opcao: "Clarice Lispector", correto: false },
      { opcao: "José de Alencar", correto: false }
    ]
  },
  {
    pergunta: "Qual é o maior planeta do Sistema Solar?",
    respostas: [
      { opcao: "Saturno", correto: false },
      { opcao: "Júpiter", correto: true },
      { opcao: "Terra", correto: false }
    ]
  },
  {
    pergunta: "Quantos lados tem um hexágono?",
    respostas: [
      { opcao: "6", correto: true },
      { opcao: "8", correto: false },
      { opcao: "5", correto: false }
    ]
  },
  {
    pergunta: "Qual o elemento químico representado por 'O'?",
    respostas: [
      { opcao: "Ozônio", correto: false },
      { opcao: "Ouro", correto: false },
      { opcao: "Oxigênio", correto: true }
    ]
  },
  {
    pergunta: "Qual o país de origem do sushi?",
    respostas: [
      { opcao: "Japão", correto: true },
      { opcao: "China", correto: false },
      { opcao: "Coreia do Sul", correto: false }
    ]
  },
  {
    pergunta: "Qual é o menor número primo?",
    respostas: [
      { opcao: "3", correto: false },
      { opcao: "2", correto: true },
      { opcao: "1", correto: false }
    ]
  },
  {
    pergunta: "Quem pintou a Mona Lisa?",
    respostas: [
      { opcao: "Leonardo da Vinci", correto: true },
      { opcao: "Michelangelo", correto: false },
      { opcao: "Pablo Picasso", correto: false }
    ]
  },
  {
    pergunta: "Qual é a língua oficial do Brasil?",
    respostas: [
      { opcao: "Espanhol", correto: false },
      { opcao: "Inglês", correto: false },
      { opcao: "Português", correto: true }
    ]
  },
  {
    pergunta: "Qual o resultado de 7 x 8?",
    respostas: [
      { opcao: "48", correto: false },
      { opcao: "56", correto: true },
      { opcao: "64", correto: false }
    ]
  },
  {
    pergunta: "Qual animal é conhecido como 'Rei da Selva'?",
    respostas: [
      { opcao: "Tigre", correto: false },
      { opcao: "Leão", correto: true },
      { opcao: "Elefante", correto: false }
    ]
  },
  {
    pergunta: "Qual o continente do Egito?",
    respostas: [
      { opcao: "África", correto: true },
      { opcao: "Europa", correto: false },
      { opcao: "Ásia", correto: false }
    ]
  },
  {
    pergunta: "Que instrumento mede a temperatura?",
    respostas: [
      { opcao: "Termômetro", correto: true },
      { opcao: "Barômetro", correto: false },
      { opcao: "Higrômetro", correto: false }
    ]
  },
  {
    pergunta: "Qual a fórmula da água?",
    respostas: [
      { opcao: "H2O", correto: true },
      { opcao: "CO2", correto: false },
      { opcao: "O2", correto: false }
    ]
  },
  {
    pergunta: "Quem descobriu o Brasil?",
    respostas: [
      { opcao: "Cristóvão Colombo", correto: false },
      { opcao: "Vasco da Gama", correto: false },
      { opcao: "Pedro Álvares Cabral", correto: true }
    ]
  },
  {
    pergunta: "Qual é o plural de 'cão'?",
    respostas: [
      { opcao: "Cãozes", correto: false },
      { opcao: "Cães", correto: true },
      { opcao: "Cãos", correto: false }
    ]
  },
  {
    pergunta: "Qual a cor da clorofila?",
    respostas: [
      { opcao: "Verde", correto: true },
      { opcao: "Amarela", correto: false },
      { opcao: "Vermelha", correto: false }
    ]
  },
  {
    pergunta: "Quantos segundos há em um minuto?",
    respostas: [
      { opcao: "60", correto: true },
      { opcao: "30", correto: false },
      { opcao: "100", correto: false }
    ]
  },
  {
    pergunta: "Qual planeta é conhecido como Planeta Vermelho?",
    respostas: [
      { opcao: "Marte", correto: true },
      { opcao: "Mercúrio", correto: false },
      { opcao: "Vênus", correto: false }
    ]
  },
  {
    pergunta: "Qual o nome do processo pelo qual as plantas produzem alimento?",
    respostas: [
      { opcao: "Digestão", correto: false },
      { opcao: "Fotossíntese", correto: true },
      { opcao: "Respiração", correto: false }
    ]
  }
]


// PARTE 2: Pegando os elementos do HTML
const perguntaElemento = document.querySelector(".pergunta");
const respostasElemento = document.querySelector(".respostas");
const progressoElemento = document.querySelector(".progresso");
const textoFinal = document.querySelector(".fim span");
const conteudo = document.querySelector(".conteudo");
const conteudoFinal = document.querySelector(".fim");

// PARTE 3: Variáveis para controle do jogo
let indiceAtual = 0; // Índice da pergunta atual
let acertos = 0; // Contador de acertos

// PARTE 4: Função para carregar uma nova pergunta
function carregarPergunta() {
progressoElemento.innerHTML = `${indiceAtual + 1}/${perguntas.length}`; // Atualiza o progresso
const perguntaAtual = perguntas[indiceAtual]; // Pega a pergunta atual
perguntaElemento.innerHTML = perguntaAtual.pergunta; // Exibe a pergunta

respostasElemento.innerHTML = ""; // Limpa as respostas anteriores

// Percorre todas as respostas da pergunta atual
for (let i = 0; i < perguntaAtual.respostas.length; i++) {
  // Pega a resposta atual com base no índice 'i'
  const resposta = perguntaAtual.respostas[i];
  // Cria um novo elemento 'button' (botão)
  const botao = document.createElement("button");
  // Adiciona a classe CSS 'botao-resposta' ao botão para estilizar
  botao.classList.add("botao-resposta");
  // Define o texto do botão com a opção de resposta (resposta.opcao)
  botao.innerText = resposta.opcao;
  // Adiciona um evento de clique no botão
  botao.onclick = function () {
    // Se a resposta for correta (resposta.correto === true), incrementa o número de acertos
    if (resposta.correto) {
      acertos++; // Incrementa o contador de acertos
    }

    // Avança para a próxima pergunta
    indiceAtual++;

    // Se ainda houver perguntas, carrega a próxima pergunta
    if (indiceAtual < perguntas.length) {
      carregarPergunta(); // Carrega a próxima pergunta
    } else {
      // Se não houver mais perguntas, finaliza o jogo
      finalizarJogo();
    }
  };

  // Adiciona o botão de resposta à tela, dentro do elemento 'respostasElemento'
  respostasElemento.appendChild(botao);
}
}

// PARTE 5: Função para mostrar a tela final
function finalizarJogo() {
textoFinal.innerHTML = `Você acertou ${acertos} de ${perguntas.length}`; // Exibe o resultado
conteudo.style.display = "none"; // Esconde as perguntas
conteudoFinal.style.display = "flex"; // Mostra a tela final
}

// PARTE 6: Iniciando o jogo pela primeira vez
carregarPergunta();
