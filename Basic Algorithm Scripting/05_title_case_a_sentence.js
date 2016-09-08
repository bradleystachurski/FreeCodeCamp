
function titleCase(str) {
    str = str.toLowerCase();
    str = str.split(" ");
    for (var i in str) {
        var word = str[i].split("");
        word[0] = word[0].toUpperCase();
        word = word.join("");
        str[i] = word;
    }
    str = str.join(" ");
    return str;
}

titleCase("I'm a little tea pot");
