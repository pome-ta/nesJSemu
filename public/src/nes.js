import { parse } from './parser.js';
//import Rom from './rom.js';
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
    console.log(characterROM.length);
    let hoge = 0;
    for (let i = 0; i < characterROM.length; i++) {
      hoge += i;
      this.characterMem.write(i, characterROM[i]);
    }
    //console.log(hoge);
    this.characterMem.write(0, 1);
    console.log(this.characterMem);
    console.log(characterROM[2]);
    // copy charactorROM to internal RAM
    /*
    for (let i = 0; i < characterROM.length; i++) {
      this.characterMem.write(i, characterROM[i]);
    }
    //this.programROM = new Rom(programROM);
    console.log({this.characterMem});*/
    
  }
}
