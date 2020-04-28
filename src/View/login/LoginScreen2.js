import React, {useState} from 'react';
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

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [username, setUsername] = useState('');
  const [errorUsername, setErrorUsername] = useState('');

  const _validateEmailAddress = () => {
    let isValidEmail = Utils.isValidEmail(email);
    isValidEmail ? setErrorEmail('') : setErrorEmail(Constants.STRING.EMAIL_ERROR);
    return isValidEmail;
  }

  const _validateUsername = () => {
    let  isValidUsername = Utils.isValidField(username);
    isValidUsername ? setErrorUsername('') : setErrorUsername(Constants.STRING.USERNAME_ERROR);
    return isValidUsername;
  }

  const _onPress = () => {
    console.log('press button!!!');
  }

  return (
    <DismissKeyboard>
      <KeyboardAvoidingView style={stylesLoginScreen.container} behavior="height" enabled>
        <View style={stylesLoginScreen.container}>
          <SafeAreaView>
            <LogoLogin style={stylesLoginScreen.logo}/>
            <View style={stylesLoginScreen.form}>
              <EmailTextField
                onChangeText={(email) =>{setEmail(email)}}
                onEndEditing={_validateEmailAddress}
                error={errorEmail}
                source={Images.EMAIL}
                placeholder={Constants.STRING.EMAIL}
                secureTextEntry={false}
                autoCorrect={false}>
              </EmailTextField>
              <TextInputLogin
                onChangeText={(username) =>{setUsername(username)}}
                onEndEditing={_validateUsername}
                error={errorUsername}
                source={Images.USERNAME}
                placeholder={Constants.STRING.USERNAME}
                securetextEntry={false}
                autoCorrect={false}>
              </TextInputLogin>
              <ButtonLogin
                onPress={_onPress}
                titleButton={Constants.STRING.TITLE_BUTTON}>
              </ButtonLogin>
            </View>
          </SafeAreaView>
        </View>
      </KeyboardAvoidingView>
    </DismissKeyboard>
  );
}

const stylesLoginScreen = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.blue,
    alignItems: 'center',
  },
  logo: {
    width: '100%',
    resizeMode: 'contain',
    alignSelf: 'center'
  },
  form: {
    justifyContent: 'center',
    width: '80%'
  },
});

export default LoginScreen;
