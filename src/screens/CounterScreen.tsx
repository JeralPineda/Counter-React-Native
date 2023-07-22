import React, {useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import Button from "../components/ui/Button";

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    if (counter === 0) {
      return;
    }

    setCounter(counter - 1);
  };

  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>Contador: {counter}</Text>

      <Button
        onPress={handleDecrement}
        position="left"
        title="-1"
        disabled={counter === 0}
      />
      <Button onPress={handleIncrement} position="right" title="+1" />
    </View>
  );
};

export default CounterScreen;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },

  title: {
    fontSize: 40,
    top: -15,
    textAlign: "center",
  },
});
