//// [tests/cases/compiler/declarationEmitDefaultExport7.ts] ////

//// [declarationEmitDefaultExport7.ts]
class A {}
export default new A();


//// [declarationEmitDefaultExport7.js]
class A {
}
export default new A();
