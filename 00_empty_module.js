let file = new Buffer('\u0000asm\u0001\u0000\u0000\u0000\u0001\u0001\u0000')
let wasm = new WebAssembly.Module(file);
console.log(wasm)
// => Module {}
