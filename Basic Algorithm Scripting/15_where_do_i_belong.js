
function getIndexToIns(arr, num) {
    var index = 0;

    arr = arr.sort(compareNumbers);

    for (var i = 0; i < arr.length; i++) {
        if(arr[i] < num) {
            index += 1;
        }
    }

    return index;

}

function compareNumbers(a, b) {
    return a - b;
}

getIndexToIns([40, 60], 50);