
function findLongestWord(str) {
    var longest = 0;
    str = str.split(" ");
    for (var i in str) {
        if(str[i].length > longest) {
            longest = str[i].length;
        }
    }
    return longest;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
