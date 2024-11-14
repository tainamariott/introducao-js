const value1 = true; 
const value2 = false; 

console.log(value1 == value2);


// Thursty / Falsy -> Variáveis vazias ou com valor 0, 
// se submeter a um teste lógico, se tornarão um tipo boolean (thursty/false)


//teste lógico 1
if(value1){
    console.log('verdadeiro')
}else{
    console.log('falso')
}

//teste lógico (simplificando)
if(value1) console.log('verdadeiro');

//operador ternário 
const resultado = value1 ? 'verdadeiro' : falso 