function palindrome(str) {
  let strAN = str.replace(/[^0-9a-zA-Z]/g, '').toUpperCase();
  let N = strAN.length;
  for(let i=0; i < N; ++i){
    if(strAN[i] != strAN[N - 1 - i]){
      return false;
    }
  }
  return true;
}
