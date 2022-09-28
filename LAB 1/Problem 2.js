//Write program to find sum of all digits. Input 23617 output 2+3+6+1+8=20
function getSumOfDigits(num) {
    return String(num)
      .split('')
      .reduce((acc, curr) => {
        return acc + Number(curr);
      }, 0);
  }
  
  console.log(getSumOfDigits(23618));
