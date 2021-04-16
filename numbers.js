const roundDown = (number, decimal = 2) => {
    let multi = parseInt("1".padEnd(decimal + 1, "0"));
    let rounded = Math.floor(number * multi) / multi;
    return rounded;
}
const roundUp = (number, decimal = 2) => {
    let multi = parseInt("1".padEnd(decimal + 1, "0"));
    let rounded = Math.ceil(number * multi) / multi;
    return rounded;
}
exports.roundDown = roundDown;
exports.roundUp   = roundUp;