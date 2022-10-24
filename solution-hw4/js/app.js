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

let basePriceOfRoll;
let rollGlazing = "Keep Original" ;
let packSize = 1;

//first, create the query string from the Url, which will be the list of parameters
const queryString = window.location.search;

//then use the query string to crate a URLSearchParams Object
const params = new URLSearchParams(queryString);

// console.log(params)


//access the parameter we want using the get method
const rollType = params.get('rolls');
console.log(rollType)


//search through the dictionary to find the rolltype value that matches the parameter and update our page accordingly
for (let rollParams in rolls ){

    if (rollParams == rollType){
        //get the base price of that corresponding roll name and image file name
        basePriceOfRoll = rolls[rollType]["basePrice"];
        imageFileName = rolls[rollType]["imageFile"]
        //grab html container of price, image and title and update them
        const finalPriceElement = document.querySelector(".price-detail");
        finalPriceElement.innerText = "$ " + basePriceOfRoll;
        const rollImageElement = document.querySelector(".detail-image-cinnamon");
        rollImageElement.src = "assets/" + imageFileName;
        const detailPageTitleElement = document.querySelector(".title")
        detailPageTitleElement.innerText = rollParams+" Cinnamon Roll";

    }
}

/* ------------------------------------------------------------------------- */

//grab html container of glazing selection
const glazingSelectionElement = document.querySelector(".selector1 #glazing");

//get the propery names of the glazingOption object
const glazingOptionsArray = Object.keys(glazingOptions);

// loop through the array and append its nams and values to the dropdown
for (let names of glazingOptionsArray){
    //dropdownOption create the html element option
    
    const dropDownOption = document.createElement("option");
    dropDownOption.textContent = names;

    glazingSelectionElement.appendChild(dropDownOption);
    dropDownOption.setAttribute("value",glazingOptions[names]);
    
}

//grab html container of pack size selection
const pactSizeSelectionElement = document.querySelector(".selector2 #pack-size")

//get the property names of the object and store the array
const packSizeArray = Object.keys(packOptions);

//loop through the array and append its name and corresponding object values to the dropdown
for (let names of packSizeArray){
    //dropDownOptionForPack creates the html element option
    const dropDownOptionForPack = document.createElement("option");
    dropDownOptionForPack.textContent = names;
    pactSizeSelectionElement.appendChild(dropDownOptionForPack);
    dropDownOptionForPack.setAttribute("value",packOptions[names]);
}
 
//initial value of prices and price multipliers
let basePrice = basePriceOfRoll;
let finalPrice = 0;
let packPrice = 1;
let glazingPrice = 0;

// find what has been selected as glazing option and store the price change, and call the computePrice function to calculate the change
function glazingChange(element) {
    glazingPrice = element.value;
    rollGlazing = element.options[element.selectedIndex].text;
    computeFinalPrice()
}

// find what has been selected as pack option and store the price change, and call the computePrice function to calculate the change
function packSizeChange(element){
    packPrice = element.value;
    packSize = element.options[element.selectedIndex].text;
    console.log(packSize);
    computeFinalPrice()
}

// compute the change based on the selection and call the updateElement function to change HTML
function computeFinalPrice(){
    //price is (base price + glazingprice) * packprice
    finalPrice =  (Number(basePrice) +  Number(glazingPrice)) * Number(packPrice);
    updateElement(finalPrice);
}

// find the javascript element and update the price
function updateElement(finalPrice){
    const priceDiv = document.querySelector(".price-detail");
    priceDiv.innerText = "$ " + finalPrice.toFixed(2);
    
}

/* ------------------------------adding to cart array ------------------------------------------- */
class Roll {
    type;
    glazing;
    size;
    basePrice;

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
