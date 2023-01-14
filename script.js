const txt1 = document.getElementById('inputEmail4');
const txt2 = document.getElementById('inputPassword4');
const txt3 = document.getElementById('inputAge4');
const btn1 = document.getElementById('btn1');
const out1 = document.getElementById('demo');
const out2 = document.getElementById('demo2');
const out3 = document.getElementById('demo3');

function fun1(event){
    out1.innerHTML= txt1.value;
    out2.innerHTML= txt2.value;
    out3.innerHTML= txt3.value;
    event.preventDefault()

}

btn1.addEventListener('click',fun1);
