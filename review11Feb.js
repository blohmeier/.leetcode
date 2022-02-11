//output the first 50 prime numbers
function primeFinder (n) {
    if (n === 1) {
        return true;
    } else if (n === 0) {
        return false;
    } else {
        for (let x = 2; x < n; x++) {
            if (n % x === 0) {
                return false;
            }
        }
        return true;
    }
}
function primeGenerator () {
    for (let i = 1, k = 1; k <=50; i++) {
        if (primeFinder(i)) {
            console.log("prime number " + k + " is " + i)
            k++;
        }
    }
}
primeGenerator ();