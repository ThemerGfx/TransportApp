import React from 'react';
import {
  StyleSheet,
  View,
  TextInput
} from 'react-native';
import { Button, Text } from 'react-native-elements'

const Signin = ({navigation}) => {

  const pressHandlerAuth = () => {
    navigation.push('Welcome')
  }
  const pressHandlerToSignUp = () => {
    navigation.push('Signup')
  }

  return (
    <View style={styles.container}>
      <Text h2 style={styles.header}>Transport App</Text>
      <TextInput
        style={styles.formInput}
        onChangeText={text => props.setFieldValue('email', text)}
        placeholder='email'
      />
      <TextInput
        style={styles.formInput}
        secureTextEntry={true}
        onChangeText={text => props.setFieldValue('password', text)}
        placeholder='password'
      />
      <Button
        onPress={pressHandlerAuth}
        buttonStyle={styles.loginButton}
        title='Sign in' />
      <Button
        backgroundColor='transparent'
        color='black'
        buttonStyle={styles.switchButton}
        onPress={pressHandlerToSignUp}
        title='Switch to Sign up'/>
    </View>
  );
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