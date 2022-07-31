
 const mario = document.querySelector('.mario');
 const pipe = document.querySelector('.pipe');

const jump = () => {
  
   mario.classList.add('jump'); //adicione o jump(pulo);

   setTimeout(() => { //quando a animação de cima terminar, esse será executado; 
      
      mario.classList.remove('jump');
      
}, 500);

}

const loop = setInterval(() => {
   
   const pipePosition = pipe.offsetLeft; //acesando o deslocamento esquerdo da imagem pipe;
   const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', ''); 

   if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){ // condição para acabar o jogo

    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`;

    mario.src = "./images/game-over.png";
    mario.style.width = '75px';
    mario.style.marginLeft = '50px';

    clearInterval(loop);
    console.log(loop);
}
}, 10);

document.addEventListener('keydown', jump); // vai precionar uma tecla e vai add a função jump;