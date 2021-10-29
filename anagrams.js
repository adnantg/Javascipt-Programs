// Finding anaagram where both the strings have exactly the same alphabets, can be rearranged to form the same word
function anagram(a,b){
    if (a.length != b.length){ //checking to see if the length of the strings is equal or not
        console.log('Please provide strings with same length')
    }else if (a.length == b.length){
    let str1 = a.split('').sort().join('');
    let str2 = b.split('').sort().join('');
    console.log(str1);
    console.log(str2);
    if(str1 === str2){
        console.log('True')
    }else{
        console.log('False')
    }
}
}

anagram('india', 'iinda');