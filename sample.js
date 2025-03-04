// // class HashTable {
// //     constructor(size = 10){
// //         this.table = new Array(size)
// //         this.size = size;
// //     }

// //     hash(key){
// //         let hash = 0;
// //         for(let char of key){
// //             hash+=char.charCodeAt(0)
// //         }
// //         return hash%this.size
// //     }


// //     set(key, value){
// //         let index = this.hash(key);
// //         for(let bucket of this.table[index]){
// //             if(!bucket){
// //                 this.table[index] = [[key,value]]
// //             }else {
// //                 let elementInconcern = bucket.find(item = item[0]===key);
// //                 if(elementInconcern){
// //                     elementInconcern[1] = value;
// //                 }else {
// //                     this.table[index].push([key, value])
// //                 }
// //             }
// //         }
// //     }

// //     print(){
// //         console.log(this.table);
// //     }
// // }


// // let Ht = new HashTable(10);

// // Ht.set("name","lilly");
// // Ht.set("place","Palakkad");



// function QuickSort(arr){
//     if(arr.length<2){
//         return arr;
//     }
//     let pivot = arr[arr.length-1];
//     let left = [];
//     let right = [];
//     for(let i =0;i<arr.length-1;i++){
//         if(arr[i]<pivot){
//             left.push(arr[i]);
//         }else {
//             right.push(arr[i]);
//         }
//     }
//     return [...QuickSort(left),pivot,...QuickSort(right)];
// }

// const arr = [5,3,2,-6,-5];
// console.log(QuickSort(arr));


function mergeSort(arr){
    if(arr.length<2){
        return arr;
    }

    let mid = Math.floor(arr.length/2);
    const leftArr = arr.slice(0,mid);
    const rightArr = arr.slice(mid);

    return merge(mergeSort(leftArr),mergeSort(rightArr));
}

function merge(leftArr, rightArr){
    let sortedArr = []
    while(leftArr.length && rightArr.length){
        if(leftArr[0]<rightArr[0]){
            sortedArr.push(leftArr.shift());
        }else {
            sortedArr.push(rightArr.shift());
        }
    }
    return [...sortedArr,...leftArr,...rightArr]
}


const arr = [5,3,2,-6,-5];
console.log(mergeSort(arr));