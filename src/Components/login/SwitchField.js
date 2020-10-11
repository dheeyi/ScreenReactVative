import React from 'react';
import {StyleSheet, View, Text, Switch} from 'react-native';

import Colors from '../../Config/Colors';

const SwitchField = ({isEnabled, toggleSwitch, text}) => {
  return (
    <View style={Styles.view}>
      <Text style={Styles.inlineText}>{text}</Text>
      <Switch
        trackColor={{false: Colors.white2, true: Colors.dark}}
        thumbColor={isEnabled ? Colors.appPrimary : Colors.white}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={!isEnabled}
      />
    </View>
  );
};

const Styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  inlineText: {
    width: 57,
    top: 2,
    color: Colors.white,
    fontWeight: 'normal',
    textDecorationLine: 'underline',
  },
});

export default SwitchField;
