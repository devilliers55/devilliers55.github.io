const codingTime = document.getElementById('codeTime');
const displayProject1 = document.getElementById('one');
const displayProject2 = document.querySelector('.toHide2');
const displayProject3 = document.querySelector('.toHide3');
const liTarget1 = document.getElementById('oneT');
const liTarget2 = document.getElementById('twoT');
const liTarget3 = document.getElementById('threeT');
let currentDate = new Date();
let pDate = new Date("01/01/2015");
const intlNumberFormatter = new Intl.NumberFormat("en-US");



setInterval(() => {
    const now = new Date();
    const diff = Math.floor((now.getTime() - pDate.getTime()) / 1000);
    codingTime.innerText = intlNumberFormatter.format(diff);
}, 1000);


liTarget1.onclick = function () {
    if (displayProject1.hidden = true){
        displayProject1.hidden = false;
    } else {
        displayProject1.hidden = true;
    }
}
