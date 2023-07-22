import React from "react";
import {StyleSheet, View, Text, useWindowDimensions} from "react-native";

const DimensionsScreen = () => {
  // const {width, height} = Dimensions.get('window');

  const {width, height} = useWindowDimensions();

  return (
    <View>
      <View style={styles.container}>
        <View style={{...styles.purpleBox, width: width * 0.6}} />
        <View style={styles.orangeBox} />
      </View>

      <Text style={styles.title}>
        W: {width}, H: {height}
      </Text>
    </View>
  );
};

export default DimensionsScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 200,
    backgroundColor: "red",
  },
  purpleBox: {
    backgroundColor: "#5856d6",
    // width: '50%',
    height: "50%",
  },
  orangeBox: {
    backgroundColor: "#f0a23b",
    // width: '50%',
    // height: '50%',
  },

  title: {
    fontSize: 30,
    textAlign: "center",
  },
});
