var masterIngredients = [
  {name:"Carrots", selected:false, pictureURL:"https://cdn.glitch.com/9a64c9c5-0c14-404a-9260-d1d73f22baa5%2Fcarrot.jfif?v=1611432778646"},
  {name:"Broccoli", selected:false, pictureURL:"https://cdn.glitch.com/9a64c9c5-0c14-404a-9260-d1d73f22baa5%2Fbroccoli.jfif?v=1611458702923"},
  {name:"Milk", selected:false, pictureURL:"https://cdn.glitch.com/9a64c9c5-0c14-404a-9260-d1d73f22baa5%2Fmilk.jfif?v=1611458772039"},
  {name:"Cheese", selected:false, pictureURL: "https://cdn.glitch.com/9a64c9c5-0c14-404a-9260-d1d73f22baa5%2FSwiss-Cheese.jpg?v=1611447531484"},
  {name:"Eggs", selected:false, pictureURL:"https://cdn.glitch.com/9a64c9c5-0c14-404a-9260-d1d73f22baa5%2Feggs.jfif?v=1611458914332"},
  {name:"Gummy bears", selected:false, pictureURL:"https://cdn.glitch.com/9a64c9c5-0c14-404a-9260-d1d73f22baa5%2Fgummy%20bear.jfif?v=1611461377022"}
]

//Everytime the user lifts a key, this function is called
function searchFor() {
  //Obtains what the user searched for
  var searchTerm = $('form').serializeArray()[0].value.toLowerCase();
  //Exits the function if the search term is nothing
  if(searchTerm == "") {
    let container = $("#ingredientDisplay");
    container.html($(""));
    return;
  }
  let itemsToDisplay = [];
  for(let i = 0; i < masterIngredients.length; i++) {
    if(masterIngredients[i].name.toLowerCase().includes(searchTerm) && masterIngredients[i].selected==false) {
      itemsToDisplay.push(i);
    }
  }
  displayIngredients(itemsToDisplay);
}

function displayIngredients(arrayToDisplay) {
  let container = $("#ingredientDisplay");
  container.html($(""));
  arrayToDisplay.forEach(function(value, index, array) {
    container.append($("<input>", {type: "checkbox", id: "cb" + value, value: masterIngredients[value].name, onclick:"masterIngredients.find(element => element.name == value).selected=true;updatePickedIngredients()"})).append(
      $("<label>", {for: "cb" + value}).append(
      $("<li />", {style:"background-image:url(" + masterIngredients[value].pictureURL + ")"})/*.append(
      $("<h3>", {text:masterIngredients[value].name}))*/
    ));
  });
}

function updatePickedIngredients() {
  let container = $("#pickedIngredients");
  container.html($(""));
  masterIngredients.forEach(function(value, index, array) {
    if(value.selected==true) {
      $("<img>", {style:"width:100px", src:value.pictureURL}).appendTo(container)
    }
  });
}