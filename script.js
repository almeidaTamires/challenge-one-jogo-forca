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
const palavras = ["ovelha" , "camundongo", "computador", "amarelo", "elefante", "abacate"];
const sorteiaPalavras = palavras[math.floor(math.random() * 6)];
