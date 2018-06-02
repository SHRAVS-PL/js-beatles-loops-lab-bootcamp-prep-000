function theBeatlesPlay(musicians,inst){
  var array = []
  for(var a = 0; a< musicians.length ;a++) {
     var str = musicians[a] + " plays " + inst[a]
        array.push(str)
 }
    return array

  }
