function executeThisCodeIfXHRFails () {
  console.log("An error occurred while transferring");
}

function executeThisCodeWhenChunksArrive () {
}

function executeThisCodeAfterFileLoaded () {
  var data = JSON.parse(this.response);
  var contentEl = document.getElementById("output-products")
  var productData = "";
  var currentProduct;

  for (var i = 0; i < data.products.length; i++) {
    currentProduct = data.products[i]
    console.log(currentProduct)


    productData += "<div id='product-contain'>";
    productData += `<h6>${currentProduct.name}</h6>`;
    productData += "</div>";

  }
  contentEl.innerHTML = productData;
}


var myRequest = new XMLHttpRequest();

myRequest.addEventListener("load", executeThisCodeAfterFileLoaded); //Callback
myRequest.addEventListener("error", executeThisCodeIfXHRFails)
myRequest.addEventListener("progress", executeThisCodeWhenChunksArrive)
myRequest.open("GET", "products.JSON")
myRequest.send();


