/*
 * This script updates the build to allow routing.
 * Github pages does not automatically allow routing so this hacks it by using the 404 page as our router.
**/

const fs = require('fs');

fs.copyFile('docs/index.html', 'docs/404.html', (err) => {
    if (err) {
        console.error('index.html -> 404.html copy failed:');
        throw err;
    }
});
