/*
- Deve funcionar só com letras maiúsculas;
- Não devem ser utilizadas letras com acentos nem caracteres especiais;
- Ao completar o desenho da forca, deve ser exibida uma mensagem na tela de "Fim de Jogo";
- Se completar a palavra correta antes de acabarem as tentativas, deve ser exibida na tela a mensagem "Você Venceu. Parabéns!";
- A página deve ter os traços indicando cada letra da palavra, separados por espaço;
- A página deve ter um botão de "Iniciar Jogo" para começar o jogo;
- Só deve ser possívél escrever letras (os números não serão válidos)
- As letras erradas devem aparecer na tela, mas não podem aparecer repetidamente;
- As letras corretas devem ser mostradas na tela acima dos traços, nas posições corretas em relação à palavra.*/

//constantes e variaeis para as palavras da forca
let palavras = ["ABACATE", "OVELHA", "TESOURO", "LOGICA", "PANELA", "AFRICA", "FRONTEND", "PRAIA", "CHUVA", "CHOCOLATE", "ESTRELA", "VERMELHO", "BARCO", "ESPELHO"];
let palavra = palavras[Math.floor(Math.random() * palavras.length)]; //SORTEIA A PALAVRA DO ARRAY
let tela = document.getElementById("forca");
let pincel = tela.getContext("2d");
let chances = 6;
let alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
let letras = alfabeto.split("");  //quebra o array alfabeto em letras 
let letrasErradas = [];
const areaTexto = document.querySelector("#novaPalavra").value;
const btnAdiciona = document.querySelector("#adicionarPalavra"); btnAdiciona.onclick = adicionarPalavras;
const erro = document.querySelector(".erradas");

desenhaForca();


//função para exibir conteudo após o click 
function manipulaConteudo() {
  var ativos = document.getElementById("iniciarJogo");
  var expirados = document.querySelector(".escondeConteudo");
  var esconde = document.querySelector(".esconde");

  if(document.getElementById("iniciarJogo").onclick)
  {
    expirados.style.display = "block";
    ativos.style.display = "none";
    esconde.style.display = "none"
    
  }
  else
  {
    ativos.style.display = "block";
    esconde.style.display = "block"
    expirados.style.display = "none";
  }
}

      //algoritmo do jogo 


let acertos = 0;

let posicao;

for (posicao = 0; posicao < palavra.length; posicao++) {
    let span = document.createElement("span");  //cria um span no html 
    span.setAttribute('id', posicao);
    span.setAttribute("class", "borderBottom")
    

    let div = document.getElementById("palavra");
    div.appendChild(span);  //adiciona o span criado na div com id"palavra" 

}



for (posicao = 0; posicao < letras.length; posicao++) {
    let botao = document.createElement("button"); //variavel que cria um botão
    let letra = document.createTextNode(letras[posicao]); //cria texto com a letra na posição atual do array
                                   //letras do alfabeto  posição que ocupa
    botao.appendChild(letra); // adiciona o texto(letra) ao botão 
    botao.setAttribute('onclick', 'escolheLetra(\''+letras[posicao]+'\')');     //chama a função 

    botao.setAttribute('id', letras[posicao]);

    let div = document.getElementById("letras");
    div.appendChild(botao); //adiciona o botão na section de id "letras"
}


