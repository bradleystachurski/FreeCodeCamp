
function palindrome(str) {
    str = str.replace(/[^a-z0-9]+/gi,"").toLowerCase();
    var reverse = str.split("").reverse().join("");
    console.log(reverse);
    console.log(str);

    if (reverse == str) {
        return true;
    } else {
        return false;
    }
}



palindrome("eye");