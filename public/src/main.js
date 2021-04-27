'use strict';

import { NES } from './nes.js';

fetch('../static/roms/nestest.nes')
    .then((res) => res.arrayBuffer())
    .then((nesFile) => {
      const nes = new NES();
      nes.load(nesFile);
    });
    //.then(data => console.log(data));

console.log('hoge');
