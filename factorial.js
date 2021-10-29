function factorial(number){
    let fact = 1;
    for(let x=2; x<=number; x++){
        fact *= x;
    }
    console.log(fact);
    return fact;
}

factorial(8);