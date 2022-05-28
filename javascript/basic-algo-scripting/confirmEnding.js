function confirmEnding(str, target) {
    let result = str.slice(str.length - target.length);
    return result === target;
  }
  
confirmEnding("Bastian", "an");    