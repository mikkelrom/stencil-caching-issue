const hasha = require('hasha');

(async () => {
    // Get the MD5 hash of the stencil-test.js file and log it
    // const stencilTestHash = await hasha.fromFile('./stencil-test/www/build/stencil-test.js', {algorithm: 'md5'});
    //
    // console.log(`************************************************************`);
    // console.log(`stencil-test.js:      `, stencilTestHash);
    // console.log(`************************************************************`);

    // Get the MD5 hash of the stencil-test.js file and log it
    const entryHash = await hasha.fromFile('./stencil-test/www/build/p-8874d9b8.system.js', {algorithm: 'md5'});

    console.log(`************************************************************`);
    console.log(`p-8874d9b8.system.js: `, entryHash);
    console.log(`************************************************************`);
})();
