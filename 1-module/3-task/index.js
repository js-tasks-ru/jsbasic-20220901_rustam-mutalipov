
function ucFirst(str) {
  if (str != "") { 
    let newSrt = str[0].toUpperCase() + str.substring(1); 
    return newSrt;
  } else {
    return "";
  }
  
}
ucFirst();

