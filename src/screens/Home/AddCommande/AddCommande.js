import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput
} from 'react-native';
import { Button, Text } from 'react-native-elements'

class AddCommande extends Component {

  constructor(props){
    super(props);
    this.state = {
      codeCmd: '',
      marchandID: '',
      articles: [],
      sourceCmd: '',
      destinationCmd: '',
      dateAjout: ''
    };
  }

  pressHandlerToAddArticle = () => {
    this.props.navigation.push('Welcome')
  }

  render() {

  return (
    <View style={styles.container}>
      <Text h2 style={styles.header}>Ajouter une commande</Text>
      <TextInput
        style={styles.formInput}
        onChange = {e => this.setState({codeCmd: e.target.value})}
        placeholder='Code'
        id="codeCmd"
        type="text"
        name="codeCmd"
        value={this.state.codeCmd}
      />
      <TextInput
        style={styles.formInput}
        onChange = {e => this.setState({marchandID: e.target.value})}
        placeholder='Nom'
        id="marchandID"
        type="text"
        name="marchandID"
        value={this.state.marchandID}
      />
      <TextInput
        style={styles.formInput}
        onChange = {e => this.setState({quantityArt: e.target.value})}
        placeholder='Quantité'
        id="quantityArt"
        type="number"
        name="quantityArt"
        value={this.state.quantityArt}
      />
      <TextInput
        style={styles.formInput}
        onChange = {e => this.setState({sourceCmd: e.target.value})}
        placeholder='Source'
        id="sourceCmd"
        type="float"
        name="sourceCmd"
        value={this.state.sourceCmd}
      />
      <TextInput
        style={styles.formInput}
        secureTextEntry={true}
        onChange = {e => this.setState({destinationCmd: e.target.value})}
        placeholder='Volume'
        id="destinationCmd"
        type="float"
        name="destinationCmd"
        value={this.state.destinationCmd}
      />
      <Button
        onPress={this.pressHandlerToAddArticle}
        buttonStyle={styles.switchButton}
        title='Ajouter Commande' />
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
  validationText: {
    marginTop: 8,
    marginBottom: 16,
    color: 'red',
    alignSelf: 'center'
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
  },
  switchButton: {
    width: 200,
    backgroundColor: '#3f51b5'
  }
});

export default AddCommande