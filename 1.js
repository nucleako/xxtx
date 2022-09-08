function _comma(number){
  let a = number < 0 ? '-' : '';
  number=Math.abs(number)
  var str=number.toString()
  var n=str.split("").reverse();
   for(var i=3;i<n.length;i=i+4){
     n.splice(i,0,",")
  }
  return a+n.reverse().join('')  
}

function _comma(number) {
// 补全代码
  let b = number < 0 ? '-' : '';
  if (Math.abs(number) < 1000) {
  return number.toString();
  } else {
   number=Math.abs(number)
  return b+_comma(Math.floor(number / 1000)) + "," + _comma(number % 1000);
}
}