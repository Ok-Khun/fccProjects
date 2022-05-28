function findElement(arr, func) {
    for(let i of arr){
        if(func(i)) return i
    }
}
  
  findElement([1, 2, 3, 4], num => num % 2 === 0);