function escolheLetra(letra) {

    let acertou = false;

    for (posicao = 0; posicao < palavra.length; posicao++) {
        if (letra === palavra[posicao])/*se a letra for encontrada em alguma posição da palavra */ 
        {
            let span = document.getElementById(posicao);
            let l = document.createTextNode(letra);/*cria um texto com o conteudo da letra*/
            

            span.appendChild(l); /*cria um span com o texto de "letra" */

            let botao = document.getElementById(letra);
            botao.setAttribute('class', 'certa');
            botao.removeAttribute('onclick'); /*remove o clique para o usuário não escolher mais a letra*/

            acertos++;
            acertou = true;
        }
    }
      //se acertou for falso cria o boneco
    if (acertou === false) {

        document.getElementById("forca");
        var botao = document.getElementById(letra);
        botao.setAttribute('class', 'errada');
        botao.removeAttribute('onclick');
        chances--; 
        

        switch(chances){
          case 5: desenhaCabeca();break;
          case 4: desenhaTronco(); break;
          case 3: desenhaBracoEsquerdo();break;
          case 2: desenhaBracoDireito(); break;
          case 1: desenhaPernaEsquerda();break;
          case 0: desenhaPernaDireita(); break;
        }
        if (!(letrasErradas.includes(letra))){
          letrasErradas.push(letra);
      }
      mostraErro();
    }
    
    //se acabarem as chances
    if (chances === 0) {
        let mensagem = document.createElement("p"); //cria paragrafo
        let t1 = document.createTextNode("Você perdeu!"); //exibe mensagem no paragrafo
        
        mensagem.appendChild(t1); //adiciona o paragrafo ao HTML
        mensagem.setAttribute('id', "perdeu");

        let botao = document.createElement("button"); //cria um botão
        let t2 = document.createTextNode("jogar novamente"); //texto do botão
        
        botao.appendChild(t2); //exibe botão no HTML
        botao.setAttribute('class', 'novo-bt'); //adiciona a classe ao
        botao.setAttribute('onclick', 'window.location.reload()');

        let div = document.getElementById("novo");
        div.appendChild(mensagem); //adiciona na div 
        div.appendChild(botao); // ~//~
    }
      /*se acertou */
    if (acertos === palavra.length) //se acertou todas as letras
    {
        let mensagem = document.createElement("p"); //cria paragrafo
        let t1 = document.createTextNode("Você Venceu. Parabéns!"); // cria mensagem
        mensagem.appendChild(t1); // junta os 2
        mensagem.setAttribute('id', "venceu");

        let botao = document.createElement("button");
        let t2 = document.createTextNode("jogar novamente");
        
        botao.appendChild(t2);
        botao.setAttribute('class', 'novo-bt');
        botao.setAttribute('onclick', 'window.location.reload()');

        let div = document.getElementById("novo");
        div.appendChild(mensagem); // mensagem no html
        div.appendChild(botao);//botao no html
    }
}


//desenhar boneco

function desenhaCabeca() {
  pincel.beginPath();
  pincel.strokeStyle = "turquoise";
  pincel.lineWidth = "3";
  pincel.arc(150, 150, 30, 0, Math.PI *2);
  pincel.stroke();
  
}

function desenhaTronco() {
  pincel.beginPath();
  pincel.strokeStyle = "turquoise";
  pincel.lineWidth = "3";
  pincel.lineCap = "round";
  pincel.moveTo(150,250);
  pincel.lineTo(150,180);
  pincel.stroke();
}

function desenhaBracoDireito() {
  pincel.beginPath();
  pincel.strokeStyle = "turquoise";
  pincel.lineWidth = "3";
  pincel.lineCap = "round";
  pincel.moveTo(210,220);
  pincel.lineTo(150,195);
  pincel.stroke();
}

function desenhaBracoEsquerdo() {
  pincel.beginPath();
  pincel.strokeStyle = "turquoise";
  pincel.lineWidth = "3";
  pincel.lineCap = "round";
  pincel.moveTo(105,220);
  pincel.lineTo(150,195);
  pincel.stroke();
} 

function desenhaPernaDireita() {
  pincel.beginPath();
  pincel.strokeStyle = "turquoise";
  pincel.lineWidth = "3";
  pincel.lineCap = "round";
  pincel.moveTo(210,299);
  pincel.lineTo(150,250);
  pincel.stroke();
}

function desenhaPernaEsquerda() {

  pincel.beginPath();
  pincel.strokeStyle = "turquoise";
  pincel.lineWidth = "3";
  pincel.lineCap = "round";
  pincel.moveTo(100,300);
  pincel.lineTo(150,250);
  pincel.stroke();
}

function desenhaForca() {
  pincel.fillStyle = 'black'
  pincel.fillRect(10, 60, 3, 240)

  pincel.fillStyle = 'black'
  pincel.fillRect(10, 60, 140, 3)

  pincel.fillStyle = 'black'
  pincel.fillRect(147.5, 60, 3, 52)
}
 
//adicionar palavra

function adicionarPalavras() {
  let texto = document.querySelector("#novaPalavra").value.toUpperCase(); //texto digitado é passado para o array em letras maiúsculas
  let novoArray = palavras.push(texto);
  novoArray;
  if (btnAdiciona.onclick) {
    alert("palavra adicionada com sucesso");
    document.querySelector("#novaPalavra").style.display = "none";
    document.querySelector("#adicionarPalavra").style.display = "none";
  }
}
 //mostra palavra errada 
 function mostraErro(){
  erro.innerHTML = " ";
  for(var i = 0; i<letrasErradas.length;i++){
      erro.innerHTML += letrasErradas[i].toUpperCase() + " ";
  }
}