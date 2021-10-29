//To reverse a sentence for e.g. coding enjoying am I should display as I am enjoying coding
function reverseWords(word){
    let wordArray = word.split(" ");
    let arrayLength = wordArray.length;
    let reversedArray = [ ];
    for (let x=arrayLength-1; x>=0; x--){
      reversedArray.push(wordArray[x]);
    }
    let reversedWord = reversedArray.join(" ");
    console.log(reversedWord);
    return reversedWord;
}

reverseWords('coding enjoying am I');