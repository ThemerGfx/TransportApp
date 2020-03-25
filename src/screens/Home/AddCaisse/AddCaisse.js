import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput
} from 'react-native';
import { Button, Text } from 'react-native-elements'

class AddCaisse extends Component {

  constructor(props){
    super(props);
    this.state = {
        montant: '',
        devis: ''
    };
  }

  pressHandlerToAddArticle = () => {
    this.props.navigation.push('Welcome')
  }

  render() {

  return (
    <View style={styles.container}>
      <Text h2 style={styles.header}>Ajouter un montant</Text>
      <TextInput
        style={styles.formInput}
        onChange = {e => this.setState({codeCmd: e.target.value})}
        placeholder='Montant'
        id="montant"
        type="float"
        name="montant"
        value={this.state.montant}
      />
      <TextInput
        style={styles.formInput}
        onChange = {e => this.setState({marchandID: e.target.value})}
        placeholder='Devis'
        id="devis"
        type="text"
        name="devis"
        value={this.state.devis}
      />
      <Button
        onPress={this.pressHandlerToAddArticle}
        buttonStyle={styles.loginButton}
        title='Ajouter Montant' />
    </View>
  );
  }
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 60
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formInput: {
    width: 300,
    height: 50,
    borderColor: '#B5B4BC',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8
  },
  loginButton: {
    width: 200,
    marginBottom: 16,
    backgroundColor: '#6f37be',
  }
});

export default AddCaisse