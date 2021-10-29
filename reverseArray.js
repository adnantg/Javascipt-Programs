function reverseArray(array) {
   let arrayLength = array.length;
   let reversedArray = [];
   for(let x = arrayLength-1; x>=0; x--){
       reversedArray.push(array[x]);
       
   }
   console.log(reversedArray);
   return reversedArray;
}
let array1 = ['1','2','3','4'];
reverseArray(['1','2','3','4']);