
function chunkArrayInGroups(arr, size) {
    var numSubArrays = Math.ceil(arr.length / size);
    var chunkyArray = [];
    var subArrayIndex = 0;

    for (var i = 0; i < numSubArrays; i++) {
        chunkyArray.push([]);
    }

    for(var j in arr) {
        subArrayIndex = Math.floor(j / size);
        chunkyArray[subArrayIndex].push(arr[j]);
    }
    return chunkyArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);