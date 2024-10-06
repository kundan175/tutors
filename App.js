import 'react-native-gesture-handler';
import React from 'react';
import {View} from 'react-native';
import StackNavigation from './src/navigation/StackNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './src/navigation/NavigationService';
function App() {
  return (
    <View style={{flex: 1}}>
      <NavigationContainer ref={navigationRef}>
        <StackNavigation />
      </NavigationContainer>
    </View>
  );
}

export default App;
