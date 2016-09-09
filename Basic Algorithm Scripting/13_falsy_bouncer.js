function bouncer(arr) {
    arr = arr.filter(isTrue);
    console.log(arr);
    return arr;
}

function isTrue(value) {
    if (Boolean(value)) {
        return true;
    }
}

bouncer([7, 'ate', '', false, 9]);