import { parse } from './parser.js';
import Rom from './rom.js';
import Ram from './ram.js';
import CpuBus from './bus/cpu-bus.js';
import PpuBus from './bus/ppu-bus.js'
import Interrupts from './interrupts.js';
import Ppu from './ppu.js';
import Dma from './dma.js';
import Cpu from './cpu.js';


export class NES {
  load(nes) {
    console.log('nes');
    
    const { characterROM, programROM, isHorizontalMirror } = parse(nes);
    const ppuConfig = {
      isHorizontalMirror,
    };
    this.ram = new Ram(2048);
    this.characterMem = new Ram(0x4000);
    
    for (let i = 0; i < characterROM.length; i++) {
      this.characterMem.write(i, characterROM[i]);
    }
    this.programROM = new Rom(programROM);
    this.ppuBus = new PpuBus(this.characterMem);
    this.interrupts = new Interrupts();
    this.ppu = new Ppu(this.ppuBus, this.interrupts, ppuConfig);
    this.dma = new Dma(this.ram, this.ppu);
    //console.log(this.ppu);
    //console.log(this.dma);
    this.cupBus = new CpuBus(
      this.ram,
      this.programROM,
      this.ppu,
      this.dma
    );
    //console.log(this.cupBus);
    this.cpu = new Cpu(this.cupBus, this.interrupts);
    //console.log(this.cpu);
    this.cpu.reset();
    console.log(this.cpu);
  }
}
