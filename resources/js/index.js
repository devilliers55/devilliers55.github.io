const codingTime = document.getElementById('codeTime');
let currentDate = new Date();
let cDay = currentDate.getDay();
let cMonth = currentDate.getMonth() + 1;
let cYear = currentDate.getFullYear();
console.log(cDay + ' ' + cMonth + ' ' + cYear);