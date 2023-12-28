/**
 * @format
 */
import React, { useRef, useState, useEffect } from 'react';
import { AppRegistry } from 'react-native';
import App from './src/components/App.jsx'
import { name as appName } from './app.json';
import store from './store/index.js';
import { Provider } from 'react-redux';
const MyApp = () => {
    return (<Provider Provider store={store} >
        <App />
    </Provider>
    );

};
AppRegistry.registerComponent(appName, () => MyApp);
AppRegistry.runApplication(appName, {
    rootTag: document.getElementById('react-native-web-app'),
});