function removingDuplicates(array){
    updatedArray = [];
    for(let x=0; x < array.length; x++){
        if (updatedArray.indexOf(array[x]) < 0){
            updatedArray.push(array[x]);
        }
    }
    console.log(updatedArray);
    return updatedArray
}
const array = [1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8];
removingDuplicates(array);