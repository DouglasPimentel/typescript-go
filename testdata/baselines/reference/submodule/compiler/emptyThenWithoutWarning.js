//// [tests/cases/compiler/emptyThenWithoutWarning.ts] ////

//// [emptyThenWithoutWarning.ts]
let a = 4;

if(a === 1 || a === 2 || a === 3) {
}
else {
    let message = "Ooops";
}

//// [emptyThenWithoutWarning.js]
let a = 4;
if (a === 1 || a === 2 || a === 3) {
}
else {
    let message = "Ooops";
}
