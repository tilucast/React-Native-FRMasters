import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StackScreenProps } from '@react-navigation/stack';
import {
  Text,
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
        ListHeaderComponent={
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 18,
              textAlign: 'center',
              marginTop: 8,
            }}
          >
            {route.params.title}
          </Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    //paddingTop: Platform.OS === 'android' ? RNStatusBar.currentHeight : 0,
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
});

export default ColorScheme;
