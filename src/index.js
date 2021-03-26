import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { FirebaseAppProvider } from 'reactfire'
import firebaseConfig from './firebase-config';

/* Con firebaseProvider proporcionamos a todos los componentes
la conexion con firebase, solo con llamar en cada componente como tenemos en app.js
Con suspense hacemos que el render de los componentes se espera a la carga completa
en este caso de firebase, es una nueva funcion de react */

ReactDOM.render((
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Suspense fallback={'Conectando la app...'}>
      <App />
    </Suspense>
  </FirebaseAppProvider>
), document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
