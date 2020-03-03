import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput
} from 'react-native';
import { connect } from 'react-redux'
import { Button, Text } from 'react-native-elements'
import { signUp } from '../Store/Actions/AuthActions'

class Signup extends Component {

  constructor(props){
    super(props);
    this.state = {
      firstname: '',
      // lastname: '',
      // phone: '',
      email: '',
      password: ''
    };
  }

  pressHandlerAuth = () => {
    this.props.signUp(this.state)
    this.props.navigation.push('Signin')
  }
  pressHandlerToSignUp = () => {
    this.props.navigation.push('Signup')
  }
  // onChangeText = () => {
  //   this.setState({
  //     [ e.target.id ]: e.target.value
  //   })
  // }
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
      {/* <TextInput
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
      /> */}
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
        onPress={this.pressHandlerAuth}
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

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}


export default connect( mapStateToProps, {signUp} )( Signup )