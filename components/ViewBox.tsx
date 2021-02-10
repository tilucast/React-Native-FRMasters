import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ViewBox: React.FC<{ viewBoxProps: { text: string; color: string } }> = ({
  viewBoxProps,
}) => {
  const isItDarkOrNot = (hexColor: string) => {
    return parseInt(hexColor.replace('#', ''), 16) > 0xffffff / 1.1
      ? 'black'
      : 'white';
  };

  return (
    <View style={[styles.viewStyle, { backgroundColor: viewBoxProps.color }]}>
      <Text
        style={{ color: isItDarkOrNot(viewBoxProps.color), fontWeight: '700' }}
      >
        {viewBoxProps.text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    paddingVertical: 10,
    width: '100%',
    alignItems: 'center',
    marginVertical: 5,
  },
});

export default ViewBox;
