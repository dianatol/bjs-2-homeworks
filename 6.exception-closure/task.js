
function parseCount(value) {
  const parsed = Number.parseFloat(value);
  if (Number.isNaN(parsed)) {
    throw new Error("Невалидное значение");
  }
  return parsed;
}

function validateCount(value) {
  try {
    return parseCount(value);
  } catch (error) {
    return error;
  }
}

class Triangle {
    constructor(sideOne, sideTwo, sideThree) {
    if (sideOne + sideTwo <= sideThree || sideOne + sideThree <= sideTwo || sideTwo + sideThree <= sideOne) {
        throw new Error("Треугольник с такими сторонами не существует")
       }  
    this.sideOne = sideOne;
    this.sideTwo = sideTwo;
    this.sideThree = sideThree;
    }

    get perimeter() {
        return this.sideOne+this.sideTwo+this.sideThree;
    }

    get area() {
        let p = (this.sideOne + this.sideTwo + this.sideThree) / 2;
        const area = Math.sqrt(p*(p-this.sideOne)*(p-this.sideTwo)*(p-this.sideThree));
        return Number(area.toFixed(3));
        
    } 
}

function getTriangle(sideOne, sideTwo, sideThree) {
  try {
    return new Triangle(sideOne, sideTwo, sideThree);
  } catch (error) {
    return {
      get perimeter() {
        return "Ошибка! Треугольник не существует";
      },
      get area() {
        return "Ошибка! Треугольник не существует";
      }
    }
  }
}





