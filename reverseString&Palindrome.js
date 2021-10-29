//reversing a string
function reverseString(string){
    let reversedString = [];
    for(let x=string.length-1; x>=0; x--){
        reversedString += string[x] ;
    }
    console.log('The reverse string is = '+reversedString);
    return reversedString;
}

//Finding if the string is palindrome or not
function testPanagram(string){
    if(reverseString(string)==string){
        console.log('This is a Palindrome');
        }else
        {
            console.log('This is not a palindrome');
            
        }
}

testPanagram('racecara');