var primes = [];

function isPrime(number) {
    if (number <= 3) {
        return number > 1;
    }

    else if (number % 2 == 0 || number % 3 == 0) {
        return false;
    }

    for (var i = 2; i < Math.floor(Math.sqrt(number)) + 1; i++) {
        if(number % i == 0){
            return false;
        }
    }

    return true;
}

for (i = 2; i < 20; i++) {
    if (isPrime(i)) {
        primes.push(i);
    }
}

alert(primes);