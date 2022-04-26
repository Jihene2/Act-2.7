
var shoppingList = new Array();
shoppingList = [''];
for (var i = 0; i < shoppingList.length; i++) {
  shoppingList[i] = shoppingList[i].toUpperCase();
}

function addItem() {
  var item = prompt("Ajoutez un élément");
  item = item.toUpperCase();
  shoppingList.push(item);

}

function showList() {
  displayList();

}

function displayList() {
  console.clear();
  var divSuperList = document.getElementById('superList');
  console.log(shoppingList);

}
