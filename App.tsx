import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  Platform,
  StatusBar as RNStatusBar,
  FlatList,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import ViewBox from './components/ViewBox';

export default function App() {
  // const capitalizeFirstLetter = (string: string) =>
  //   string.charAt(0).toUpperCase() + string.slice(1);

  const colors = [
    { text: 'Base03', color: '#002b36' },
    { text: 'Base02', color: '#073642' },
    { text: 'Base01', color: '#586e75' },
    { text: 'Base00', color: '#657b83' },
    { text: 'Base0', color: '#839496' },
    { text: 'Base1', color: '#93a1a1' },
    { text: 'Base2', color: '#eee8d5' },
    { text: 'Base3', color: '#fdf6e3' },
    { text: 'Yellow', color: '#b58900' },
    { text: 'Orange', color: '#cb4b16' },
    { text: 'Red', color: '#dc322f' },
    { text: 'Magenta', color: '#d33682' },
    { text: 'Violet', color: '#6c71c4' },
    { text: 'Blue', color: '#268bd2' },
    { text: 'Cyan', color: '#2aa198' },
    { text: 'Green', color: '#859900' },
  ];

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <FlatList
          style={{ width: '100%' }}
          data={colors}
          keyExtractor={({ text }, index) => text + index}
          renderItem={({ item }) => (
            <ViewBox viewBoxProps={{ text: item.text, color: item.color }} />
          )}
          ListHeaderComponent={
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                textAlign: 'center',
              }}
            >
              Solarized Color Scheme
            </Text>
          }
        />
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? RNStatusBar.currentHeight : 0,
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
});
