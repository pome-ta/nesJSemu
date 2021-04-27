
const NES_HEADER_SIZE = 0x0010;
const PROGRAM_ROM_SIZE = 0x4000;
const CHARACTER_ROM_SIZE = 0x2000;


export const parse = (nesBuffer) => {
  console.log('parser');
  const nesROM = nesBuffer;
  return nesROM;
};
