import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
  Platform,
  TouchableOpacity,
} from 'react-native';

interface ButtonProps {
  title: string;
  position: 'right' | 'left';
  disabled?: boolean;
  onPress: () => void;
}

const Button = ({onPress, position, title, disabled = false}: ButtonProps) => {
  const ios = () => {
    return (
      <TouchableOpacity
        style={[Styles.fabLocation, Styles[position]]}
        activeOpacity={0.8}
        onPress={onPress}>
        <View style={[Styles.fab, disabled ? Styles.disabled : Styles.enabled]}>
          <Text style={Styles.fabText}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const android = () => {
    return (
      <View style={[Styles.fabLocation, Styles[position]]}>
        <TouchableNativeFeedback
          onPress={onPress}
          background={TouchableNativeFeedback.Ripple('#3431e0fc', true, 30)}>
          <View
            style={[Styles.fab, disabled ? Styles.disabled : Styles.enabled]}>
            <Text style={Styles.fabText}>{title}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  };

  return Platform.OS === 'android' ? android() : ios();
};

export default Button;

const Styles = StyleSheet.create({
  fabLocation: {
    position: 'absolute',
    bottom: 25,
  },
  fabLocationBR: {
    position: 'absolute',
    bottom: 25,
  },
  right: {
    right: 25,
  },
  left: {
    left: 25,
  },
  fab: {
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: 100,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  enabled: {
    backgroundColor: '#3f3cdaf8',
  },
  disabled: {
    backgroundColor: '#5856d6',
  },

  fabText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
