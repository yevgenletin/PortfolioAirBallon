function spinWords(string){
  
    var arrSplit = string.split(" ")
    var arr = []
      for(var i = 0 in arrSplit){
        joinArray = arrSplit[i]
          if(arrSplit[i].length>=5){
              arr.push(reverseString(arrSplit[i]))
            }else{
            arr.push(arrSplit[i])
          }
        }
    var arrString = arr.toString().replace(/,/g, " ")
    
    return arrString
    }
  
  function reverseString(str){
        var splitString = str.split('')
        var reverseArray = splitString.reverse()
        joinArray = reverseArray.join("")
    return joinArray
  }
    //TODO Have fun :)
/*
    function spinWords(string){
        return string.replace(/\w{5,}/g, function(w) { return w.split('').reverse().join('') })

*/
      }