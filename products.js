var Original = (function(productMaker) {

  function executeThisCodeAfterFileLoaded () {
    var data = JSON.parse(this.response);
    var contentEl = document.getElementById("output")
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

    return productMaker;
  }
  var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", executeThisCodeAfterFileLoaded); //Callback
myRequest.open("GET", "products.JSON")
myRequest.send();


})(Original || {});
