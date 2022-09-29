import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Navigation} from '@navigation';

import {Provider as PaperProvider} from 'react-native-paper';
import {Provider as ReduxProvider} from 'react-redux';

import store from '@redux/store';
import {theme} from '@theme';
import RNBootSplash from 'react-native-bootsplash';

const App = () => {
  React.useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide({duration: 250});
    }, 1000);
  }, []);
  return (
    <ReduxProvider store={store}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </PaperProvider>
    </ReduxProvider>
  );
};

export default App;
