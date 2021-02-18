import React, { useState, useCallback } from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Switch,
  TouchableOpacity,
  FlatList,
} from 'react-native';

const ColorPaletteModal = () => {
  const colors = [
    { colorName: 'AliceBlue', hexCode: '#F0F8FF' },
    { colorName: 'AntiqueWhite', hexCode: '#FAEBD7' },
    { colorName: 'Aqua', hexCode: '#00FFFF' },
  ];

  const [selectedColors, setSelectedColors] = useState([]);

  const handleUpdate = useCallback(
    (color, newValue) => {
      if (newValue === true) {
        setSelectedColors((current) => [...current, color]);
      } else {
        setSelectedColors((current) =>
          current.filter((c) => c.colorName !== color.colorName),
        );
      }
    },
    [setSelectedColors],
  );

  return (
    <View style={styles.container}>
      <Text>Name of your color palette</Text>
      <TextInput style={styles.textPlaceholder} placeholder="Type something" />

      <FlatList
        data={colors}
        keyExtractor={({ hexCode }) => hexCode}
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

      <TouchableOpacity style={styles.submitButton}>
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
