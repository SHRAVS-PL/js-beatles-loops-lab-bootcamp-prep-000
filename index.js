function theBeatlesPlay(musicians,inst){
  var array = []
  for(var a = 0; a< musicians.length ;a++) {
     var str = musicians[a] + " plays " + inst[a]
        array.push(str)
 }
    return array

  }
  
function johnLennonFacts(facts) {
 var i;
 var arr
  while(i<facts.length) {
    arr.push(facts[i] + "!!!")
  }
  return arr
}
