function factorialize(num) {
    let result = 1;
    if(num === 0) return result;
    while(num > 0) {
        result *= num;
        num -= 1;
    }
    console.log(result);
    return result;
}
  
factorialize(5);