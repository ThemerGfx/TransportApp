import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput
} from 'react-native';
import { Button, Text } from 'react-native-elements'

class Signup extends Component {

  constructor(props){
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      phone: '',
      email: '',
      password: '',
      text: ''
    };
  }

  pressHandlerToSignUp = () => {
    this.props.navigation.push('Welcome')
  }
  render() {

  return (
    <View style={styles.container}>
      <Text h2 style={styles.header}>Transport App</Text>
      <TextInput
        style={styles.formInput}
        onChange = {e => this.setState({firstname: e.target.value})}
        placeholder='Nom'
        id="firstname"
        type="text"
        name="firstname"
        value={this.state.firstname}
      />
      <TextInput
        style={styles.formInput}
        onChange = {e => this.setState({lastname: e.target.value})}
        placeholder='Prénom'
        id="lastname"
        type="text"
        name="lastname"
        value={this.state.lastname}
      />
      <TextInput
        style={styles.formInput}
        onChange = {e => this.setState({phone: e.target.value})}
        placeholder='Num Téléphone'
        id="phone"
        type="number"
        name="phone"
        value={this.state.phone}
      />
      <TextInput
        style={styles.formInput}
        onChange = {e => this.setState({email: e.target.value})}
        placeholder='Email'
        id="email"
        type="email"
        name="email"
        value={this.state.email}
      />
      <TextInput
        style={styles.formInput}
        secureTextEntry={true}
        onChange = {e => this.setState({password: e.target.value})}
        placeholder='Password'
        id="password"
        type="password"
        name="password"
        value={this.state.password}
      />
      <Button
        onPress={this.pressHandlerToSignUp}
        buttonStyle={styles.loginButton}
        title='Sign up' />
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

export default Signup