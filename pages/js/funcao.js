function Executasorteio(){

  aleatorio=Math.round(Math.random()*10);
    
  //alert(`Seu numero da sorte é ${aleatorio}`);

  numerocerto=prompt('Digite aqui seu número da sorte (de 1 à 10)')
  
  if(numerocerto==aleatorio){
    paragrafoResultado.innerHTML='Você ganhou o sorteio'
  }
  if(numerocerto!=aleatorio){
    paragrafoResultado.innerHTML='Tente Novamente'
  }
}

function Zerar(){
    if (paragrafoResultado!='Clique no Botão para participar do sorteio de uma corrida Gratis.'){
        paragrafoResultado.innerHTML='Clique no Botão para participar do sorteio de uma corrida Gratis.'
    }
}
