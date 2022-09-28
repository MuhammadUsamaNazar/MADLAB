//Write program to print the kth digit from last. E.g. input 23617 and k=4 output 3. 
function kthDigitFromLast(n, k)
{
     
    
    if (k <= 0)
    {
        document.write(-1);
        return;
    }
 
    
    var temp = String(n);
     
    
    if (k > temp.length)
    {
        document.write(-1);
    }
     
    
    else
    {
        var req = temp.charAt(temp.length - k)
         
        
        document.write(Number(req));
    }
}
 

var n = 23617;
var k = 4;

kthDigitFromLast(n, k);
