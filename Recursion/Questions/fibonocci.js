// //fib term

// function fib(n){
//     if(n==0)return 0
//     if(n==1)return 1   
//     return fib(n-1)+fib(n-2);   
// }

// console.log(fib(5))



//febanocci series

// [0, 1, 1, 2, 3, 5, 8, 13, 21]//---------9 items

function fibonocci(n){
   
    if(n<=1){
        let number = [0,1]
        return number
    }
    let number = fibonocci(n-1)
   number.push(number[n-1]+number[n-2])   
   return number

}



console.log(fibonocci(9));
