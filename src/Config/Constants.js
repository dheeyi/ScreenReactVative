import {Dimensions} from 'react-native';

const config = {
  SCREEN_WIDTH: Dimensions.get('window').width,
  SCREEN_HEIGHT: Dimensions.get('window').height,
  HEADER_HEIGHT: Dimensions.get('window').height - 46,
};

const strings = {
  NAME_APP: 'GooWia Solutions',
  PASSWORD: 'password',
  USERNAME: 'username',
  TITLE_BUTTON: 'LOG IN',
};

export default {
  CONFIG: config,
  STRING: strings,
}
