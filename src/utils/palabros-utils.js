export const seleccionarPalabroRandom = (palabros) => {
  return palabros[Math.floor(Math.random() * palabros.length)];
};
