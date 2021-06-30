// Each new term in the Fibonacci sequence is generated by adding the previous 
// two terms. By starting with 1 and 2, the first 10 terms will be:

// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

// By considering the terms in the Fibonacci sequence whose values do not 
// exceed four million, find the sum of the even-valued terms.

const evenFib = () => {
    let sum = 2;
    const evenFib = [1,2];
    let lastNum = evenFib[evenFib.length - 1],
        secondLastNum = evenFib[evenFib.length - 2];

    while(lastNum < 4000000) {
        const total = lastNum + secondLastNum;
        evenFib.push(total);
        if(total % 2 === 0) sum += total;
        secondLastNum = lastNum;
        lastNum = total;
    }
    return sum;
}
console.log(evenFib());



