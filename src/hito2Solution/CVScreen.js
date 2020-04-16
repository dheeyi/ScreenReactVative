import React, {Component} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

import CVLogo from './CVLogo';
import CVCiudad from './CVCiudad';
import Button from '../Components/login/Button';

import Constants from '../Config/Constants';
import Colors from '../Config/Colors';

export default class CVScreen extends Component{
  constructor(props) {
    super(props);
    this.state = {
      confCB: 0,
      sospCB: 0,

      confSC: 0,
      sospSC: 0,

      confOR: 0,
      sospOR: 0,

      search: ''
    };

    this._onChangeTextConfCB = this._onChangeTextConfCB.bind(this);
    this._onChangeTextSospCB = this._onChangeTextSospCB.bind(this);

    this._onChangeTextConfSC = this._onChangeTextConfSC.bind(this);
    this._onChangeTextSospSC = this._onChangeTextSospSC.bind(this);

    this._onChangeTextConfOR = this._onChangeTextConfOR.bind(this);
    this._onChangeTextSospOR = this._onChangeTextSospOR.bind(this);

    this._onChangeTextInputSearch = this._onChangeTextInputSearch.bind(this);
    this._onPressCalcular = this._onPressCalcular.bind(this);
  }

  _onChangeTextConfCB(confCB) {
    this.setState({
      confCB: confCB
    });
  }
  _onChangeTextSospCB(sospCB) {
    this.setState({
      sospCB: sospCB
    });
  }

  _onChangeTextConfSC(confSC) {
    this.setState({
      confSC: confSC
    });
  }
  _onChangeTextSospSC(sospSC) {
    this.setState({
      sospSC: sospSC
    });
  }

  _onChangeTextConfOR(confOR) {
    this.setState({
      confOR: confOR
    });
  }
  _onChangeTextSospOR(sospOR) {
    this.setState({
      sospOR: sospOR
    });
  }

  _onChangeTextInputSearch(search) {
    this.setState({
      search: search
    });
  }
  _onPressCalcular() {
    let n1CB, n2SC, n3OR, mensaje;

    if (this.state.search === 'conf') {
      n1CB = parseInt(this.state.confCB);
      n2SC = parseInt(this.state.confSC);
      n3OR = parseInt(this.state.confOR);
      mensaje = 'casos confirmados mayor es: ';
    }

    if (this.state.search === 'sosp') {
      n1CB = parseInt(this.state.sospCB);
      n2SC = parseInt(this.state.sospSC);
      n3OR = parseInt(this.state.sospOR);
      mensaje = 'casos sospechosos mayor es: ';
    }

    let mayor = Math.max(n1CB, n2SC, n3OR);
    console.log(mensaje + mayor);
  }

  render() {
    return(
      <View style={styles.container}>
        <CVLogo/>
        <View>
          <CVCiudad
            ciudad={Constants.CB}
            onChangeTextConf={this._onChangeTextConfCB}
            onChangeTextSosp={this._onChangeTextSospCB}>
          </CVCiudad>
          <CVCiudad
            ciudad={Constants.SC}
            onChangeTextConf={this._onChangeTextConfSC}
            onChangeTextSosp={this._onChangeTextSospSC}>
          </CVCiudad>
          <CVCiudad
            ciudad={Constants.OR}
            onChangeTextConf={this._onChangeTextConfOR}
            onChangeTextSosp={this._onChangeTextSospOR}>
          </CVCiudad>
        </View>
        <TextInput
          style={styles.textInput}
          onChangeText={this._onChangeTextInputSearch}
          selectionColor={Colors.blue}
          placeholder={Constants.BUSQUEDA}
          secureTextEntry={false}
          autoCorrect={false}
          placeholderTextColor={Colors.silver}
          underlineColorAndroid="transparent">
        </TextInput>
        <Button
          onPress={this._onPressCalcular}
          titleButton={Constants.CALCULAR}>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    paddingLeft: 16,
  },
  text: {
    color: Colors.black,
    fontSize: 24,
    fontWeight: 'bold',
  },
  textInput: {
    backgroundColor: Colors.white,
    borderColor: Colors.black,
    width: 270,
    paddingLeft: 20,
    marginHorizontal: 40,
    marginBottom: 10,
    height:35
  }
});
