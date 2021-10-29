function sumArrays(array, number){
    let newArray = [];
    let updatedArray = [];
    for(let x= 0; x < array.length; x++){
        for(let i=0; i < array.length; i++){
            if(array[x] + array[i] === number){
            newArray.push(array[x], array[i]);           
            break;
            }
        }
    }
    console.log(newArray);
    for(let x=0; x < newArray.length; x++){
        if(updatedArray.indexOf(newArray[x]) < 0){
           updatedArray.push(newArray[x])
        }
    }    
    console.log(updatedArray);
    return updatedArray;
}

let array = [1,2,3,4,5];
sumArrays(array, 9);