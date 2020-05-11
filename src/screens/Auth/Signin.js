import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Icon,
  Image
} from 'react-native';
import { Button, Text } from 'react-native-elements'
import logo from './logo.png'

class Signin extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      text: '',
      email: '',
      password: ''
    }
  }

  pressHandlerAuth = () => {
    this.props.navigation.push('Welcome')
  }
  pressHandlerToSignUp = () => {
    this.props.navigation.push('Signup')
  }

  render() {

    return (
      <View style={styles.container}>
          <Image style={styles.logo} source={logo}/>
          <TextInput
            style={styles.formInput}
            onChange = {e => this.setState({email: e.target.value})}
            placeholder='Email'
          />
          <TextInput
            style={styles.formInput}
            secureTextEntry={true}
            onChange = {e => this.setState({password: e.target.value})}
            placeholder='Password'
          />
          <Button
            onPress={this.pressHandlerAuth}
            buttonStyle={styles.loginButton}
            title='Sign in' />
          <Button
            buttonStyle={styles.switchButton}
            onPress={this.pressHandlerToSignUp}
            title='Switch to Sign up'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 60
  },
  logo: {
    width: 250,
    height: 250
  },
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#ECDAAC'
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
    backgroundColor: '#BB2333',
  },
  switchButton: {
    width: 200,
    backgroundColor: '#000000'
  }
});

export default Signin