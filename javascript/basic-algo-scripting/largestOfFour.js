function largestOfFour(arr) {
    let result = [];
    for(let i = 0; i < arr.length; i ++) {
        result.push(findLargest(arr[i]));
    }
    console.log(result)
    return arr;
}

function findLargest(arr){
    let result = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > result) result = arr[i];
    }
    return result;
}
  
largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);