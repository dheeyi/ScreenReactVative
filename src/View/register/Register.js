import React from 'react';
import {StyleSheet, View, TextInput, Text, TouchableOpacity} from 'react-native';

import Constants from '../../Config/Constants';
import Images from '../../Config/Images';
import Colors from '../../Config/Colors';
import ButtonLogin from '../../Components/login/Button';

const RegisterScreen = ({onChangeTextEmail, onChangeTextPassword, onPressRegister, navigator}) => {
  return (
    <View style={styles.container}>
      <Text>Register Screen</Text>
      <ButtonLogin
        onPress={navigator.navigate()}
        titleButton={Constants.STRING.TITLE_BUTTON}>
      </ButtonLogin>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  }
});

export default RegisterScreen;
