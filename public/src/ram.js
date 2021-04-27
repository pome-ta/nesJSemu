export default class RAM {

  constructor(size) {
    this.ram = new Uint8Array(size);
    this.ram.fill(0);
  }

  reset() {
    this.ram.fill(0);
  }

  read(addr) {
    return this.ram[addr];
  }

  write(addr, data) {
    this.ram[addr] = data;
  }
}