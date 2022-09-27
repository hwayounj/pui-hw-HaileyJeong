//glazing options Object (object1)
const glazingOptions = {
    "Keep Original": 0,
    "Sugar Milk": 0,
    "Vanila Milk": 0.5,
    "Double Chocolate": 1.5
}

// pack options Object (object2)
const packSize = {
    1 :  1,
    3 : 3,
    6 : 5,
    12: 10
}

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
const packSizeArray = Object.keys(packSize);

//loop through the array and append its name and corresponding object values to the dropdown
for (let names of packSizeArray){
    //dropDownOptionForPack creates the html element option
    const dropDownOptionForPack = document.createElement("option");
    dropDownOptionForPack.textContent = names;
    pactSizeSelectionElement.appendChild(dropDownOptionForPack);
    dropDownOptionForPack.setAttribute("value",packSize[names]);
}
 
//initial value of prices and price multipliers
const basePrice = 2.49;
let finalPrice = 0;
let packPrice = 1;
let glazingPrice = 0;

// find what has been selected as glazing option and store the price change, and call the computePrice function to calculate the change
function glazingChange(element) {
    glazingPrice = element.value;
    computeFinalPrice()
}

// find what has been selected as pack option and store the price change, and call the computePrice function to calculate the change
function packSizeChange(element){
    packPrice = element.value;
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
