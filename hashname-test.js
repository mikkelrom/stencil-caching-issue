const hasha = require('hasha');

(async () => {

    const filename = "p-d7513910.entry.js";

    // Get the MD5 hash of the stencil-test.js file and log it
    const entryHash = await hasha.fromFile(`./stencil-test/www/build/${filename}`, {algorithm: 'md5'}); // my-component.entry.js

    console.log(`************************************************************`);
    console.log(`${filename}: `, entryHash);
    console.log(`************************************************************`);
})();
