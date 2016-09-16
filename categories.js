var Original = (function(categoriesAndProducts) {
    var currentProduct;
    var currentCategories;
    var season;
    var data = [];
    var catData = [];
    var categorized = [];


// function to load the products from the json file. The loadProducts() is called in the XHR call "var myRequest"


  function loadProducts () {
    data = JSON.parse(this.response);
    var contentEl = document.getElementById("output");
    var productData = "<div class='container'>";

    for (var i = 0; i < data.products.length; i++) {
      currentProduct = data.products[i]
    console.log(currentProduct.price)
    }


  }

  function loadCategories () {
    catData = JSON.parse(this.response);
    var categoriesEl = document.getElementById("output-categories")
    var categoriesData = "<div class='container'>";
    for (var j = 0; j < catData.categories.length; j++) {
      currentCategories = catData.categories[j];

      categoriesData += "<div class='row'><div class='col m4'>"
      categoriesData += "<ul class='collapsible' data-collapsible='accordion'>";
      categoriesData += "<li>";
      categoriesData += `<div class='collapsible-header'>${currentCategories.name}</div>`;
      categoriesData += "<div class='collapsible-body'>";
      for(var i = 0; i < data.products.length; i++) {

        categoriesData +=`<div class="chip lime darken-4">`
        categoriesData +=`<i class="tiny material-icons" width="200px">label`
        categoriesData +=`</i>`
        categoriesData +=`${data.products[i].name}`
        categoriesData +=`</div>`
        categoriesData +=`<div id="price-text">Price:`
        categoriesData +=`${data.products[i].price}`
        categoriesData +=`</div>`
        for (var i = 0; i < categoriesData.length; i++) {
          var categorized = categoriesData[i].price;
      console.log(categorized)
        }
        if (data.products.category_id === 1) {
          categorized += '<div>${category_id}</div>'
          console.log(categorized)
    }
      }


      categoriesData += `<p></p>`;
      categoriesData += "</div></li></ul></div></div";

      categoriesEl.innerHTML = categoriesData;

      $('.collapsible').collapsible({ //used to initialize after the "categoriesData" is dynamically added
    });

    }
    console.log(catData);
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