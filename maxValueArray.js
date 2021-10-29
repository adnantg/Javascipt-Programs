//
    function maxArayValue(array){
    let maxArray = array[0];
    let arrayLength = array.length;
    for(x=1; x<arrayLength; x++){
        if(maxArray < array[x]){
            maxArray = array[x];
        }

    }
    console.log('the max number in the array is '+maxArray);
    return maxArray;
  

    
}

let arrayValue = ['1117','2','3','4','5', 'z', 'a'];
maxArayValue(arrayValue);