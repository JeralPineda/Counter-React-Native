import React from "react";
import {StyleSheet, View} from "react-native";

function TareaScreen4() {
  return (
    <View style={styles.container}>
      <View style={styles.purpleBox} />
      <View style={styles.orangeBox} />
      <View style={styles.blueBox} />
    </View>
  );
}

export default TareaScreen4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#284258",
    justifyContent: "space-between",
  },
  purpleBox: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: "white",
    backgroundColor: "#5856d6",
    alignSelf: "flex-end",
  },
  orangeBox: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: "white",
    backgroundColor: "#f0a23b",
    alignSelf: "center",
  },
  blueBox: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: "white",
    backgroundColor: "#28c4d9",
  },
});
