var Original = (function(categoriesAndProducts) {
    var currentProduct;
    var currentCategories;
    var data = [];

  function loadProducts () {
    data = JSON.parse(this.response);
    var contentEl = document.getElementById("output");
    var productData = "<div class='container'>";

    for (var i = 0; i < data.products.length; i++) {
      currentProduct = data.products[i]
      console.log(currentProduct)
    }

  }

  function loadCategories () {
    var catData = JSON.parse(this.response);
    var categoriesEl = document.getElementById("output-categories")
    var categoriesData = "<div class='container'>";
    for (var j = 0; j < catData.categories.length; j++) {
      currentCategories = catData.categories[j];


      categoriesData += "<ul class='collapsible' data-collapsible='accordion'>";
      categoriesData += "<li>";
      categoriesData += `<div class='collapsible-header'>${currentCategories.name}</div>`;
      categoriesData += "<div class='collapsible-body'>";
      for(var i = 0; i < data.products.length; i++) {
        categoriesData += `<div class="chip lime">${data.products[i].name}</div><div>Price ${data.products[i].price}</div>`;
      }
      categoriesData += `<p></p>`;
      categoriesData += "</div></li></ul>";

      categoriesEl.innerHTML = categoriesData;

      $('.collapsible').collapsible({ //used to initialize after the "categoriesData" is dynamically added
    });

    }
    console.log(data);
    return categoriesAndProducts;
  }




  var myRequest = new XMLHttpRequest();
  myRequest.addEventListener("load", loadProducts);
  myRequest.open("GET", "products.JSON");
  myRequest.send();

  var secondRequest = new XMLHttpRequest();
  secondRequest.addEventListener("load", loadCategories);
  secondRequest.open("GET", "categories.JSON");
  secondRequest.send();



})(Original || {})