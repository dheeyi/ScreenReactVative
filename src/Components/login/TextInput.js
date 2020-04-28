import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, Image} from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../../Config/Colors';

export default class TextInputForm extends Component{
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <View>
        <Text style={stylesTextInput.errorText}>{this.props.error}</Text>
        <View>
          <Image
            style={stylesTextInput.inlineImg}
            source={this.props.source}>
          </Image>
          <TextInput
            style={stylesTextInput.textInput}
            onChangeText={this.props.onChangeText}
            onEndEditing={this.props.onEndEditing}
            placeholder={this.props.placeholder}
            secureTextEntry={this.props.secureTextEntry}
            autoCorrect={this.props.autoCorrect}
            selectionColor={Colors.blue}
            placeholderTextColor={Colors.white}
            underlineColorAndroid="transparent">
          </TextInput>
        </View>
      </View>
    );
  }
}

TextInputForm.propTypes = {
  source: PropTypes.number.isRequired,
  placeholder: PropTypes.string.isRequired,
  autoCorrect: PropTypes.bool,
  secureTextEntry: PropTypes.bool,
};

const stylesTextInput = StyleSheet.create({
  textInput: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    alignItems: 'center',
    height: 40,
    color: Colors.white,
    paddingLeft: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.black2,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 20,
  },
  inlineImg: {
    position: 'absolute',
    zIndex: 99,
    width: 22,
    height: 22,
    left: 10,
    top: 9,
  },
  errorText: {
    fontSize: 14,
    color: Colors.red,
    marginHorizontal: 20,
  },
});
