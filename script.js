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

/*const procuraErro = ###.search(/[a-z||áàâãä-úùũûü||Çç]/);*/

/*constants e variaeis para as palavras da forca*/ 
const palavras = ["ovelha" , "castelo", "corda", "amarelo", "elefante", "abacate"];
const palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)];
const palavraUsuario = document.querySelector("#entrada").value;
/*const btnEnviar = document.querySelector("#enviar"); btnEnviar.onclick = enviado;*/

/*
desenhaPoste();
desenhaApoio();
desenhaBarraSuperior();
desenhaTraco();
mostra();
enviado();*/

mostra();
/*função que sorteia a palavra */
function mostra(){
  console.log(palavraSecreta);
}
 

/*função para exibir conteudo após o click */
function manipulaConteudo() {
  var ativos = document.getElementById("iniciarJogo");
  var expirados = document.getElementById("escondeConteudo");
  if(document.getElementById("iniciarJogo").onclick)
  {
    expirados.style.display = "block";
    ativos.style.display = "none";
  }
  else
  {
    ativos.style.display = "block";
    expirados.style.display = "none";
  }
}


