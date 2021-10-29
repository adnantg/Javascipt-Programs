//Removing duplicate values in an array using forEach
function removeDuplicates(array){
    let newArray = [];

    array.forEach((item) => {
        if(newArray.indexOf(item) < 0){
            newArray.push(item);
        }
    })

    console.log(newArray);
    return newArray;
}

removeDuplicates([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8]);