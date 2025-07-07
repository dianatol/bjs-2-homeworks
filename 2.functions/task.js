function getArrayParams(...arr) {

  let min = arr[0];
  let max = arr[0];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    if (value > max) {
      max = value;
    }
    if (value < min) {
      min = value;
    }
    sum += value;
    } 
  const avg = Number((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}


function summElementsWorker(...arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
}

function differenceMaxMinWorker(...arr) {
  let min = arr[0];
  let max = arr[0];
  let diffrence = 0;
  
 for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    if (value > max) {
      max = value;
    }
    if (value < min) {
      min = value;
    }
    diffrence = max - min;
  }
  return diffrence;
}


function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  let diffrence = 0;

  for(let i = 0; i < arr.length; i++) {
    const value = arr[i];
    if (value % 2 === 0) {
      sumEvenElement += value;
    }
    else {
      sumOddElement += value;
    }
    diffrence = sumEvenElement - sumOddElement;
  }
  return diffrence;
}

function averageEvenElementsWorker(...arr) {

  let sumEvenElement = 0;
  let countEvenElement = 0;
  let average = 0; 
  for(let i = 0; i < arr.length; i++) {
  const value = arr[i];
  if (value % 2 === 0) {
    sumEvenElement += value;
    countEvenElement += 1;
  }
  average = sumEvenElement / countEvenElement;
}
  return average;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = func(...arrOfArr[0]);
  for(let i = 0; i < arrOfArr.length; i++) {
    const currentResult = func(...arrOfArr[i]);
  if (currentResult > maxWorkerResult) {
    maxWorkerResult = currentResult;
    }
  }
  return maxWorkerResult;
}

