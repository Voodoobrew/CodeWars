function validParentheses(parens){
  let count = 0;
  for(var i = 0; i < parens.length; i++){
    if(parens[0] !== "(")return false;
    else if(parens[i] === "(")count++;
    else count--
    if(count < 0) return false;
  }
  return count === 0;
}
