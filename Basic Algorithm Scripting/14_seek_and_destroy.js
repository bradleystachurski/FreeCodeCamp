
function destroyer(arr) {
    var filters = [];
    for(var i = 1; i < arguments.length; i++) {
        filters.push(arguments[i]);
    }
    console.log(filters);
    for(var j in arr) {
        console.log(filters.indexOf(arr[j]));
    }
    arr.filter(getRidOfIt);
    console.log(arr);
    return arr;
}

function getRidOfIt(value) {
    if(value != 2) {
        return true;
    }
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
