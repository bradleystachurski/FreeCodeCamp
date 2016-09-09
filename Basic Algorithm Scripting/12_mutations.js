
function mutation(arr) {
    arr[0] = arr[0].toLowerCase();
    arr[1] = arr[1].toLowerCase();
    var searchArray = arr[1].split("");
    for(var i in searchArray) {
        if(arr[0].indexOf(arr[1][i]) == -1) {
            return false;
        }
    }
    return true;
}

mutation(["hello", "hey"]);