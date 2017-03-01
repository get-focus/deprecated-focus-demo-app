import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader';
import { browserHistory } from 'react-router';

import Application from './application';
import getStore from './store';
const applicationStore = getStore();

const rootEl = document.querySelector('.demo-app');
console.log('Launching the app...');
render(
    <Application history={browserHistory} store={applicationStore} />,
    rootEl
);

// if (module.hot) {
//     console.log('hot accepted.')
//     module.hot.accept('./application', () => {
//         console.log('--> HOT RELOAD ACCEPTED');
//
//         // If you use Webpack 2 in ES modules mode, you can
//         // use <App /> here rather than require() a <NextApp />.
//         const NextApp = require('./application').default;
//         render(
//             <AppContainer>
//                 <Application history={browserHistory} store={store} />
//             </AppContainer>,
//             rootEl
//         );
//     });
// }
