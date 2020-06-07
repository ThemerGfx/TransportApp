import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Image
} from 'react-native';
import { Button, Text } from 'react-native-elements'
import logo from './logo.png'

class Profil extends Component {

  constructor(props){
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      phone: '',
      email: ''
    };
  }

  pressHandlerToSignUp = () => {
    // this.props.navigation.push('Welcome')
  }
  render() {

  return (
    <View style={{flex: 1}}>
        <Image style={styles.logo} source={logo}/>
        <View style={styles.container}>
            <Text h2 style={styles.header}>Modifier votre profil</Text>
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
            <Button
                onPress={this.pressHandlerToSignUp}
                buttonStyle={styles.loginButton}
                title='Modifier' />
        </View>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 40
  },
  logo: {
    width: 70,
    height: 70,
    marginLeft: 10,
    marginTop: 30
  },
  container: {
    marginTop: -90,
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
    borderColor: '#000000',
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
    backgroundColor: '#3f51b5'
  }
});

export default Profil