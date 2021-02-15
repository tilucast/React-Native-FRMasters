import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { isItDarkOrNot } from '../common/scripts/styleScripts';

const ColorPalette = (param: any) => {
  const { hexCode, colorName } = param.route.params.item;

  return (
    <View style={[{ backgroundColor: hexCode, flex: 1 }, styles({}).container]}>
      <Text style={styles({ hexCode }).text}>
        {colorName}: {hexCode}
      </Text>
    </View>
  );
};

const styles = (styleProps: any) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: 10,
      paddingBottom: 20,
      paddingTop: 20,
    },
    text: {
      fontSize: 20,
      color: isItDarkOrNot(styleProps.hexCode || ''),
    },
  });

export default ColorPalette;
