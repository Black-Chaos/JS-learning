let max = 100;
let min = 10;
let dMin = max;
let dMax = min;
function random(x) {
    if (!x) {
        return Math.round(Math.random() * (max - min)) + min;
    }
    const rNum = random(x - 1);
    if (rNum > dMax) {
        dMax = rNum
    }
    if (rNum < dMin) {
        dMin = rNum
    }
    // console.log(rNum);
    // console.log(dMax, dMin);
    return Math.round(Math.random() * (max - min)) + min;
}
random(1000);
console.log(dMax, dMin);