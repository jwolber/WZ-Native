import {DarkTheme, NavigationContainer} from '@react-navigation/native';
import React from 'react';
import config from './src/config';
import {RootStack} from './src/navigation/RootStack';
import {HelpScreen} from './src/screens/HelpScreen';
import {HomeScreen} from './src/screens/HomeScreen';
import {MatchScreen} from './src/screens/MatchScreen';

const App = () => {
  const gamerTag = config.GAMER_TAG.toUpperCase() ?? '';
  return (
    <NavigationContainer theme={DarkTheme}>
      <RootStack.Navigator initialRouteName="Home">
        <RootStack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: gamerTag}}
        />
        <RootStack.Screen
          name="Match"
          component={MatchScreen}
          options={{title: 'Match Details'}}
        />
        <RootStack.Screen name="Help" component={HelpScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
export default App;
