//Write program to find sum of even digits. Input 23617 output 2+6=8.
function sumEven(s) {
    return String(s)
      .split("")
      .filter(x => x % 2 === 0)
      .reduce((acc, val) => acc + Number(val), 0);
  }
  
  console.log(sumEven(23617));
