import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const MiniBox: React.FC<{
  onPress: (event: any) => void;
  colors: {
    paletteName: string;
    data: { colorName: string; hexCode: string }[];
  };
}> = ({ colors: { paletteName, data }, onPress }) => {
  return (
    <View style={{ marginVertical: 10 }}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles({}).paletteName}>{paletteName}</Text>
        <FlatList
          data={data.slice(0, 5)}
          keyExtractor={({ hexCode }, index) => hexCode + index}
          horizontal={true}
          renderItem={({ item: { hexCode } }) => (
            <View style={styles({ hexCode }).container} />
          )}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = ({ hexCode }: any) =>
  StyleSheet.create({
    container: {
      backgroundColor: hexCode,
      width: 50,
      height: 50,
      marginHorizontal: 5,
      elevation: 10,
    },
    paletteName: {
      fontWeight: 'bold',
      fontSize: 18,
      marginBottom: 5,
    },
  });

export default MiniBox;
