'use strict';

import { NES } from './nes.js';


// const ROMDATA = 'test01';
//const ROMDATA = 'giko013';
//const ROMDATA = 'giko017';
// const ROMDATA = 'nestest';
const ROMDATA = 'lj65';

const nes_path = new URL(`static/roms/${ROMDATA}.nes`, location.protocol + '//' + location.host + location.pathname).href

fetch(nes_path)
  .then((res) => res.arrayBuffer())
  .then((nesFile) => {
    const nes = new NES();
    nes.load(nesFile);
    nes.start();
  });
