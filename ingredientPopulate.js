/*Creates checkboxes for each ingredient*/

//Called when the page loads
/*
$(document).ready(function() {
  let masterIngredients = ["Flour", "Baking Soda", "Sugar", "Carrots", "Broccoli", "Milk", "Eggs"];

  var container = $("#ingredientCheckboxList");

  //Creates a checkbox for each item in the array
  masterIngredients.forEach(function(item, index, array) {
    //$("<li />").appendTo(container);
    $("<input />", {type: "checkbox", id: "cb" + index, value: item}).appendTo(container);
    $("<label />", {for: "cb" + index, text: item}).appendTo(container);
  });
});
*/