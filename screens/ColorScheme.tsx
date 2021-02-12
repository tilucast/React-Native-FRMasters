import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StackScreenProps } from '@react-navigation/stack';
import {
  View,
  FlatList,
  StyleSheet,
  //StatusBar as RNStatusBar,
  TouchableOpacity,
} from 'react-native';
import ViewBox from '../components/ViewBox';
import { StackScreenInterface } from '../common/interfaces/InterfacesAndTypes';

type Props = StackScreenProps<StackScreenInterface, 'ColorScheme'>;

const ColorScheme: React.FC<Props> = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FlatList
        style={{ width: '100%' }}
        data={route.params.data}
        keyExtractor={({ text }, index) => text + index}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ColorPalette', { item })}
          >
            <ViewBox viewBoxProps={{ text: item.text, color: item.color }} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe3f1',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
});

export default ColorScheme;
