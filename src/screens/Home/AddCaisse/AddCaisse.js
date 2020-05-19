import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Image
} from 'react-native';
import { Button, Text } from 'react-native-elements'
import logo from '../logo.png'

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
    <View style={{flex: 1}}>
      <Image style={styles.logo} source={logo}/>
      <View style={styles.container}>
        <Text h2 style={styles.header}>Ajouter un montant</Text>
        <TextInput
          style={styles.formInput}
          onChange = {e => this.setState({montant: e.target.value})}
          placeholder='Montant'
          id="montant"
          type="float"
          name="montant"
          value={this.state.montant}
        />
        <TextInput
          style={styles.formInput}
          onChange = {e => this.setState({devis: e.target.value})}
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
    </View>
  );
  }
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 40
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50
  },  
  logo: {
    width: 70,
    height: 70,
    marginLeft: 10,
    marginTop: 30
  },
  formInput: {
    width: 300,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8
  },
  loginButton: {
    width: 200,
    marginBottom: 16,
    backgroundColor: '#BB2333',
  }
});

export default AddCaisse