
function playSound(e){
    const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`); //choose the audio matching to the keycode of the input
    const key=document.querySelector(`.key[data-key="${e.keyCode}"]`); //save it in key variable which is used the reverse the transition
    console.log(key);
    if(!audio) return;  //stop the function from running all together
    audio.currentTime=0; //start the transition from beginning
    audio.play();
    key.classList.add('playing'); //add the transition div class 'playing' to the key
}
function removeTransition(e){
    if(e.propertyName !=='transform') return; //skip it if its not a transform
    console.log(e.propertyName);
    this.classList.remove('playing'); //remove the transition after it is done
}
const keys= document.querySelectorAll('.key'); //creates an array of keys
keys.forEach(key => key.addEventListener('transitionend',removeTransition));//remove transition of whatever keys have transitioned
window.addEventListener('keydown',playSound); //first step that runs when u press a key