import { tapUp, tapMove, tapDown} from '../eventUtil.js'


const a_btn = document.getElementById('a');
const b_btn = document.getElementById('b');
const e_btn = document.getElementById('e');
const s_btn = document.getElementById('s');
const u_btn = document.getElementById('u');
const d_btn = document.getElementById('d');
const l_btn = document.getElementById('l');
const r_btn = document.getElementById('r');

export default class KeyEvents {
  constructor() { }

  setup(onKeyDown, onKeyUp) {
    if (typeof window !== 'undefined') {
      // xxx: `e.preventDefault();` ?
      a_btn.addEventListener(tapDown, (e) => {
        e.preventDefault();
        if (onKeyDown) onKeyDown(0);
      });
      a_btn.addEventListener(tapUp, () => {
        if (onKeyUp) onKeyUp(0);
      });

      b_btn.addEventListener(tapDown, (e) => {
        e.preventDefault();
        if (onKeyDown) onKeyDown(1);
      });
      b_btn.addEventListener(tapUp, () => {
        if (onKeyUp) onKeyUp(1);
      });

      e_btn.addEventListener(tapDown, (e) => {
        e.preventDefault();
        if (onKeyDown) onKeyDown(2);
      });
      e_btn.addEventListener(tapUp, () => {
        if (onKeyUp) onKeyUp(2);
      });

      s_btn.addEventListener(tapDown, (e) => {
        e.preventDefault();
        if (onKeyDown) onKeyDown(3);
      });
      s_btn.addEventListener(tapUp, () => {
        if (onKeyUp) onKeyUp(3);
      });

      u_btn.addEventListener(tapDown, (e) => {
        e.preventDefault();
        if (onKeyDown) onKeyDown(4);
      });
      u_btn.addEventListener(tapUp, () => {
        if (onKeyUp) onKeyUp(4);
      });


      d_btn.addEventListener(tapDown, (e) => {
        e.preventDefault();
        if (onKeyDown) onKeyDown(5);
      });
      d_btn.addEventListener(tapUp, () => {
        if (onKeyUp) onKeyUp(5);
      });

      l_btn.addEventListener(tapDown, (e) => {
        e.preventDefault();
        if (onKeyDown) onKeyDown(6);
      });
      l_btn.addEventListener(tapUp, () => {
        if (onKeyUp) onKeyUp(6);
      });


      r_btn.addEventListener(tapDown, (e) => {
        e.preventDefault();
        if (onKeyDown) onKeyDown(7);
      });
      r_btn.addEventListener(tapUp, () => {
        if (onKeyUp) onKeyUp(7);
      });

      // todo: keyboard
      document.addEventListener('keydown', (e) => {
        if (onKeyDown) onKeyDown(this.getKeyIndex(e.keyCode));
      });

      document.addEventListener('keyup', (e) => {
        if (onKeyUp) onKeyUp(this.getKeyIndex(e.keyCode));
      });

    }
  }

  getKeyIndex(keyCode) {
    switch (keyCode) {
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
