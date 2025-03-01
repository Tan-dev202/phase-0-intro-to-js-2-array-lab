var cats = ['Milo','Otis','Garfield']
function destructivelyAppendCat() {
    cats.push("Ralph");
    return cats;
 }
 
 function destructivelyPrependCat() {
   cats.unshift("Bob");
   return cats;
 }
 
 function destructivelyRemoveLastCat() {
   cats.pop();
   return cats
 }
 
 function destructivelyRemoveFirstCat() {
   cats.shift();
   return cats;
 }
 
 function appendCat(){
   var cats_1 = [...cats,"Broom"];
   return cats_1;
 }
 
 function prependCat() {
   var cats_2=["Arnold", ...cats];
   return cats_2
 }
 
 function removeLastCat() {
    return cats.slice(0, - 1);
 }
 
 function removeFirstCat() {
   return cats.slice(1);
 }