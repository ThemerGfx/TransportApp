import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Icon
} from 'react-native';
import { Button, Text } from 'react-native-elements'

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
          <Text h2 style={styles.header}>Transport App</Text>
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

export default Signin