// Quick Sort is a divide-and-conquer algorithm that works by selecting a "pivot" element from the array 
// and partitioning the other elements into two sub-arrays: 
// elements less than the pivot and elements greater than the pivot. The sub-arrays are then recursively sorted.

function quickSort(arr){
    if(arr.length <= 1){
        return arr
    }

    let pivot = arr[arr.length-1]
    let left = []
    let right = []

    for(let i = 0 ; i < arr.length-1; i++){
        if(arr[i] < pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }

    return [...quickSort(left),pivot,...quickSort(right)]
}

const arr = [10, 7, 8, 9, 1, 5];

console.log('sorted array is :', quickSort(arr));
