export const formatoFecha = (fecha) => {
  const nFecha = new Date(fecha);
  const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
  return `${nFecha.getDate()}/${meses[nFecha.getMonth()]}/${nFecha.getFullYear()}`;
}