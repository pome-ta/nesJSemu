'use strict';

import { NES } from './nes.js';

// fetch('../static/roms/nestest.nes')
// fetch('../static/roms/giko013.nes')
// fetch('../static/roms/db_apu.nes')
fetch('../static/roms/volumes.nes')
// fetch('../static/roms/test01.nes')
    .then((res) => res.arrayBuffer())
    .then((nesFile) => {
      const nes = new NES();
      nes.load(nesFile);
      nes.start();
    });
    //.then(data => console.log(data));
//console.log('main');
