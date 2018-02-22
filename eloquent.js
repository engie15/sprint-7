//Minimum exercise

function min(a,b) {
 if (a < b)
 return a;
 else
 return b;
}

//Recursion exercise

function isEven(n) {
    if (n == 0)
    return "True";
    else if (n == 1)
    return "False";
    else if (n < 0)
    return isEven(-n);
    else
    return isEven(n - 2)
}

//Bean Counting exercise

//Part A I did by myself but I couldn't answer Part B with out look at and understanding the solution.
var countBs = function(string) {
	var counted = 0  
	for (var i = 0; i < string.length; i++)
    	if (string.charAt(i) == "B") 
  	  	counted += 1;
	return counted
}