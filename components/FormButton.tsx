import React, {ReactNode} from 'react';
import {
  ColorValue,
  GestureResponderEvent,
  Pressable,
  StyleSheet,
} from 'react-native';

type ButtonProps = {
  onPress?: (event: GestureResponderEvent) => void;
  children?: ReactNode;
  backgroundColor?: ColorValue;
};

const FormButton = (props: ButtonProps) => {
  return (
    <Pressable
      onPress={props.onPress}
      style={({pressed}) => [
        style.button,
        {backgroundColor: props.backgroundColor ?? 'black'},
        {opacity: pressed ? 0.7 : 1},
      ]}>
      {props.children}
    </Pressable>
  );
};

const style = StyleSheet.create({
  button: {
    width: '100%',
    marginVertical: 5,
    padding: 10,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },
});

export default FormButton;
