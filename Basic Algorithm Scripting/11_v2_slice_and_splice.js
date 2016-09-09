
function frankenSplice(arr1, arr2, n) {
    var frankenArray = arr2.slice();
    for(var i in arr1) {
        frankenArray.splice(Number(n) + Number(i), 0, arr1[i]);
    }
    return frankenArray;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
