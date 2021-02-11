import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { isItDarkOrNot } from '../common/scripts/styleScripts';

const ColorPalette = (param: any) => {
  const { color, text } = param.route.params.item;

  return (
    <View style={[{ backgroundColor: color, flex: 1 }, styles({}).container]}>
      <Text style={styles({ color }).text}>
        {text}: {color}
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
      color: isItDarkOrNot(styleProps.color || ''),
    },
  });

export default ColorPalette;
