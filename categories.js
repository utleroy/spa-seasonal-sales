var Original = (function(categories) {

function executeThisCodeIfXHRFails () {
  console.log("An error occurred while transferring");
}
function executeThisCodeWhenChunksArrive () {
}
function executeThisCodeAfterFileLoaded () {
  var data = JSON.parse(this.response);
  var contentEl = document.getElementById("output-categories")
  var caregoriesData = "<div class='container'>";
  var currentcaregories;
  for (var i = 0; i < data.caregoriess.length; i++) {
    currentcaregories = data.caregoriess[i]

    categoriesData += `<div class="cata">${currentcategories.name}</div>`
    console.log(currentcaregories)





  return categories
}
}(Original || {})