import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { View, FlatList, StyleSheet } from 'react-native';
import { StackScreenInterface } from '../common/interfaces/InterfacesAndTypes';
import MiniBox from '../components/MiniBox';

type Props = StackScreenProps<StackScreenInterface, 'Home'>;

const Home: React.FC<Props> = ({ navigation }) => {
  const solarized = [
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
    { text: 'Lavender', color: '#dac6f5' },
  ];

  const rainbow = [
    { text: 'Red', color: '#FF0000' },
    { text: 'Orange', color: '#FF7F00' },
    { text: 'Yellow', color: '#FFFF00' },
    { text: 'Green', color: '#00FF00' },
    { text: 'Violet', color: '#8B00FF' },
  ];

  const frMasters = [
    { text: 'Red', color: '#c02d28' },
    { text: 'Black', color: '#3e3e3e' },
    { text: 'Grey', color: '#8a8a8a' },
    { text: 'White', color: '#ffffff' },
    { text: 'Orange', color: '#e66225' },
  ];

  const colorPalettes = [
    { paletteName: 'Solarized', data: solarized },
    { paletteName: 'Rainbow', data: rainbow },
    { paletteName: 'FR Masters', data: frMasters },
  ];

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={{ alignItems: 'flex-start', paddingHorizontal: 5 }}>
        <FlatList
          style={styles.flatListStyle}
          data={colorPalettes}
          keyExtractor={({ paletteName }, index) => paletteName + index}
          renderItem={({ item }) => (
            <MiniBox
              onPress={() =>
                navigation.navigate('ColorScheme', {
                  data: item.data,
                  title: item.paletteName,
                })
              }
              colors={item}
            />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe3f1',
    alignItems: 'flex-start',
    paddingTop: 8,
    paddingHorizontal: 14,
    paddingBottom: 20,
  },
  flatListStyle: {
    flexGrow: 0,
    marginVertical: 10,
  },
});

export default Home;
