// Selection Sort is a simple sorting algorithm that divides the list into two parts: a sorted part and an unsorted part.
//  It repeatedly selects the smallest (or largest, depending on the order) element from the 
// unsorted part and swaps it with the first element of the unsorted part.

function selectionSort(arr){
    const length = arr.length

    for(let i = 0 ; i < length-1 ; i++){
        let minIndex = i

        for(let j=i ; j<length ; j++){
            if(arr[minIndex]>arr[j]){
                minIndex = j
            }
        }


        if(minIndex !== i){
            let temp = arr[i]
            arr[i] = arr[minIndex]
            arr[minIndex] = temp
        }
    }

    return arr
}

const arr = [90,89,23,567,1,29,3321]

console.log(selectionSort(arr));
