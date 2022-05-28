function repeatStringNumTimes(str, num) {
    if(num < 1) return ""
    let count = 1;
    let result = str;
    while(count < num) {
        result += str;
        count++;
    }
    return result;
  }
  
repeatStringNumTimes("abc", 3);