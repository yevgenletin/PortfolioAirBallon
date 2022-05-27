/**Run-length Encoding Algorithm in JavaScript
 * https://shevchenkonik.com/blog/rle
**/
var runLengthEncoding = function(str){
    console.log(str)
    var arr = Array.from(str);
    var arrRpl = [];
    var count = 0;
    var previous;
    for (i = 0; i<arr.length; i++){
      if (arr[i] == arr[i+1]){
        count++;
      }else{
        count++
        arrRpl.push(Array(count,arr[i]));
        count = 0;
      }
    }
    return  arrRpl// << fix this
  }
  