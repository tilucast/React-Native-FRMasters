import { StackScreenProps } from '@react-navigation/stack';
import React, { useState, useCallback, useRef, useEffect } from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Switch,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import COLORS from '../common/Colors';
import { StackScreenInterface } from '../common/interfaces/InterfacesAndTypes';

interface ArrayOfColors {
  colorName: string;
  hexCode: string;
}

type Props = StackScreenProps<StackScreenInterface, 'ColorPaletteModal'>;

const ColorPaletteModal: React.FC<Props> = ({ navigation }) => {
  const [selectedColors, setSelectedColors] = useState<ArrayOfColors[]>([]);
  const [title, setTitle] = useState('');

  const handleUpdate = useCallback(
    (color, newValue) => {
      if (newValue) {
        setSelectedColors((current) => [...current, color]);
      } else {
        setSelectedColors((current) =>
          current.filter((c) => c.colorName !== color.colorName),
        );
      }
    },
    [setSelectedColors],
  );

  const sendSelectedColorsToHome = () => {
    const colorPalette = { paletteName: title, data: selectedColors };

    if (!title) {
      Alert.alert(
        'Error on creating new Palette',
        'Please, type a title for your palette.',
      );
      return;
    } else if (selectedColors.length < 5) {
      Alert.alert(
        'Error on creating new Palette',
        `Please, select at least 5 colors to your Palette. Currently you have ${selectedColors.length} colors.`,
      );
      return;
    }
    navigation.navigate('Home', { selectedColors: colorPalette });
  };

  const switchValue = (item: any) =>
    !!selectedColors.find((color) => color.colorName === item.colorName);

  return (
    <View style={styles.container}>
      <Text>Name of your color palette</Text>
      <TextInput
        style={styles.textPlaceholder}
        placeholder="Type something"
        onChangeText={(event) => setTitle(event)}
        value={title}
      />

      <FlatList
        data={COLORS}
        keyExtractor={({ hexCode }, index) => hexCode + index}
        renderItem={({ item }) => {
          return (
            <View style={styles.switchColorBox} onTouchStart={() => {}}>
              <Text>{item.colorName}</Text>
              <View
                style={
                  switchValue(item) &&
                  styledProps({ backgroundColor: item.hexCode }).box
                }
              />
              <Switch
                value={switchValue(item)}
                onValueChange={(newValue) => handleUpdate(item, newValue)}
                trackColor={{ false: '#d9d9d9', true: `${item.hexCode}` }}
                thumbColor={`${item.hexCode}`}
              />
            </View>
          );
        }}
      />

      <TouchableOpacity
        style={styles.submitButton}
        onPress={sendSelectedColorsToHome}
      >
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>
          SUBMIT
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    flex: 1,
  },
  textPlaceholder: {
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 5,
    marginVertical: 10,
  },
  switchColorBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    marginVertical: 5,
    paddingBottom: 10,
  },
  submitButton: {
    backgroundColor: '#2aa198',
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 8,
    marginVertical: 15,
  },
});

const styledProps = ({ backgroundColor }: any) =>
  StyleSheet.create({
    box: {
      width: 55,
      height: 25,
      backgroundColor: backgroundColor,
    },
  });

export default ColorPaletteModal;
