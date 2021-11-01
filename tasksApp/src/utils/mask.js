function maskHours(value) {
  value = value.replace(/\D/g, ''); // 0123456789
  value = value.replace(/^(\d{2})(\d)/, '$1:$2'); // 11:11
  return value;
}

function maskCep(value) {
  value = value.replace(/\D/g, ''); // 0123456789
  value = value.replace(/^(\d{5})(\d)/, '$1-$2');
  return value;
}

function maskPhone(value) {
  value = value.replace(/\D/g, '');
  // (11)1111-1111
  value = value.replace(/^(\d{2})(\d)/g, '($1)$2');
  value = value.replace(/(\d)(\d{4})$/, '$1-$2');
  return value;
}

function maskCurrency(value) {
  value = value.replace(/\D/g, '');
  value = value.replace(/(\d)(\d{2})$/, '$1,$2');
  value = value.replace(/(?=(\d{3})+(\D))\B/g, '.');
  return value;
}

export {maskHours, maskCep, maskPhone, maskCurrency};
