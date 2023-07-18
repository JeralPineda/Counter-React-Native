import React from 'react';

// import CounterScreen from './screens/CounterScreen';
import BoxObjectModelScreen from './screens/BoxObjectModelScreen';
import {SafeAreaView, StyleSheet} from 'react-native';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      {/* SafeAreaView - Muestra correctamente la información cuando tiene un notch (iphone),
      evita que choque y es raro ponerlo al nivel del app */}
      <BoxObjectModelScreen />
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1, //Hace que se expanda en toda la pantalla
  },
});
