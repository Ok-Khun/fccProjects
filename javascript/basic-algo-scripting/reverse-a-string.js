function reverseString(str) {
    // we can use str.split('').reverse().join('') for the solution
    // return str.split('').reverse().join('');
    let result = "";
    let strLength = str.length - 1;
    while(strLength >= 0){
        result += str[strLength]
        strLength -= 1
    }
    console.log(result)
    return result
  }
  
  reverseString("hello");