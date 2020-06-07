import React, { useState } from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Block, GalioProvider } from 'galio-framework';
import Home from './screens/Home';
import { Theme } from './constants';
import { store, persistor } from './redux/store';
const App = () => {
  const [loadingComplete, setLoadingComplete] = React.useState(false);
  const fetchFonts = async () => {
    Font.loadAsync({
      'montserrat-regular': require('./assets/font/Montserrat-Regular.ttf'),
      'montserrat-bold': require('./assets/font/Montserrat-Bold.ttf'),
    });
  };

  _loadResourcesAsync = async () => {
    return await fetchFonts();
  };

  _handleLoadingError = (error) => {
    console.warn(error);
  };

  _handleFinishLoading = () => {
    setLoadingComplete(true);
  };

  if (!loadingComplete) {
    return (
      <AppLoading
        startAsync={_loadResourcesAsync}
        onError={_handleLoadingError}
        onFinish={_handleFinishLoading}
      />
    );
  } else {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <GalioProvider theme={Theme}>
            <Block flex>
              <Home />
            </Block>
          </GalioProvider>
        </PersistGate>
      </Provider>
    );
  }
};
export default App;
