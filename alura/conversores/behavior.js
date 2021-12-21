//Variáveis declaradas
var mediaIsVisible= false;
var grausIsVisible = false;
var moedaIsVisible = false;


//Carregamento da página

function nameFunction(){
  let text;
   let name = prompt("Por favor, me diga seu nome: 🧐");
  if (name == null || name == "") {
    text = "😕 Por favor informe um nome.";
    window.location.reload();
  } 
  else {
    text = "Olá " + name + "! Comece a calcular 😄";
  }
  alert(text);
  
}


//Abrir media
function openMedia(){
  document.getElementById('media').style.animation='2s fadeInSection';
  document.getElementById('media').style.display='block';
  location.href = "#media";
  document.getElementById('resultadomedia').style.visibility='visible';
  mediaIsVisible = true;
  document.getElementById('mediabutton').innerHTML="Já aberto 🔽";
  document.getElementById('backtop').style.animation='2s fadeIn';
  document.getElementById('backtop').style.visibility='visible';

  
}

//Abrir graus
function openGraus(){
  document.getElementById('graus').style.animation='2s fadeInSection';
  document.getElementById('graus').style.display='block';
  location.href = "#graus";
  document.getElementById('resultadotemperatura').style.visibility='visible';
  grausIsVisible = true;
  document.getElementById('grausbutton').innerHTML="Já aberto 🔽";
  document.getElementById('backtop').style.animation='2s fadeIn';
  document.getElementById('backtop').style.visibility='visible';
  
}

//Abrir moeda
function openMoeda(){
  document.getElementById('moeda').style.animation='2s fadeInSection';
  document.getElementById('moeda').style.display='block';
  location.href = "#moeda";
  document.getElementById('resultadomoeda').style.visibility='visible';
  moedaIsVisible = true;
  document.getElementById('moedabutton').innerHTML="Já aberto 🔽";
  document.getElementById('backtop').style.animation='2s fadeIn';
  document.getElementById('backtop').style.visibility='visible';
  
}



//Fechar os calculos
function closeMedia(){
  if(mediaIsVisible==true){
    document.getElementById('backtop').style.visibility='hidden';
    document.getElementById('backtop').style.animation='0.5s fadeOut';

   
    document.getElementById('media').style.display='none';
    

    document.getElementById('nota1').value = "";
    document.getElementById('nota2').value = "";
    document.getElementById('nota3').value = "";
    document.getElementById('nota4').value = "";
    document.getElementById('resultadomedia').innerHTML="";

    location.href = "#topPage";
    document.getElementById('mediabutton').innerHTML="Média";
    
  }
}

function closeGrau(){
  if(grausIsVisible==true){
    
    document.getElementById('backtop').style.visibility='hidden';
    document.getElementById('backtop').style.animation='0.5s fadeOut';

    document.getElementById('graus').style.display='none';
    
    location.href = "#topPage";
    document.getElementById('grausbutton').innerHTML="Graus";
 
  }
}

function closeMoeda(){
  if(moedaIsVisible==true){
    document.getElementById('backtop').style.visibility='hidden';
    document.getElementById('backtop').style.animation='0.5s fadeOut';

    document.getElementById('moeda').style.display='none';
    
    location.href = "#topPage";
    document.getElementById('moedabutton').innerHTML="Moeda";
   
  }
} 

//Retornar ao topo
function returnTopo(){
  document.getElementById('topPage').style.display='block';
  location.href = "#topPage";

}

//Cálculo de média
function calculoMedia(){

  //Elementos HTML
  var one = document.getElementById('nota1');
  var two = document.getElementById('nota2');
  var three = document.getElementById('nota3');
  var four = document.getElementById('nota4');

  //Valores
  var notaPrim = parseFloat(one.value);
  var notaSeg = parseFloat(two.value);
  var notaTer = parseFloat(three.value);
  var notaQuar = parseFloat(four.value);

  //Cálculo
  var mediafinal = (notaPrim + notaSeg + notaTer + notaQuar)/4;
  var mediafixada = mediafinal.toFixed(0);

  //Aprovação
  var aprovar = "";
  
  if (mediafixada > 5){
   aprovar = "você foi aprovado(a)!";
  }
  else{
    aprovar = "você foi reprovado(a)."
  }
  
  //Se qualquer uma estiver vazia, não há cálculo
  if (one.value.length==0 || two.value.length==0 || three.value.length==0 || four.value.length==0){
    document.getElementById('resultadomedia').innerHTML = "Não foi possível calcular, por favor preencha todos os campos acima."
  }

  //Resultado
  else{
    document.getElementById('resultadomedia').innerHTML = "(" + notaPrim + " + " + notaSeg + " + " + notaTer + " + " + notaQuar + ")" + " ÷ " + "4" + " = " + mediafixada + ", " + aprovar ;
  }


}

