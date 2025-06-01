"use strict"
function solveEquation(a, b, c) {
  let arr = []
  const discriminant = b**2 - 4*a*c;
  if(discriminant > 0) {
    const firstRadical = (-b + Math.sqrt(discriminant))/(2*a);
    const secondRadical = (-b - Math.sqrt(discriminant))/(2*a);
    arr.push(firstRadical,secondRadical)
  } else if (discriminant === 0) {
    const radical = -b/(2*a)
    arr.push(radical)
  } return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

  const monthlyInterestRate = (percent/100)/12;
  const credit = amount - contribution; 
  let monthlyLoanPayment = credit * (monthlyInterestRate + (monthlyInterestRate / (Math.pow(1 + monthlyInterestRate, countMonths) - 1))) 
  let totalAmountCredit = monthlyLoanPayment*countMonths;
  return Number(totalAmountCredit.toFixed(2))
}