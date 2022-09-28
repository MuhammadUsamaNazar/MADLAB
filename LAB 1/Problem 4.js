//Write a JavaScript that calculates the squares and cubes of the numbers from 0 to 10.
document.write( "<table> <tr> <th>Number</th> <th>Square</th> <th>Cube</th> </tr>" ) 
for(var n=0; n<=10; n++) 
{ 
document.write( "<tr><td>" + n + "</td><td>" + n*n + "</td><td>" + n*n*n + "</td></tr>" ) 
} 
document.write( "</table>")
