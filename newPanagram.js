//To find whether or not a given string is Pangram or not
function isPangram(string){
  let strArr = string.toLowerCase();
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  
  for (let i = 0; i < alphabet.length; i++) {
    if(strArr.indexOf(alphabet[i]) < 0){
      console.log('not a panagram');
      return false;
      break;
    }
  }
  console.log('This is a panagram');
  return true;
}

isPangram('The quick brown fox jumps over the lay dog.');