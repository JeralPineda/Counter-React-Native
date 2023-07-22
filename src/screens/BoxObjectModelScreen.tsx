import React from "react";
import {StyleSheet, Text, View} from "react-native";

const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Box Object Model</Text>
    </View>
  );
};

export default BoxObjectModelScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
  title: {
    fontSize: 20,
    borderWidth: 2,
    padding: 10, //unidades //padding 4 lados
    // paddingHorizontal: 2, //padding left y right
    // paddingVertical: 2, //padding top y bottom
    // paddingLeft: 2,
    // paddingRight: 2
    // paddingTop: 2,
    // paddingBottom: 2,
    marginHorizontal: 20,

    // backgroundColor: 'red',
  },
});
