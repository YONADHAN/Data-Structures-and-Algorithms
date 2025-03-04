const array = [1,2,3,4,5,6,7,8,9,10];

function sum(arr){
    
    if(arr.length === 0){
        return 0;
    }
    let result = arr.pop();
    return result + sum(arr)
}


console.log(sum(array))  //45