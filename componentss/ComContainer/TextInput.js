// TextInput.js
import React from 'react';
import { StyleSheet, TextInput as RNTextInput } from 'react-native';

const TextInput = ({ placeholder, ...props }) => {
  return <RNTextInput style={styles.input} placeholder={placeholder} {...props} />;
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
});

export default TextInput;
