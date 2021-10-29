//Another approach for finding Anagram, breaking as soon as an alphabet is not found
function panagaram(string) {

    alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let lowerString = string.toLowerCase();

    for(let x = 0; x < alphabet.length; x++){
        if (lowerString.indexOf(alphabet[x]) < 0){
            console.log('This is not a panagram as '+alphabet[x]+' is missing');
            return false;
            break;
        }
        
    }
    console.log('This is a panagram');
    return true;

}

panagaram('The quick brown fox jumps over the lay dog');