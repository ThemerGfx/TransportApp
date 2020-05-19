import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Image
} from 'react-native';
import { Button, Text } from 'react-native-elements'
import logo from '../logo.png'
import axios from 'axios'

class AddArticle extends Component {

  constructor(props){
    super(props);
    this.state = {
      // codeArt: '',
      // nameArt: '',
      // quantityArt: '',
      // weigthArt: '',
      // volumeArt: ''
      nom: "",
      categorie_id:  "",
      owner_id:  "",
      local_id:  ""
    };
    //this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (e) => { 
    console.log("new text"+e)
    this.setState({value: e});
  }

  updateValue = (text, field) => {
    if (field == 'nom')
      {
        this.setState({
          nom: text
        })
      }
    else if (field == 'categorie_id')
    {
      this.setState({
        categorie_id: text
      })
    }
    else if (field == 'owner_id')
    {
      this.setState({
        owner_id: text
      })
    }
    else if (field == 'local_id')
    {
      this.setState({
        local_id: text
      })
    }
  }

  pressHandlerToAddArticle = () => {
    let les_artictles = {}
    les_artictles.nom = this.state.nom
    les_artictles.categorie_id = this.state.categorie_id
    les_artictles.owner_id = this.state.owner_id
    les_artictles.local_id = this.state.local_id
    console.log(les_artictles)

    var url = 'http://192.168.1.2:3000/articles'

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(les_artictles),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
    .then(res => res.json())
    .catch(error => console.error('Error: ', error))
    .then(response => console.log('Success: ', response))
    // this.props.navigation.push('Welcome')
    // console.log(this.state);
    // const articleToAdd = {
    //   nom: this.state.nom,
    //   categorie_id:  this.state.categorie_id,
    //   owner_id:  this.state.owner_id,
    //   local_id:  this.state.local_id
    // }
    // axios.post('http://192.168.1.2:3000/articles', {articleToAdd})
    // .then((response) => {
    //   console.log(response);
    //   console.log(response.data)
    // }, (error) => {
    //   console.log(error);
    // });
  }

  render() {

  return (
    <View style={{flex: 1}}>
      <Image style={styles.logo} source={logo}/>
      <View style={styles.container}>
        <Text h2 style={styles.header}>Ajouter un article</Text>
        <TextInput
          style={styles.formInput}
          // onChange = {this.handleChange}
          onChangeText = { (text) => this.updateValue(text, 'nom')}
          placeholder='Nom'
          id="nom"
          type="text"
          name="nom"
          defaultValue={this.state.nom}
        />
        <TextInput
          style={styles.formInput}
          // onChange = {this.handleChange}
          onChangeText = { (text) => this.updateValue(text, 'categorie_id')}
          placeholder='CatégorieID'
          id="categorie_id"
          type="text"
          name="categorie_id"
          defaultValue={this.state.categorie_id}
        />
        <TextInput
          style={styles.formInput}
          // onChange = {this.handleChange}
          onChangeText = { (text) => this.updateValue(text, 'owner_id')}
          placeholder='OwnerID'
          id="owner_id"
          type="text"
          name="owner_id"
          defaultValue={this.state.owner_id}
        />
        <TextInput
          style={styles.formInput}
          onChangeText = { (text) => this.updateValue(text, 'local_id')}
          // onChange = {this.handleChange}
          placeholder='LocalID'
          id="local_id"
          type="text"
          name="local_id"
          defaultValue={this.state.local_id}
        />
        {/* <TextInput
          style={styles.formInput}
          onChange = {e => this.setState({volumeArt: e.target.value})}
          placeholder='Volume'
          id="volumeArt"
          type="float"
          name="volumeArt"
          value={this.state.volumeArt}
        /> */}
        <Button
          onPress={this.pressHandlerToAddArticle}
          buttonStyle={styles.loginButton}
          title='Ajouter Article' />
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
    // backgroundColor: '#ECDAAC',
  },
  logo: {
    width: 70,
    height: 70,
    marginLeft: 10,
    marginTop: 30
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
    padding: 8,
  },
  loginButton: {
    width: 200,
    marginBottom: 16,
    backgroundColor: '#BB2333',
  }
});

export default AddArticle