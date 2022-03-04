import 'react-native-gesture-handler';
import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import NameEmailScreen from './screens/UsernameScreen';
import PhoneNumberScreen from './screens/PhoneScreen';
import {Provider} from 'react-redux';
import {store} from './redux/store';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="UsernameScreen" component={NameEmailScreen} />

          <Stack.Screen name="PhoneScreen" component={PhoneNumberScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
