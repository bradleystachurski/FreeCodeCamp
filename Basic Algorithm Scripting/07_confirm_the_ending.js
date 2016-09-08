
function confirmEnding(str, target) {
    ending = str.substring(str.length - target.length);
    if(ending == target) {
        return true;
    } else {
        return false;
    }
}

confirmEnding("Bastian", "n");