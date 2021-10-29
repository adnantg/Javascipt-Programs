//To find whether agiven number is a prime number or not
function primeNumber(number){
let isPrime = true;
if(number <= 0){
    console.log(' Please provide a valid number greater than 1')
} else if (number === 1){
    console.log('This is not a prime or composite number');
}else if(number > 1){
    for(let x=2;x<number;x++){
        if(number % x === 0){
            isPrime = false;
            break;
        }
    }
    if(isPrime){
        console.log(`${number} is a Prime number`);
    }else{
        console.log(`${number} is not a Prime Number`);
    }
}


}

primeNumber(4);