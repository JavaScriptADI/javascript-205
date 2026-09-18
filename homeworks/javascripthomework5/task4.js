const cart = ['milk', 'bread'];
function addItem(cartArray, item) {
    cartArray.push(item);
}
console.log('before addItem:', cart);

function withItem(cartArray, item) {
    return [...cartArray, item]
}
addItem(cart, 'eggs')
console.log('after addItem:', cart);
console.log('before withItem:', cart);
const newCart = withItem(cart, 'cheese');
console.log('returned by withitem:', newCart);
console.log('after withitem:', cart);

