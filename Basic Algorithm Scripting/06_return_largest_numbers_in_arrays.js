
function largestOfFour(arr) {
    var largestArr = [];
    for(var i in arr) {
        var largest = 0;
        for (var j in arr[i]) {
            if(arr[i][j] > largest) {
                largest = arr[i][j];
            }
        }
        largestArr.push(largest);
    }
    return largestArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);