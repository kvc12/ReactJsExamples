import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//what to render=appcomponent and where to render=root
ReactDOM.render( 
    < React.StrictMode >
    <App/>
    </React.StrictMode>,
    document.getElementById('root')
);