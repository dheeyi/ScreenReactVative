import {Dimensions} from 'react-native';

const config = {
  SCREEN_WIDTH: Dimensions.get('window').width,
  SCREEN_HEIGHT: Dimensions.get('window').height,
  HEADER_HEIGHT: Dimensions.get('window').height - 46,
};

const strings = {
  NAME_APP: 'GooWia Solutions',
  PASSWORD: 'Password',
  USERNAME: 'Username',
  TITLE_BUTTON: 'LOG IN',
  EMAIL: 'Email',
  EMAIL_ERROR: 'Email Incorrecto!!!',
  USERNAME_ERROR: 'Username invalido!!!',
};

export default {
  CONFIG: config,
  STRING: strings,
}
