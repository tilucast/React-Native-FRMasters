import { StackScreenProps } from '@react-navigation/stack';
import React, { useState, useCallback } from 'react';
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

  console.log(COLORS.length);

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
            <View style={styles.switchColorBox}>
              <Text>{item.colorName}</Text>
              <Switch
                value={
                  !!selectedColors.find(
                    (color) => color.colorName === item.colorName,
                  )
                }
                onValueChange={(newValue) => handleUpdate(item, newValue)}
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

export default ColorPaletteModal;
