import React, {useState} from 'react';
import {
  KeyboardTypeOptions,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Icon from '@react-native-vector-icons/material-design-icons';

type Props = {
  label: string;
  placeHolder: string;
  value?: string;
  type?: KeyboardTypeOptions;
  textContentType?: 'name' | 'emailAddress' | 'password';
  onChange?: React.Dispatch<string>;
  isPassword?: true;
};

const FormInputField = (props: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View style={style.container}>
      <Text style={style.label}>{props.label}</Text>
      <View style={style.inputContainer}>
        <TextInput
          style={style.input}
          value={props.value}
          placeholder={props.placeHolder}
          placeholderTextColor="#979e93"
          keyboardType={props.type}
          textContentType={props.textContentType ?? 'none'}
          secureTextEntry={props.isPassword && !showPassword}
          numberOfLines={1}
          autoCorrect={!props.isPassword}
          autoComplete={props.isPassword && 'off'}
          autoCapitalize={'none'}
          onChangeText={newText => {
            props.onChange?.(newText);
          }}
        />
        {props.isPassword && (
          <Icon
            name={showPassword ? 'eye-off-outline' : 'eye-outline'}
            onPress={() => {
              setShowPassword(!showPassword);
            }}
            size={25}
            color={'#353b29'}
            style={style.inputButton}
          />
        )}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    gap: 8,
  },
  label: {
    fontSize: 18,
    fontWeight: 500,
  },
  inputContainer: {
    width: '100%',
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#c1cabb',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: 'black',
  },
  inputButton: {
    width: 25,
  },
});

export default FormInputField;
