function myFunction(str) {
    var result = "";
    var freq = [];
    for(i=0;i<str.length;i++){
       let char = str[i];
       if(freq[char]) {
        freq[char]++; 
        console.log('first one '+freq[char]);
        console.log('second one '+freq[char]++);
       } else {
        freq[char] =1
        result = result+char;
       }
    }
    console.log('final '+result);
    return result;
  }

  myFunction('abcb');