import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {
  RootStackScreenInterface,
  StackScreenInterface,
} from './common/interfaces/InterfacesAndTypes';
import ColorPalette from './screens/ColorPalette';
import ColorPaletteModal from './screens/ColorPaletteModal';
import ColorScheme from './screens/ColorScheme';
import Home from './screens/HomeScreen';

const MainStack = createStackNavigator<StackScreenInterface>();
const RootStack = createStackNavigator<RootStackScreenInterface>();

const MainStackScreen = () => {
  return (
    <MainStack.Navigator
      headerMode="float"
      screenOptions={{
        headerTintColor: 'black',
        headerStyle: {},
      }}
    >
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen
        name="ColorPalette"
        component={ColorPalette}
        options={({ route }) => ({ title: route.params?.item.colorName })}
      />
      <MainStack.Screen
        name="ColorScheme"
        component={ColorScheme}
        options={({ route }) => ({ title: route.params?.title })}
      />
    </MainStack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal" headerMode="float">
        <RootStack.Screen
          name="Main"
          component={MainStackScreen}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="ColorPaletteModal"
          component={ColorPaletteModal}
          options={{ headerTitle: 'Add New Palette' }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
