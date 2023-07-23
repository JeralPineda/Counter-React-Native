import React from "react";
import {SafeAreaView, StyleSheet} from "react-native";

// import CounterScreen from './screens/CounterScreen';
// import BoxObjectModelScreen from './screens/BoxObjectModelScreen';
// import DimensionsScreen from './screens/DimensionsScreen';
// import PositionScreen from "./screens/PositionScreen";
// import FlexScreen from "./screens/FlexScreen";
// import TareaScreen1 from "./screens/TareaScreen1";
// import TareaScreen2 from "./screens/TareaScreen2";
// import TareaScreen3 from "./screens/TareaScreen3";
// import TareaScreen4 from "./screens/TareaScreen4";
// import TareaScreen5 from "./screens/TareaScreen5";
// import TareaScreen6 from "./screens/TareaScreen6";
// import TareaScreen7 from "./screens/TareaScreen7";
// import TareaScreen8 from "./screens/TareaScreen8";
// import TareaScreen9 from "./screens/TareaScreen9";
import TareaScreen10 from "./screens/TareaScreen10";

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      {/* SafeAreaView - Muestra correctamente la información cuando tiene un notch (iphone),
      evita que choque y es raro ponerlo al nivel del app */}
      <TareaScreen10 />
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1, //Hace que se expanda en toda la pantalla
  },
});
