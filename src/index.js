
// You should implement your task here.

module.exports = function towelSort (matrix){
  if (matrix){
  let b = [];
  matrix.forEach((item, index) => {
      index % 2 !== 0 ? b = b.concat(item.reverse()) : b = b.concat(item);
  })
  return b;
  }else{
    return [];
  }
  
}
