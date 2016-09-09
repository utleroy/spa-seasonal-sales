var Original = (function(categoriesAndProducts) {
    var currentProduct;
    var currentCategories;
    var returnProducts=[]

  function loadProducts () {
    var data = JSON.parse(this.response);
    var contentEl = document.getElementById("output")
    var productData = "<div class='container'>";

    for (var i = 0; i < data.products.length; i++) {
      currentProduct = data.products[i]
      console.log(currentProduct)

      productData += "<div class ='row'>"
      productData += "<div class='col s12 m6"
      productData += " card blue-grey darken-1 card-content white-text'>";
      productData += `<span class='card-title'>${currentProduct.name}</span>`;
      productData += `<p>${currentProduct.price}</p>`;
      productData += `<p>${currentProduct.category_id}</p>`;
      productData += "</div>";
      productData += "</div>";
    }

    contentEl.innerHTML = productData;

  }

  function loadCategories () {
    var catData = JSON.parse(this.response);
    var categoriesEl = document.getElementById("output-categories")
    var categoriesData = "<div class='container'>";
    for (var j = 0; j < catData.categories.length; j++) {
      currentCategories = catData.categories[ j]
      console.log(currentCategories)

      categoriesData += "<ul class='collapsible' data-collapsible='accordion'>"
      categoriesData += "<li>"
      categoriesData += `<div class='collapsible-header'>${currentCategories.name}</div>`
      categoriesData += "<div class='collapsible-body'>"
      categoriesData += `<div class ='row'><div class='col s12 m4 offset-m1 card light-green card-content white-text'><span class='card-title'>${currentProduct.name}</span>;`
      categoriesData += `<p></p>`
      categoriesData += "</div></li></ul>";


      categoriesEl.innerHTML = categoriesData;

      $('.collapsible').collapsible({ //used to initialize after the "categoriesData" is dynamically added
    });

    }

    return categoriesAndProducts;
  }


  var myRequest = new XMLHttpRequest();
  myRequest.addEventListener("load", loadProducts);
  myRequest.open("GET", "products.JSON")
  myRequest.send();

  var secondRequest = new XMLHttpRequest();
  secondRequest.addEventListener("load", loadCategories);
  secondRequest.open("GET", "categories.JSON")
  secondRequest.send();



})(Original || {})