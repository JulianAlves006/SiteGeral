function getTime(segundos){
    const time = new Date(segundos * 1000);
    return time.toLocaleTimeString('pt-BR', {
        hour12: false, 
        timeZone: 'UTC'
    });
}

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

function startTimer(){
    timer = setInterval(function(){
        segundos++;
        relogio.innerHTML = getTime(segundos);
    }, 1000);
}

iniciar.addEventListener('click', function(e){
    relogio.classList.remove('pausado');
    clearInterval(timer);
    startTimer();
});


pausar.addEventListener('click', function(e){
    relogio.classList.add('pausado');
    clearInterval(timer);
});

zerar.addEventListener('click', function(e){
    relogio.classList.remove('pausado');
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    segundos = 0;
});


//Ou da pra fazer assim:

/*
document.addEventListener('click', function(e){
    const elemento = e.target;
    if(el.classList.contains('zerar')){
        relogio.classList.remove('pausado');
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        segundos = 0;
    }

    if(el.classList.contains('iniciar')){
        relogio.classList.remove('pausado');
        clearInterval(timer);
        startTimer();
    }

    if(el.classList.contains('pausar')){
        relogio.classList.add('pausado');
        clearInterval(timer);
    }

});

E dai é só remover os eventos dos botões.
*/ 
