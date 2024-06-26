import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/app/store';
import MainScreen from './src/screens/MainScreen';

const App = () => {
    return (
        <Provider store={store}>
            <MainScreen />
        </Provider>
    );
};

export default App;