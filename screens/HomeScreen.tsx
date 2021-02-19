import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, useCallback } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import {
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import { StackScreenInterface } from '../common/interfaces/InterfacesAndTypes';
import MiniBox from '../components/MiniBox';

type Props = StackScreenProps<StackScreenInterface, 'Home'>;

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

const Home: React.FC<Props> = ({ navigation, route }) => {
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

  useEffect(() => {
    if (Array.isArray(colorsApi) && route.params?.selectedColors) {
      const x = [route.params.selectedColors].concat(colorsApi);
      const c = [route.params.selectedColors, ...colorsApi];
      setColorsApi(c);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [route.params?.selectedColors]);

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
          onRefresh={colorsCallback}
          refreshing={false}
          ListHeaderComponent={
            <TouchableOpacity
              onPress={() => navigation.navigate('ColorPaletteModal')}
            >
              <Text style={styles.headerColorScheme}>Add a color scheme</Text>
            </TouchableOpacity>
          }
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
  headerColorScheme: {
    fontSize: 25,
    color: '#2aa198',
    fontWeight: '700',
  },
});

export default Home;
