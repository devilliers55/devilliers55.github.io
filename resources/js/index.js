const codingTime = document.getElementById('codeTime');
let currentDate = new Date();
let pDate = new Date("01/01/2015");
const intlNumberFormatter = new Intl.NumberFormat("en-US");



setInterval(() => {
    const now = new Date();
    const diff = Math.floor((now.getTime() - pDate.getTime()) / 1000);
    codingTime.innerText = intlNumberFormatter.format(diff);
}, 1000);

setInterval();