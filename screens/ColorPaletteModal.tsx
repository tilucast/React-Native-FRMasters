import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Switch,
  TouchableOpacity,
} from 'react-native';

const ColorPaletteModal = () => {
  const [switchState, setSwitchState] = useState(false);

  const handleSwitchState = () => setSwitchState(!switchState);

  return (
    <View style={styles.container}>
      <Text>Name of your color palette</Text>
      <TextInput style={styles.textPlaceholder} placeholder="Type something" />

      <View style={styles.switchColorBox}>
        <Text>AliceBlue</Text>
        <Switch onValueChange={handleSwitchState} value={switchState} />
      </View>

      <View style={styles.switchColorBox}>
        <Text>AntiqueWhite</Text>
        <Switch onValueChange={handleSwitchState} value={switchState} />
      </View>

      <View style={styles.switchColorBox}>
        <Text>Aqua</Text>
        <Switch onValueChange={handleSwitchState} value={switchState} />
      </View>

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
