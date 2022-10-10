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

/* ------------------------------------------------------------------------- */
let cart = [];
/* ------------------------------------------------------------------------- */
class Roll {
    type;
    glazing;
    size;
    basePrice;
    calculatedPrice;

    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

function saveInfo(){

    let myRoll = new Roll(rollType, rollGlazing, packSize, basePrice);
    cart.push(myRoll);
  
    console.log(cart);

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

let itemOne = new Roll("Original", "Sugar Milk", 1, 2.49);
itemOne.calculatedPrice = ((glazingOptions["Sugar Milk"]+rolls["Original"]["basePrice"])*packOptions[1]).toFixed(2);

cart.push(itemOne);

let itemTwo = new Roll("Walnut", "Vanila Milk", 12, 3.49);
itemTwo.calculatedPrice = ((glazingOptions["Vanila Milk"]+rolls["Walnut"]["basePrice"])*packOptions[12]).toFixed(2);

cart.push(itemTwo);

let itemThree =  new Roll("Raisin", "Sugar Milk", 3, 2.99);
itemThree.calculatedPrice = ((glazingOptions["Sugar Milk"]+rolls["Raisin"]["basePrice"])*packOptions[3]).toFixed(2);

cart.push(itemThree)

let itemFour =  new Roll("Apple", "Original", 3, 3.49);
itemFour.calculatedPrice = Number((glazingOptions["Keep Original"]+rolls["Apple"]["basePrice"])*packOptions[3]).toFixed(2);


cart.push(itemFour)
