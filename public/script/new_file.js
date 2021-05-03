const width = [0.125, 0.25, 0.5, 0.75];

const create = (pulseWidth) => {
  const real = [0];
  const imag = [0];
  for (let i = 1; i < 8192; i += 1) {
    const realTerm = 4 / (i * Math.PI) * Math.sin(Math.PI * i * pulseWidth);
    real.push(realTerm);
    imag.push(0);
  }
  return {real, imag};
};

//const ws = width.map(w => create(w));
const ws = width.map(w => create(w));
console.log(typeof ws);