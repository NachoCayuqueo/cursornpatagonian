/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Alert, Image, StyleSheet, View, Text} from 'react-native';

import {DefaultButton} from './src/components';

import {colors} from './src/utils/theme';
import {DEVICE_HEIGHT, DEVICE_WIDTH} from './src/utils/dimensions';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const showAlert = () => {
  Alert.alert('Hola!');
};

const App = () => {
  //console.log('Device height ->', DEVICE_HEIGHT);
  //console.log('Device height ->', DEVICE_WIDTH);

  // this is a comment
  /**
   * this is a comment
   */
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Titulo</Text>
      {/*this is a comment */}
      <Text>Subtitulo</Text>
      <Image
        resizeMode="contain"
        source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
        style={styles.image}
      />
      <DefaultButton
        color={colors.mainOrange}
        // additionalStyle={styles.button}
        onPress={showAlert}
        text="Hola"
        textSize={24}
      />
    </View>
 );
};

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: colors.veryLigthBlue,
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  title: {
    color: colors.mainOrange,
    fontSize: 30,
    fontWeight: 'bold', //negrita
    fontStyle: 'italic',
    marginBottom: 10,
  },
  image: {
    minHeight: 100,
    width: DEVICE_WIDTH * 0.5,
  },
  button: {
    backgroundColor: 'green',
    width: 50,
  },
});

export default App;
