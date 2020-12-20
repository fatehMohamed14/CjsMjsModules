loading = require("./commonjsModule");
console.log(loading());

async function loadEsmModule() {
  let m = await import("./esmModule.mjs");
  console.log(`${m.a}: Imported from esm module `);
}
loadEsmModule();