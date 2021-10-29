//To display the fibonacci series of a gives number
function fibonacci(number){
    if(number <= 1){
        console.log('Please provide a number greater than 1');
    } else {
    let series = [0, 1];
    let sum = 0;
    for(let x = 1; x <= number-2; x++){
        sum = series[x-1] + series[x];
        series.push(sum);
    }
    console.log(series);
}

}

fibonacci(2);

//Expected output  0, 1, 1, 2, 3, 5, 8, 13 and so forth