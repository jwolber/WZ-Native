import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {RootStack} from './src/navigation/RootStack';
import Help from './src/screens/Help';
import Home from './src/screens/Home';

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Home">
        <RootStack.Screen name="Home" component={Home} />
        <RootStack.Screen name="Help" component={Help} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
export default App;
