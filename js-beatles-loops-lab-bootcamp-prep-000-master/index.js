function theBeatlesPlay (musicians, instruments){
  var bpArray = []
  for (let i = 0; i < musicians.length; i++){
    bpArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return bpArray
}

function johnLennonFacts(facts){
  let i = 0
  while ( i < facts.length ){
    facts[i] += '!!!'
    i++
  }
  return facts
  
}

function iLoveTheBeatles(number){
  let newArray = []
  if (number < 15){
    let i = 0;
    do {
     newArray.push("I love the Beatles!")
      i++
   } while ( i <= number )
   return newArray
  } else {
    return "I love the Beatles!"
  }
}