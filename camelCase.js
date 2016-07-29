function camelCase(string) {
  let result = 1;
  if (!string.length){
    return;
  }
  for (let i = 0; i < string.length; i++){
    if (string.charCodeAt(i) > 64 && string.charCodeAt(i) < 91){
      result++;
    }
  }
  return result;
}

//camelCase("theOnlyJoyInTheWorldIsToBegin");