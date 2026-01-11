let myAudio1 = new Audio('E_morse_code.mp3');
let myAudio2=new Audio('T_morse_code.mp3');
const circle=document.querySelector('.circle');
const rectangle=document.querySelector('.rectangle');

window.addEventListener("keypress",(e)=>{
    if (e.key === '.') {
        myAudio1.play();
        circle.classList.add('glow');
        setTimeout(()=>{
            circle.classList.remove('glow');},1000);
        }
    
});

window.addEventListener("keypress",(e)=>{
    if (e.key === '-') {
        myAudio2.play();
        rectangle.classList.add('glow');
        setTimeout(()=>{
            rectangle.classList.remove('glow');},1000);
        }
    
});


