'use strict';

function AppState() {
  this.allProducts = [];
}

AppState.prototype.instantiateProducts = function () {

  const productNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'water-can', 'wine-glass'];

  for (let i = 0; i < productNames.length; i++) {
    if (productNames[i] === 'sweep') {
      this.allProducts.push(new Product(productNames[i], 'png'))
    } else {
      this.allProducts.push(new Product(productNames[i]))
    }
  }

}

AppState.prototype.saveToLocalStorage = function () {
  // TODO: Fill in this instance method to save product data to local storage
  let toSaveProducts = JSON.stringify(state);
  localStorage.setItem("savedProducts", toSaveProducts);
}

AppState.prototype.loadItems = function () {

  // TODO: Update this instance method to retrieve data from local storage instead of creating new Products on each page load
  const loadProducts = JSON.parse(localStorage.getItem("savedProducts"));

  this.instantiateProducts();
  if(loadProducts){
    console.log("go");
    for(let i = 0; i < loadProducts.allProducts.length; i++) {
      this.allProducts[i].timesClicked += loadProducts.allProducts[i].timesClicked;
      this.allProducts[i].timesShown += loadProducts.allProducts[i].timesShown;
    }
  }
}


function Product(name, fileExtension = 'jpg') {
  this.name = name;
  this.source = `assets/${name}.${fileExtension}`;
  this.timesClicked = 0;
  this.timesShown = 0;
}
