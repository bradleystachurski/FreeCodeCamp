
function destroyer(arr) {
    var searchArray = [];

    for (var i = 1; i < arguments.length; i++) {
        searchArray.push(arguments[i]);
    }

    arr = arr.filter(filterArray);

    return arr;

    function filterArray(value) {
        if(searchArray.indexOf(value) < 0) {
            return true;
        }
    }
}



destroyer([1, 2, 3, 1, 2, 3], 2, 3);
