function truncateString(str, num) {
    if(str.length <= num) return str;
    let result = str.slice(0,num);
    return result + "...";
  }
  
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);