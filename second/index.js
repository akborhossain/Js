

var num=20;
console.log(typeof(num));
num=toString(num);
console.log(typeof(num));
num=parseInt(num);
console.log(typeof(num));
num="20.5";
console.log(typeof(num));
num=parseFloat(num);
console.log(typeof(num));
num=3.78345;
console.log(num.toFixed(1));
console.log(num.toPrecision(3));

console.log(Number(true));
console.log(Number(false));