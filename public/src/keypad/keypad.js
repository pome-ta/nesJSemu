import KeyEvents from './key-events.js';


export default class Keypad {

  constructor() {
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.keyEvents = new KeyEvents();
    this.keyEvents.setup(this.onKeyDown, this.onKeyUp);
    this.isSet = false;
    this.index = 0;
    this.keyBuffer = [];
    this.keyRegistors = [];
  }

  onKeyDown(index) {
    if (typeof index !== 'number') return;
    this.keyBuffer[index] = true;
  }

  onKeyUp(index) {
    if (typeof index !== 'number') return;
    this.keyBuffer[index] = false;
  }

  write(data) {
    if (data & 0x01) {
      this.isSet = true;
    } else if (this.isSet && !(data & 0x01)) {
      this.isSet = false;
      this.index = 0;
      this.keyRegistors = [...this.keyBuffer];
    }
  }

  read() {
    return this.keyRegistors[this.index++];
  }
}
