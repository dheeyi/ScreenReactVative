import React from 'react';
import {StyleSheet, View, Text, TextInput, Image} from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../../src/Config/Colors';

const CVCasos = (props) => {
  const {typeCase, placeholder, onChangeText, secureTextEntry, autoCorrect} = props;

  return (
    <View>
      <Text style={styles.text}>{typeCase}</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={onChangeText}
        placeholder={placeholder}
        autoCorrect={autoCorrect}
        secureTextEntry={secureTextEntry}
        selectionColor={Colors.blue}
        placeholderTextColor={Colors.silver}
        underlineColorAndroid="transparent">
      </TextInput>
    </View>
  );
};

CVCasos.propTypes = {
  onChangeText: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  autoCorrect: PropTypes.bool,
  secureTextEntry: PropTypes.bool,
};

const styles = StyleSheet.create({
  text:{
    position: 'absolute',
    fontSize: 14,
    color: Colors.white,
    width: 100,
  },
  textInput: {
    backgroundColor: Colors.white,
    borderColor: Colors.black,
    paddingLeft: 40,
    borderRadius: 15,
    marginBottom: 10,
    marginHorizontal: 100,
    width: 210
  }
});

export default CVCasos;
