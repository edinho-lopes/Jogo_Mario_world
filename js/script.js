
const mario = document.querySelector('.mario');

const jump = () => {
   mario.classList.add('jump'); //adicione o jump(pulo);

   setTimeout(() => { //quando a animação de cima terminar, esse será executado; 
      
      mario.classList.remove('jump');
      
}, 500);

}

document.addEventListener('keydown', jump); // vai precionar uma tecla e vai add a função jump;