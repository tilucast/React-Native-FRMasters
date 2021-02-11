import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  //StatusBar as RNStatusBar,
  TouchableOpacity,
} from 'react-native';
import ViewBox from '../components/ViewBox';
import { StackScreenInterface } from '../common/interfaces/InterfacesAndTypes';

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

  const SectionListHeader: React.FC<{ title: string }> = ({ title }) => (
    <Text
      style={{
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 8,
      }}
    >
      {title}
    </Text>
  );

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FlatList
        style={styles.flatListStyle}
        data={solarized.slice(0, 5)}
        keyExtractor={({ text }, index) => text + index}
        renderItem={(color) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ColorScheme', {
                data: solarized,
                title: 'Solarized',
              })
            }
          >
            <ViewBox
              viewBoxProps={{ text: color.item.text, color: color.item.color }}
            />
          </TouchableOpacity>
        )}
        ListHeaderComponent={<SectionListHeader title={'Solarized'} />}
      />
      <FlatList
        style={styles.flatListStyle}
        data={rainbow.slice(0, 5)}
        keyExtractor={({ text }, index) => text + index}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ColorScheme', {
                data: rainbow,
                title: 'Rainbow',
              })
            }
          >
            <ViewBox viewBoxProps={{ text: item.text, color: item.color }} />
          </TouchableOpacity>
        )}
        ListHeaderComponent={<SectionListHeader title={'Rainbow'} />}
      />
      <FlatList
        style={styles.flatListStyle}
        data={frMasters.slice(0, 5)}
        keyExtractor={({ text }, index) => text + index}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ColorScheme', {
                data: frMasters,
                title: 'FR Masters',
              })
            }
          >
            <ViewBox viewBoxProps={{ text: item.text, color: item.color }} />
          </TouchableOpacity>
        )}
        ListHeaderComponent={<SectionListHeader title={'FR Masters'} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe3f1',
    alignItems: 'center',
    //paddingTop: Platform.OS === 'android' ? RNStatusBar.currentHeight : 0,
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  flatListStyle: {
    width: '100%',
    marginVertical: 20,
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 3,
    zIndex: 100,
    paddingHorizontal: 5,
  },
});

export default Home;
