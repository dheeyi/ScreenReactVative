import React, {Component} from 'react';
import {StyleSheet, View, SafeAreaView, KeyboardAvoidingView} from 'react-native';

import ButtonLogin from '../../Components/login/Button';
import TextInputLogin from '../../Components/login/TextInput';
import LogoLogin from '../../Components/login/Logo';
import EmailTextField from '../../Components/login/EmailTextField';
import DismissKeyboard from '../../Components/login/DismissKeyboard';

import Utils from '../../utils/utils';
import Images from '../../Config/Images';
import Constants from '../../Config/Constants';
import Colors from '../../Config/Colors';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };

    this._onPress = this._onPress.bind(this);
    this._onChangeTextUsername = this._onChangeTextUsername.bind(this);
    this._onChangeTextPassword = this._onChangeTextPassword.bind(this);
  }

  _onPress() {
    debugger;
    console.log('button pressed!!!');
    console.log(this.state.username);
    console.log(this.state.password);
  }

  _onChangeTextUsername(username) {
    this.setState({
      username: username,
    });
  }

  _onChangeTextPassword(password) {
    this.setState({
      password: password,
    });
  }

  _validateEmailAddress(email) {
    // Utils.isValidEmail(email);
  }

  _onChangeTextEmail() {
    // onachange
  }

  render() {
    return (
      <DismissKeyboard>
        <KeyboardAvoidingView style={stylesLoginScreen.container} behavior="padding" enabled>
          <View style={stylesLoginScreen.container}>
            <SafeAreaView>
              <LogoLogin style={stylesLoginScreen.logo}/>
              <View style={stylesLoginScreen.form}>
                <EmailTextField
                  onChangeText={this._onChangeTextEmail}
                  onEndEditing={this._validateEmailAddress}
                  placeholder={Constants.STRING.EMAIL}
                  secureTextEntry={false}
                  autoCorrect={false}>
                </EmailTextField>
                <TextInputLogin
                  onChangeText={this._onChangeTextUsername}
                  source={Images.USERNAME}
                  placeholder={Constants.STRING.USERNAME}
                  securetextEntry={false}
                  autoCorrect={false}>
                </TextInputLogin>
                <ButtonLogin
                  onPress={this._onPress}
                  titleButton={Constants.STRING.TITLE_BUTTON}>
                </ButtonLogin>
              </View>
            </SafeAreaView>
          </View>
        </KeyboardAvoidingView>
      </DismissKeyboard>
    );
  }
}

const stylesLoginScreen = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.blue,
    alignItems: 'center',
  },
  logo: {width: '100%', resizeMode: 'contain', alignSelf: 'center'},
  form: {justifyContent: 'center', width: '80%'},
});
