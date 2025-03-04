function mul(num,n){
    if(n<1){
        return ;
    }
    mul(num,n-1)
    console.log(`${num} x ${n} = `,num*n);


}

mul(10,10)




// PS G:\Brototype\Week 16\Problems\Recursion\Questions> node multiplication.js
// 10 x 1 =  10
// 10 x 2 =  20
// 10 x 3 =  30
// 10 x 4 =  40
// 10 x 5 =  50
// 10 x 6 =  60
// 10 x 7 =  70
// 10 x 8 =  80
// 10 x 9 =  90
// 10 x 10 =  100
