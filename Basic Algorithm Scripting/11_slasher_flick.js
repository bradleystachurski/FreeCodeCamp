
function slasher(arr, howMany) {
    arr = arr.splice(howMany);
    return arr;
}

slasher([1, 2, 3], 2);
