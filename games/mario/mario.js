const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe')
const result = document.querySelector('#result');
var cont = 0;
const contador = document.querySelector('#cont');
const record = document.querySelector('#record');

const jump = () => {
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const reload = () => {
    window.location.reload()
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;

    // O sinal de + é para converter o valor em string para um valor numérico
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 81){
        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`

        mario.src = "img/xLfUBaL.png";
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`

        result.classList.add('game-over');
        result.innerHTML = 'Game over';

        record.innerHTML = `Record: ${cont}`
        clearInterval(loop);
    }
    else{
        cont++
        contador.innerHTML = `${cont}`;
    }

    if(cont >= 1500){
        pipe.style.animation = 'pipe-animation 1s infinite linear';
    }
    else if(cont >= 2000){
        pipe.style.animation = 'pipe-animation 0.5s infinite linear';
    }

}, 10);


document.addEventListener("keydown", function(event) {
    if (event.code === "Space") { // Verifica se a tecla pressionada é a barra de espaço
      jump(); // Executa a função jump
    } else if (event.key === "r") { // Verifica se a tecla pressionada é a letra r
      reload(); // Executa a função reload
    }
    else if (event.key === "v") { // Verifica se a tecla pressionada é a letra r
        window.history.back();
      }
  });
