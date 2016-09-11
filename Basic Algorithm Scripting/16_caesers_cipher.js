
function rot13(str) { // LBH QVQ VG!
    var charCodes = [];
    var reconstrucedString = [];

    for (var i in str) {
        charCodes.push(str.charCodeAt(i));
    }

    for (var i in charCodes) {
        if(charCodes[i] > 64 && charCodes[i] < 91) {
            if(charCodes[i] > 77) {
                charCodes[i] -= 13;
            } else {
                charCodes[i] += 13;
            }
        }
    }


    for (var i in charCodes) {
        var tempChar = String.fromCharCode(charCodes[i]);
        reconstrucedString.push(tempChar);
    }

    reconstrucedString = reconstrucedString.join("");

    return reconstrucedString;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");