function takeANumber (people, name){
  people.push(name)
  return `Welcome, ${name}. You are number ${people.length} in line.`
}

function nowServing (people){
  // people.length !== 0
  if(people.length){ 
    return `Currently serving ${people.shift()}.` 
  } else {
    return "There is nobody waiting to be served!"
  }

}

function currentLine(people){
//  var returnLine = 'The line is currently: '
//  if (people.length){
//    for (let i = 0; i < people.length; i++){
//      returnLine += `${i+1}. ${people[i]}`
//      if ( i != people.length -1 ){
//        returnLine += ', '
//      }
//    }
//    return returnLine
  const returnLine = []
  if (people.length){
    for (let i = 0; i < people.length; i++){
      returnLine.push(`${i + 1}. ${people[i]}`)
    }
    return `The line is currently: ${returnLine.join(', ')}`
  } else {
    return "The line is currently empty."
  }
  
}