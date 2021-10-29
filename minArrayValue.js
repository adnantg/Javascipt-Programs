function minArayValue(array){
    let minArray = array[0];
    let arrayLength = array.length;
    for(x=1; x<arrayLength; x++){
        if(minArray > array[x]){
            minArray = array[x];
        }

    }
    console.log('the max number in the array is '+minArray);
    return minArray;
  

    
}

let arrayValue = ['1','2','3','4','5'];
minArayValue(arrayValue);