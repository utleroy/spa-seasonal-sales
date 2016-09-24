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
  for (var i = 0; i < data.products.length; i++) {
    currentProduct = data.products[i]
  }


}

function loadCategories () {
  catData = JSON.parse(this.response);
  var categoriesEl = document.getElementById("output-categories")
  var categoriesData = "<div class='container'>";
  for (var j = 0; j < catData.categories.length; j++) {

    currentCategories = catData.categories[j];
    
    categoriesData += "<div class='row'><span class='col m6'>"
    categoriesData += "<ul class='collapsible' data-collapsible='accordion'>";
    categoriesData += "<li>";
    categoriesData += `<div class='collapsible-header'>${currentCategories.name}</div>`;
    categoriesData += "<div class='collapsible-body'>";
    for(var i = 0; i < data.products.length; i++) {

      if (data.products[i].category_id === 1 && currentCategories.name === "Apparel") {
    //     categoriesData +=`<div class="chip lime darken-4">`
        categoriesData +=`<span class="chip lime darken-4">${data.products[i].name}${data.products[i].price}</span>`
    //     categoriesData +=`${data.products[i].price}`
    //     categoriesData +=`</div>`
}
       if (data.products[i].category_id === 2 && currentCategories.name === "Furniture") {
    //     categoriesData +=`<div class="chip lime darken-4">`
        categoriesData +=`<span class="chip lime darken-4">${data.products[i].name}${data.products[i].price}</span>`
    //     categoriesData +=`<div id="price-text">`
    //     categoriesData +=`${data.products[i].price}`
    //     categoriesData +=`</div>`

    //   } if (data.products[i].category_id === 3) {
    //     categoriesData +=`<div class="chip lime darken-4">`
    //     categoriesData +=`${data.products[i].name}`
    //     categoriesData +=`<div id="price-text">`
    //     categoriesData +=`${data.products[i].price}`
    //     categoriesData +=`</div>`
      } if (data.products[i].category_id === 3 && currentCategories.name === "Household") {
        categoriesData +=`<span class="chip lime darken-4">${data.products[i].name}${data.products[i].price}</span>`
}

    }
      categoriesData += `</div></li></ul></div>`;



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