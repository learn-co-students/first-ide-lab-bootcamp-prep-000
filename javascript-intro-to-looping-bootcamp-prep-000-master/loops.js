function forLoop(array){
  for(let i = 0; i < 25; i++){
   array.push(`I am ${i} strange loop${i === 0||i === 1 ? '' : 's'}.`) 
  }
  return array
}

function whileLoop(number){
  while (number > 0){
    console.log(--number)
  }
  return 'done'
}

function doWhileLoop(array){
  var i = array.length
  function incrementVariable() {
    i--;
  }
  do {
    array.pop()
    incrementVariable()
  } while (array.length > 0 && incrementVariable())
  return array
}