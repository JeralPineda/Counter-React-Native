import React from 'react';
import {StyleSheet, View} from 'react-native';

const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.purpleBox} />
      <View style={styles.orangeBox} />
    </View>
  );
};

export default PositionScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#28c4d9',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  purpleBox: {
    width: 100,
    height: 100,
    backgroundColor: '#5856d6',
    borderWidth: 10,
    borderColor: 'white',
  },

  orangeBox: {
    width: 100,
    height: 100,
    backgroundColor: '#f0a23b',
    borderWidth: 10,
    borderColor: 'white',
    top: -50,
  },
});
