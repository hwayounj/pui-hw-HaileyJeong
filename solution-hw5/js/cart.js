//glazing options Object (object1)
const glazingOptions = {
    "Keep Original": 0,
    "Sugar Milk": 0,
    "Vanila Milk": 0.5,
    "Double Chocolate": 1.5
}

// pack options Object (object2)
const packOptions = {
    1 :  1,
    3 : 3,
    6 : 5,
    12: 10
}

class Roll {
    type;
    glazing;
    size;
    basePrice;
    calculatedPrice;
    element;

    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
        this.element = null;
    }
}

function saveInfo(){

    let myRoll = new Roll(rollType, rollGlazing, packSize, basePrice);
    cart.push(myRoll);
  

}
const rolls = {
    "Original": {
        "basePrice": 2.49,
        "imageFile": "original-cinnamon-roll.jpg"
    },
    "Apple": {
        "basePrice": 3.49,
        "imageFile": "apple-cinnamon-roll.jpg"
    },
    "Raisin": {
        "basePrice": 2.99,
        "imageFile": "raisin-cinnamon-roll.jpg"
    },
    "Walnut": {
        "basePrice": 3.49,
        "imageFile": "walnut-cinnamon-roll.jpg"
    },
    "Double-Chocolate": {
        "basePrice": 3.99,
        "imageFile": "double-chocolate-cinnamon-roll.jpg"
    },
    "Strawberry": {
        "basePrice": 3.99,
        "imageFile": "strawberry-cinnamon-roll.jpg"
    }    
};

const cart = new Set();
function addNewItem(rollType,rollGlazing,packSize,basePrice){
    const cartItem = new Roll(rollType, rollGlazing, packSize, basePrice);
    //calculate the final price of the roll to be put in the created object
    cartItem.calculatedPrice = ((Number(glazingOptions[rollGlazing])+Number(rolls[rollType]["basePrice"]))*Number(packOptions[packSize])).toFixed(2)
    cart.add(cartItem);
    return cartItem;
}

const cartItemOne = addNewItem("Original", "Sugar Milk", 1, 2.49)

const cartItemTwo = addNewItem("Walnut", "Vanila Milk", 12, 3.49)

const cartItemThree = addNewItem("Raisin", "Sugar Milk", 3, 2.99)

const cartItemFour = addNewItem("Apple", "Keep Original", 3, 3.49)



let totalPrice = 0;



for (const cartItem of cart){
    createElement(cartItem);
}



function createElement(cartItem){
    const template = document.querySelector('#cart-item-template')
    const clone = template.content.cloneNode(true);
    cartItem.element = clone.querySelector('.cart-item');
    cartHolderElement = document.querySelector('.cart-holders')
    cartHolderElement.prepend(cartItem.element);

    updateElement(cartItem);


}

function updateElement(cartItem){

     //remove 
     const btnDelete = cartItem.element.querySelector('.remove-text');
     btnDelete.addEventListener('click', () => {
         deleteItem(cartItem);
     });
     
    //image
    const cartImageElement = cartItem.element.querySelector('.cart-image');
    rollType = cartItem.type
    cartImageElement.src = "assets/"+rolls[rollType]["imageFile"];

    //name
    const cartTitleElement = cartItem.element.querySelector('.product-name');
    cartTitleElement.innerText = cartItem.type+" Cinnamon Roll";

    //glazing
    const cartGlazingElement = cartItem.element.querySelector('.product-glazing');
    cartGlazingElement.innerText = "Glazing: "+cartItem.glazing;

    //packsize
    const cartPackSizeElement = cartItem.element.querySelector('.product-packsize');
    cartPackSizeElement.innerText = "Pack Size: "+cartItem.size;


    //item "final" price
    const cartPriceElement = cartItem.element.querySelector('.price');
    cartPriceElement.innerText = "$"+cartItem.calculatedPrice;

    //totalprice

    const totalPriceElement = document.querySelector('#total-price');
    totalPrice = totalPrice + Number(cartItem.calculatedPrice);

    totalPriceElement.innerText = "$" + totalPrice;
}

//function that update total price when an item is removed from the cart
function updateTotalPrice(cartItem){
    totalPrice = (totalPrice - Number(cartItem.calculatedPrice)).toFixed(2);
    console.log(totalPrice);

    const totalPriceElement = document.querySelector('#total-price');
    totalPriceElement.innerText = "$" + totalPrice;
}

function deleteItem(cartItem){
    cartItem.element.remove();
    cart.delete(cartItem);
    console.log(cart)
    updateTotalPrice(cartItem);

}

