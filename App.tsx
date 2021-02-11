import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StackScreenInterface } from './common/interfaces/InterfacesAndTypes';
import ColorPalette from './screens/ColorPalette';
import ColorScheme from './screens/ColorScheme';
import Home from './screens/HomeScreen';

const Stack = createStackNavigator<StackScreenInterface>();

export default function App() {
  // const capitalizeFirstLetter = (string: string) =>
  //   string.charAt(0).toUpperCase() + string.slice(1);

  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="screen"
        screenOptions={{
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: 'pink',
            borderBottomColor: 'black',
            borderBottomWidth: 1,
          },
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="ColorPalette"
          component={ColorPalette}
          options={({ route }) => ({ title: route.params?.item.text })}
        />
        <Stack.Screen name="ColorScheme" component={ColorScheme} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
