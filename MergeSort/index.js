console.log("hello world")

const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;

    const midPoint = Math.floor(arr.length / 2);
    const leftHalf = mergeSort(arr.slice(0, midPoint)); //gives us array from beginning to midpoint
    const rightHalf = mergeSort(arr.slice(midPoint));
    return merge(leftHalf,rightHalf);
}
  const merge = (leftArray, rightArray) => {
    const mergedCollection = [];
  
    while (leftArray.length > 0 && rightArray.length > 0) {
      const arrayWithMin = leftArray[0] < rightArray[0] ? leftArray : rightArray;
      const mergeElement = arrayWithMin.shift();
      mergedCollection.push(mergeElement);
    }
  
    return mergedCollection.concat(leftArray, rightArray);
  }
  
  console.log(mergeSort([1,3,2,5,-1,5,7,2]))