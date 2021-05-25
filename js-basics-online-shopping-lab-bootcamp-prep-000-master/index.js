var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  getCart().push({'itemName':item, 'itemPrice':Math.floor(Math.random()*100)})
  return `${item} has been added to your cart.`
}

function viewCart() {
  if(!getCart().length){
    return 'Your shopping cart is empty.'
  } else if ( getCart().length === 1){
    return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}.`
  }
  let cartArray = []  
  for ( let i = 0; i < getCart().length; i++){
    cartArray.push(`${getCart()[i].itemName} at $${getCart()[i].itemPrice}`)
    }
  let returnLine = 'In your cart, you have '
  for ( let j = 0; j < cartArray.length; j++){
    if ( j === cartArray.length-1){
      returnLine = returnLine + 'and ' + cartArray[j] + '.'
      return returnLine
    }
    returnLine = returnLine + cartArray[j] + ', '
  }
  return returnLine + '.'
}

function total() {
  let totalValue = 0;
  for ( let i = 0; i < cart.length; i++){
    totalValue += cart[i]['itemPrice']
  }
  return totalValue
}

function removeFromCart(item) {
  for ( let i = 0; i < getCart().length; i++){
    if ( getCart()[i].itemName === item){
      getCart().splice(i, 1)
      return getCart()
    }
  }
  return 'That item is not in your cart.'
}

function placeOrder(cardNumber) {
  if (!cardNumber){
    return `Sorry, we don't have a credit card on file for you.`
  }
  let totalValue = total()
  cart = []
  return `Your total cost is $${totalValue}, which will be charged to the card ${cardNumber}.`
}
