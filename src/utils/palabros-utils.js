
export const seleccionarPalabroRandom = (palabros) => {
  return palabros[Math.floor(Math.random() * palabros.length)];
};

export function getAbecedarioArray() {
  const abecedario = "abcdefghijklmnñopqrstuvwxyz";
  return abecedario.toUpperCase().split("");
}
