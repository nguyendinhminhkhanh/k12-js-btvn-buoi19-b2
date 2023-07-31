var tab1 = document.querySelectorAll('.tab')[0];
var tab2 = document.querySelectorAll('.tab')[1];
var tab3 = document.querySelectorAll('.tab')[2];

var flex1 = document.querySelectorAll('.flex')[0];
var flex2 = document.querySelectorAll('.flex')[1];
var flex3 = document.querySelectorAll('.flex')[2];


tab1.addEventListener('click',()=>{
    tab1.classList.add('clickCss');
    flex1.classList.remove('none');

    tab2.classList.remove('clickCss');
    flex2.classList.add('none');
    tab3.classList.remove('clickCss');
    flex3.classList.add('none');
})
tab2.addEventListener('click',()=>{
    tab2.classList.add('clickCss');
    flex2.classList.remove('none');

    tab1.classList.remove('clickCss');
    flex1.classList.add('none');
    tab3.classList.remove('clickCss');
    flex3.classList.add('none');
})
tab3.addEventListener('click',()=>{
    tab3.classList.add('clickCss');
    flex3.classList.remove('none');

    tab1.classList.remove('clickCss');
    flex1.classList.add('none');
    tab2.classList.remove('clickCss');
    flex2.classList.add('none');
})