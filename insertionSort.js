// Insertion Sort works by dividing the list into a sorted and an unsorted part. It iterates through the unsorted part, 
// taking one element at a time and inserting it into its correct position in the sorted part.

function insertionSort(arr){
    let n = arr.length

    for(let i = 1 ; i<n ; i++){
        let key = arr[i]
        let j = i-1

        while(j>=0 && arr[j]> key){
            arr[j+1]=arr[j]
            j = j-1
        }

        arr[j+1]= key
    }

    return arr
}

const array = [12, 11, 13, 5, 6]

console.log('sorter array is :', insertionSort(array));
