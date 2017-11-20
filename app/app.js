document.addEventListener("DOMContentLoaded", function(){

  window.addEventListener("keydown", function(event){


    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const box = document.querySelector(`.box[data-key="${event.keyCode}"]`);
    console.log(box);
    if(!audio) return;
    audio.currentTime = 0; //rewind to starst
    audio.play();
    box.classList.add('playing')


  });

  function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');

  }

  const boxs = document.querySelectorAll('.box');
  boxs.forEach(box => box.addEventListener('transitionend', removeTransition));

});
