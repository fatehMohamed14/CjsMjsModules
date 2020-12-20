data1 = require("./commonjsModule");
console.log(data1());

async function loadEsmModule() {
  let m = await import("./esmModule.mjs");
  console.log(`${m.a}: imported from esm module `);
}
loadEsmModule();