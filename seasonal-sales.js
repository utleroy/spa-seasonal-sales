function executeThisCodeIfXHRFails () {
  console.log("An error occurred while transferring");
}
function executeThisCodeWhenChunksArrive () {
}
function executeThisCodeAfterFileLoaded () {
  var data = JSON.parse(this.response);
  var contentEl = document.getElementById("output-products")
  var productData = "<div class='container'>";
  var currentProduct;
  for (var i = 0; i < data.products.length; i++) {
    currentProduct = data.products[i]
    console.log(currentProduct)
    if (i%2 === 0) {
      productData += "<div class ='row'>"
    }
    productData += "<div class='col s12 m5"
    if (i%2 !== 0) {
      productData += " offset-m2"
    }
    productData += " card blue-grey darken-1 card-content white-text'>";
    productData += `<span class='card-title'>${currentProduct.name}</span>`;
    productData += `<p>${currentProduct.price}</p>`;

    productData += "</div>";

    if (i%2 !== 0) {
      productData += "</div>"
    }
  }
  productData += "</div>"
  contentEl.innerHTML = productData;
}
var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", executeThisCodeAfterFileLoaded); //Callback
myRequest.addEventListener("error", executeThisCodeIfXHRFails)
myRequest.addEventListener("progress", executeThisCodeWhenChunksArrive)
myRequest.open("GET", "products.JSON")
myRequest.send();