//Cálculo Temperatura
function conversorTemp(){

  //Elementos HTML
  var primeira = document.getElementById('escalatemperatura');
  var segunda = document.getElementById('tempescolhida');
  var escolha = document.getElementById('tempChosen');

  //Valores
  var pEscala = primeira.value;
  var sEscala = segunda.value;
  
  var valor = parseFloat(escolha.value);
  var letras =/[a-zA-Z]/;
  var special = /[ `!@#$%^&*()_+\=\[\]{};':"\\|<>\/?~]/ 
  var resultado;
  var validInput = false;
  
  //Variável de resultado
  var linha;
  

  //Validação de input
  if(escolha.value.match(letras)) //Se houver letras(salvo caracteres locais como ç, Д, ㅎ e outros), não se realiza conversão
  {
    validInput=false;  
  }
  //Se houver caracteres especiais, não se realiza conversão
  else if (escolha.value.match(special)){ 
    validInput = false;
  }
  //Valida o input
  else{
    validInput = true;
  }
  
 

  //Cálculos

  //Celsius para kelvin
  if (pEscala == "C" && sEscala=="k" && validInput==true){
    resultado = valor + 273.15
    var resultadofixado = resultado.toFixed(2);

    if (resultadofixado<0){
      linha = "O valor é negativo, não se esqueça que kelvin não tem números negativos... Resultado: "+ resultadofixado + "K";
    }
    else{
      linha = "A sua conversão resultou em " + resultadofixado + "K"
    }
    
  }

  //Kelvin para Celsius
  else if (pEscala == "k" && sEscala=="C" && validInput==true){
    if(valor<0){
      linha = "Opa...Kelvin não tem números negativos..."
    }
    else{
      resultado = valor - 273.15
      var resultadofixado = resultado.toFixed(2);
      linha = "A sua conversão resultou em " + resultadofixado + "°C"
    }
  }

  //Fahrenheit para Celsius
  else if (pEscala == "F" && sEscala=="C" && validInput==true){
    resultado = (valor - 32) / 1.8
    var resultadofixado = resultado.toFixed(2);
    linha = "A sua conversão resultou em " + resultadofixado + "°C"
  }

  //Celsius para Fahrenheit
  else if (pEscala=="C" && sEscala=="F" && validInput==true){
    resultado = (valor * 9 / 5) + 32
    var resultadofixado = resultado.toFixed(2);
    linha ="A sua conversão resultou em " + resultadofixado + "°F"
  }

  //Fahrenheit para kelvin
  else if (pEscala=="F" && sEscala=="k" && validInput==true){
    resultado = ((valor-32) * 5 /9) + 273
    var resultadofixado = resultado.toFixed(2);
    if (resultadofixado<0){
      linha = "O valor é negativo, não se esqueça que kelvin não tem números negativos... Resultado: "+ resultadofixado + "K";
    }
    else{
      linha = "A sua conversão resultou em " + resultadofixado + "K"
    }
  }

  //kelvin para Fahrenheit
  else if (pEscala=="k" && sEscala=="F" && validInput==true){
    if(valor<0){
      linha = "Opa...Kelvin não tem números negativos..."
    }
    else{
      resultado = ((valor-273)*9/5) + 32
      var resultadofixado = resultado.toFixed(2);
      linha = "A sua conversão resultou em " + resultadofixado + "°F"
    }
  }

  //Caso as escalas sejam iguais
  else {
    linha = "Não é possível converter uma escala pra ela mesma... 😔"
  }

  
  //Se estiver vazio
  if (escolha.value.length==0){

    document.getElementById('resultadotemperatura').innerHTML = "Não foi possível calcular, insira um valor antes."; 
  }
  //Tipo de input não válido
  else if (validInput==false){
    document.getElementById('resultadotemperatura').innerHTML = "Não foi possível calcular, insira apenas números";
  }
  //Resultado do cálculo
  else{
    document.getElementById('resultadotemperatura').innerHTML = linha;
  }
  
}

//Conversor de moeda
function ConversorMoeda(){
  var mo = document.getElementById('moedaescolhas');
  var inputvalor = document.getElementById('valormoeda');

  var m = mo.value;
  var v = parseFloat(inputvalor.value);

  var letras =/[a-zA-Z]/;
  var special = /[ `!@#$%^&*()_+\=\[\]{};':"\\|<>\/?~]/ 
  var resultado;
  var validInput = false;
  
  //Variável de resultado
  var linha;
  
  
  //Cálculos
  if (m == "D"){
    resultado = v * 0.18
    var resultadofixado = resultado.toFixed(2);
    linha = "O valor em reais inserido corresponde a " + resultadofixado + " dólar(es)."
  }
  else if (m == "L"){
    if (v < 0.01){  
      linha = "O valor em reais inserido é baixíssimo, o resultado não pode ser exibido."
    }
    else{
      resultado = v * 0.14
      var resultadofixado = resultado.toFixed(2);
      linha = "O valor em reais inserido corresponde a " + resultadofixado + " libra(s)."
    }
  }
  else {
    if (v < 100000){
      resultado = v * 0.0000039
      var resultadofixado = resultado.toFixed(9);
      linha = "O valor em reais inserido corresponde a " + resultadofixado + " bitcoin(s)."
    }
    else if (v < 0.01){  
      linha = "O valor em reais inserido é baixíssimo, o resultado não pode ser exibido."
    }
    else {
      resultado = v * 0.0000039
      var resultadofixado = resultado.toFixed(2);
      linha = "O valor em reais inserido corresponde a " + resultadofixado + " bitcoin(s)."
    }
  }

  //Se estiver vazio
  if (inputvalor.value.length==0){

    document.getElementById('resultadomoeda').innerHTML = "Não foi possível calcular, insira um valor antes."; 
  }
  else{
    document.getElementById('resultadomoeda').innerHTML = linha;
  }
}