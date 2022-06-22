import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import namereducer from './store/reducers/names';
import Primary from './pages/Primary';
import Secondary from './pages/Secondary';

const App = () => {
  const store = configureStore({
    reducer: namereducer,
  });

  const Tab = createBottomTabNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Primary" component={Primary} />
          <Tab.Screen name="Secondary" component={Secondary} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
