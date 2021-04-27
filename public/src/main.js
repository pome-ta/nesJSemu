'use strict';


fetch('../static/roms/nestest.nes')
    .then((res) => res.arrayBuffer())
    .then(data => console.log(data));

console.log('hoge');