import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, useCallback } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { View, FlatList, StyleSheet } from 'react-native';
import { StackScreenInterface } from '../common/interfaces/InterfacesAndTypes';
import MiniBox from '../components/MiniBox';

type Props = StackScreenProps<StackScreenInterface, 'Home'>;

const Home: React.FC<Props> = ({ navigation }) => {
  interface ColorPalettes {
    paletteName: string;
    data: { colorName: string; hexCode: string }[];
  }

  interface ColorPaletteAPI {
    paletteName: string;
    colors: {
      colorName: string;
      hexCode: string;
    }[];
  }

  const [colorsApi, setColorsApi] = useState<ColorPalettes[]>();

  const colorsCallback = useCallback(async () => {
    const data = await fetch(
      'https://color-palette-api.kadikraman.now.sh/palettes',
    );
    const result = await data.json();

    const modifiedColorPaletteArray = result.map((colors: ColorPaletteAPI) => ({
      paletteName: colors.paletteName,
      data: colors.colors,
    }));

    setColorsApi(modifiedColorPaletteArray);
  }, []);

  useEffect(() => {
    colorsCallback();
  }, [colorsCallback]);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={{ alignItems: 'flex-start', paddingHorizontal: 5 }}>
        <FlatList
          style={styles.flatListStyle}
          data={colorsApi}
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
