//função sem retorno (procedure) 
function inicio(){
    const mensagem = 'Estou iniciando...';
    console.log(mensagem)
}

//função com retorno (function)
function processa(){
    const mensagem = 'Estou iniciando...';
    return mensagem;
}

// const resultado = processa();
// console.log(resultado);

function run(){
    inicio();
    const resultado = processa();
    console.log(resultado);
}

const run = processa();
run();

