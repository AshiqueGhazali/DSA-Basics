// Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, 
// and swaps them if they are in the wrong order. This process is repeated until the list is sorted.

function bubbleSort(arr){
    for(let i = 0 ; i < arr.length-1 ; i++){
        for(let j = i+1 ; j < arr.length-1-i ; j++){
            if(arr[i] > arr[j]){
                [arr[i],arr[j]] = [arr[j],arr[i]]
            }
        }
    }

    return arr
}


const arr = [90,89,23,567,1,29,3321]

console.log(bubbleSort(arr));
