import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const MiniBox: React.FC<{
  onPress: (event: any) => void;
  colors: {
    paletteName: string;
    data: { text: string; color: string }[];
  };
}> = ({ colors: { paletteName, data }, onPress }) => {
  return (
    <View style={{ marginVertical: 10 }}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles({}).paletteName}>{paletteName}</Text>
        <FlatList
          data={data.slice(0, 5)}
          keyExtractor={({ color }, index) => color + index}
          horizontal={true}
          renderItem={({ item: { color } }) => (
            <View style={styles({ color }).container} />
          )}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = ({ color }: any) =>
  StyleSheet.create({
    container: {
      backgroundColor: color,
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
