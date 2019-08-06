import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import numeral from "numeral";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

library.add(faChevronDown, faChevronUp);

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

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
