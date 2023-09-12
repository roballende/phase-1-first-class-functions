function receivesAFunction(callback) {
    return callback()
}

function returnsANamedFunction() {
    return function namedFunction() {
        console.log("correct?");
    }
}

function returnsAnAnonymousFunction() {
    return () => console.log("am i anonymous?")
}