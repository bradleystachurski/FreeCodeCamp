var sum = 0;

for(var i = 2; i < process.argv.length; i++) {
    var currentNum = +process.argv[i];
    sum += currentNum;
}

console.log(sum);