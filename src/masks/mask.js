

export const phoneMask = value => {
  if (!value) return;
  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "+$1 $2")
    .replace(/(\d{2})(\d)/, "($1)$2")
    .replace(/(\d{5})(\d)/, "$1-$2");
};
export const dateMask = value => {
  if (!value) return '';
  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\d{2})(\d)/, "$1/$2");
};