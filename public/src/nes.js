import { parse } from './parser.js';

export class NES {
  load(nes) {
    console.log('nes2');
    const p = parse(nes);
    console.log({p});
    //const { characterROM, programROM, isHorizontalMirror } = parse(nes);
  }
}
