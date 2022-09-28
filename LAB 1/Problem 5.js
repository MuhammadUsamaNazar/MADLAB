//Develop and demonstrate JavaScript script that uses functions for the following problems: 
//1.	Parameter: A string 
//2.	Output: The position in the string of the left-most vowel 
//3.	Parameter: A number  
//4.	Output: The number with its digits in the reverse order
var a = prompt("Enter The Query"),b = parseInt(a),z=0;
 if(b) {
  while(b>0)
   var r= b%10, z= z*10+r, b = Math.floor(b/10);
  document.write("Entered Query : "+ a +"<br> Given Number In Reverse Order : "+ z);
 }
 else {
  a = a.search(/[aeiouAEIOU]/);
  document.write("The First Occurence Of Vowel is at : "+ (a+1));
