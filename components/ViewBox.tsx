import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { isItDarkOrNot } from '../common/scripts/styleScripts';

const ViewBox: React.FC<{
  viewBoxProps: { colorName: string; hexCode: string };
}> = ({ viewBoxProps }) => {
  return (
    <View style={[styles.viewStyle, { backgroundColor: viewBoxProps.hexCode }]}>
      <Text
        style={{
          color: isItDarkOrNot(viewBoxProps.hexCode),
          fontWeight: '700',
        }}
      >
        {viewBoxProps.colorName}
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
