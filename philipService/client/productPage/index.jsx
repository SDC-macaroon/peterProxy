import React from 'react';
import ReactDOM from 'react-dom';
import ColourPreview from './components/ColourPreview';

const [,, productId] = window.location.pathname.split('/');

ReactDOM.render(<ColourPreview productId={productId} />, document.getElementById('philipApp'));
