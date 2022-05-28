function findLongestWordLength(str){
    let arr = str.split(" ");
    let result = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if(result.length < arr[i].length) result = arr[i];
    }
    return result;
}
  
findLongestWordLength("The quick brown fox jumped over the lazy dog");