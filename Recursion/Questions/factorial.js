function fact(n){
    if(n<=1){
        return 1;
    }
    
    result = n * fact(n-1)
    return  result;
}


console.log("factorial of 4 = ",fact(5))