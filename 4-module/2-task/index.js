function makeDiagonalRed(table) {
  let i =0;
 for(let tab of table.querySelectorAll('tr')){
  tab.children[i].style.background="red";
  i++
 }
}
