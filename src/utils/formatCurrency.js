import numeral from "numeral";

numeral.register('locale', 'br', {
  delimiters: {
      thousands: '.',
      decimal: ','
  },
  abbreviations: {
      thousand: 'k',
      million: 'm',
      billion: 'b',
      trillion: 't'
  },
  ordinal : function (number) {
      return number === 1 ? 'er' : 'ème';
  },
  currency: {
      symbol: 'R$ '
  }
});

numeral.locale('br');

const formatCurrency = value => {
  if (value){
    value = value.replace(/\./g, '');
    value = value.replace(/,/g, '.');
  
    return numeral(Number(value)).format('$0,0.00');
  }
}

export default formatCurrency;