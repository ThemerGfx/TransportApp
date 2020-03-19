import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput
} from 'react-native';
import { Button, Text } from 'react-native-elements'

class AddArticle extends Component {

  constructor(props){
    super(props);
    this.state = {
      codeArt: '',
      nameArt: '',
      quantityArt: '',
      weigthArt: '',
      volumeArt: ''
    };
  }

  pressHandlerToAddArticle = () => {
    this.props.navigation.push('Welcome')
  }

  render() {

  return (
    <View style={styles.container}>
      <Text h2 style={styles.header}>Transport App</Text>
      <TextInput
        style={styles.formInput}
        onChange = {e => this.setState({codeArt: e.target.value})}
        placeholder='Code'
        id="codeArt"
        type="text"
        name="codeArt"
        value={this.state.codeArt}
      />
      <TextInput
        style={styles.formInput}
        onChange = {e => this.setState({nameArt: e.target.value})}
        placeholder='Nom'
        id="nameArt"
        type="text"
        name="nameArt"
        value={this.state.nameArt}
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
        onChange = {e => this.setState({weigthArt: e.target.value})}
        placeholder='Poids'
        id="weigthArt"
        type="float"
        name="weigthArt"
        value={this.state.weigthArt}
      />
      <TextInput
        style={styles.formInput}
        secureTextEntry={true}
        onChange = {e => this.setState({volumeArt: e.target.value})}
        placeholder='Volume'
        id="volumeArt"
        type="volumeArt"
        name="volumeArt"
        value={this.state.volumeArt}
      />
      <Button
        onPress={this.pressHandlerToAddArticle}
        buttonStyle={styles.loginButton}
        title='Ajouter Article' />
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

export default AddArticle