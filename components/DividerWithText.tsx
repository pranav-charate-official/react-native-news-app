import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type Props = {
  text: string;
};

const DividerWithText = (props: Props) => {
  return (
    <View style={style.container}>
      <View style={style.line} />
      <Text style={style.text}>{props.text}</Text>
      <View style={style.line} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    width: '85%',
    marginHorizontal: 'auto',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  line: {
    flex: 1,
    borderWidth: 0.5,
    borderColor: '#bccd8c',
  },
  text: {
    color: '#8e9675',
  },
});

export default DividerWithText;
