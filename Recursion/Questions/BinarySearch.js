// function BinarySearch(array, target){
//     let left = 0;
//     let right = array.length-1;

//     while(left<=right){
//         let mid = Math.floor((left+right)/2);
//         if(array[mid] === target){
//             return mid
//         }else if(array[mid] < target){
//             left = mid+1
//         }else {
//             right = mid-1
//         }
//     }
//     return false;
// }


// let ar = [];
// for(let i =0;i<10;i++){
//     ar.push(i*2)
// }
// console.log(ar)

// const result = BinarySearch(ar,0);
// console.log("The result is => ",result)




//using recursion

function binaryRecursive(ar, target, left = 0, right){
    if(left>right){
        return false;
    }
    let mid = Math.floor((left+right)/2);
    if(ar[mid]===target){
        return mid;
    }else if(ar[mid]>target){
        right = mid-1;
        return binaryRecursive(ar,target,left,right)
    }else{
        left = mid+1;
        return binaryRecursive(ar,target,left,right);
    }

}





let ar = [];
for(let i =0;i<10;i++){
    ar.push(i*2)
}
console.log(ar)

const result = binaryRecursive(ar,9,0,ar.length-1);
console.log("Result is : ",result)