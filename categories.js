var Original = (function(categories) {

  function executeThisCodeIfXHRFails () {
    console.log("An error occurred while transferring");
  }
  function executeThisCodeWhenChunksArrive () {
  }
  function executeThisCodeAfterFileLoaded () {
    var catData = JSON.parse(this.response);
    var categoriesEl = document.getElementById("output-categories")
    var categoriesData = "<div class='container'>";
    var currentCategories;
    for (var i = 0; i < catData.categories.length; i++) {
      currentCategories = catData.categories[i]
      console.log(currentCategories)

      categoriesData += `<ul class='collapsible' data-collapsible='accordion'><li><div class='collapsible-header'>${currentCategories.name}</div><div class='collapsible-body'><p></p></div></li></ul>`;
      // categoriesData += "</ul>";

      categoriesEl.innerHTML = categoriesData;
      $('.collapsible').collapsible({
    });
    }
    return categories;
  }

  var secondRequest = new XMLHttpRequest();
secondRequest.addEventListener("load", executeThisCodeAfterFileLoaded); //Callback
secondRequest.open("GET", "categories.JSON")
secondRequest.send();

})(Original || {})