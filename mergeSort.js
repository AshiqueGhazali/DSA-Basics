// Merge Sort is a divide-and-conquer algorithm that works by recursively dividing the array into two halves 
// until each half has only one element, then merging the halves back together in sorted order.

function mergeSort(arr){
  if(arr.length <= 1){
    return arr
  }

  const mid = Math.floor(arr.length/2)
  const left = arr.slice(0,mid)
  const right = arr.slice(mid)

  return merge(mergeSort(left),mergeSort(right))
}


function merge(left,right){
    const result = []
    let leftIndex = 0
    let rigthIndex = 0

    while(leftIndex < left.length && rigthIndex < right.length){
        if(left[leftIndex] < right[rigthIndex]){
            result.push(left[leftIndex])
            leftIndex++
        }else{
            result.push(right[rigthIndex])
            rigthIndex++
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rigthIndex))
}


const arr = [2,7,1,9,3,6]

console.log(mergeSort(arr));
