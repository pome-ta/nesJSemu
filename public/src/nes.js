import { parse } from './parser.js';
import Ram from './ram.js';

export class NES {
  load(nes) {
    console.log('nes');
    
    const { characterROM, programROM, isHorizontalMirror } = parse(nes);
    const ppuConfig = {
      isHorizontalMirror,
    };
    this.ram = new Ram(2048);
    this.characterMem = new Ram(0x4000);
    console.log(this.characterMem);
  }
}
