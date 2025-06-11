import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { RootStackParamList } from './src/navigation/types';
import LocationScreen from './src/screens/LocationScreen';
import SelectServiceScreen from './src/screens/SelectServiceScreen';
import SignInScreen from './src/screens/SignInScreen';
import SkipScreen01 from './src/screens/SkipScreen01';
import SkipScreen02 from './src/screens/SkipScreen02';
import SkipScreen03 from './src/screens/SkipScreen03';
import SkipScreen04 from './src/screens/SkipScreen04';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Location"
          component={LocationScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SkipScreen01"
          component={SkipScreen01}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SkipScreen02"
          component={SkipScreen02}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SkipScreen03"
          component={SkipScreen03}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SkipScreen04"
          component={SkipScreen04}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SelectService"
          component={SelectServiceScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  // No specific styles for App component yet, but keeping it for future use.
});

export default App;
