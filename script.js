const faq1= document.querySelector('#faq1');
const faq1ClassList=faq1.lastElementChild.classList;
const faq1img = document.querySelector('#faq1 .question img');
const faq2= document.querySelector('#faq2');
const faq2ClassList=faq2.lastElementChild.classList;
const faq2img = document.querySelector('#faq2 .question img');
const imgPlus=  "assets/images/icon-plus.svg"
const imgMinus=  "assets/images/icon-Minus.svg"



faq1.addEventListener('click',function(){
    faq1ClassList.toggle('collapse');
    if(faq1img.attributes.src.value == imgPlus) {
        faq1img.setAttribute("src",imgMinus);
    } else {
        faq1img.setAttribute("src",imgPlus);
    }
        
})

faq2.addEventListener('click',function(){
    faq2ClassList.toggle('collapse');
    if(faq2img.attributes.src.value == imgPlus) {
        faq2img.setAttribute("src",imgMinus);
    } else {
        faq2img.setAttribute("src",imgPlus);
    }
        
})

