function selectionSort(arr) {
    let minIndex;
    for(let i = 0;i<arr.length-1;i++) {
        minIndex = i;
        for(let j = i+1;j<arr.length;j++) {
            if(arr[j]<arr[minIndex]){
                minIndex = j
            }
        }
        if(minIndex!==i){
            [arr[minIndex],arr[i]] = [arr[i],arr[minIndex]];
        }
    }
    return arr;
}


let arr = [20,4, 8, -2, -6];
console.log(selectionSort(arr));