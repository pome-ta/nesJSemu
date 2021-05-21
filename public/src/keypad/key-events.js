const {tapDown, tapMove, tapUp} = {
  tapDown: typeof document.ontouchstart !== 'undefined' ? 'touchstart' : 'mousedown',
  tapMove: typeof document.ontouchmove !== 'undefined' ? 'touchmove' : 'mousemove',
  tapUp: typeof document.ontouchend !== 'undefined' ? 'touchend' : 'mouseup',
}

const a_btn = document.getElementById('a');
const b_btn = document.getElementById('b');

export default class KeyEvents {
  constructor() { }

  setup(onKeyDown, onKeyUp) {
    if (typeof window !== 'undefined') {
      a_btn.addEventListener(tapDown, (e) => {
        e.preventDefault();
        if (onKeyDown) onKeyDown(0);
        //console.log(a_btn);
      });
      a_btn.addEventListener(tapUp, () => {
        if (onKeyUp) onKeyUp(0);
      });

      b_btn.addEventListener(tapDown, (e) => {
        e.preventDefault();
        if (onKeyDown) onKeyDown(3);
      });
      b_btn.addEventListener(tapUp, () => {
        if (onKeyUp) onKeyUp(3);
      });

    }
  }

  getKeyIndex(keyNum) {
    switch (keyNum) {
      case 88: return 0; // X  A 
      case 90: return 1; // Z  B
      case 65: return 2; // A  SELECT
      case 83: return 3; // S  START
      case 38: return 4; // ↑  ↑  
      case 40: return 5; // ↓  ↓
      case 37: return 6; // ←  ←
      case 39: return 7; // →  →
    }
  }
}