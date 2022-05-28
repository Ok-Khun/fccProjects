function titleCase(str) {
    let arr = str.split(" ").map(x => {
        let first = x[0].toUpperCase();
        let latter = x.slice(1)
        return first + latter
    })
    return arr.join(" ");
}
  
titleCase("I'm a little tea pot");