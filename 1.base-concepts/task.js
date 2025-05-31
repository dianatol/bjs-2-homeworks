"use strict"
function solveEquation(a, b, c) {
  let arr = []
  const discriminant = b**2 - 4*a*c;
  if(discriminant < 0) {
    return arr
  }
  else if(discriminant > 0) {
    const x1 = (-b + Math.sqrt(discriminant))/(2*a);
    const x2 = (-b - Math.sqrt(discriminant))/(2*a);
    arr.push(x1,x2)
  }
  else if (discriminant === 0) {
    const x = -b/(2*a)
    arr.push(x)
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

  const P = (percent/100)/12;
  const credit = amount - contribution; 
  let every_month = credit * (P + (P / (Math.pow(1 + P, countMonths) - 1))) 
  let itog_summ = every_month*countMonths;
  return Number(itog_summ.toFixed(2))
}