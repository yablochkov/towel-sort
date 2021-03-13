
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr2 = matrix.map(function(item,index){
    if (!item) {
      return [];
    } else if (index%2 === 0){
    return item;
    } else {
     return item.reverse();
    } 
 
 });
 return arr2.flat();
   
}
