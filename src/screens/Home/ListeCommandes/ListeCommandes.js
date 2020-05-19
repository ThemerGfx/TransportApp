import React from 'react';
import { FlatList, Text, View, TouchableHighlight, Image, Button } from 'react-native';
import styles from './styles';
import { commandes } from '../../../data/dataArrays';
import { getCategoryName } from '../../../data/MockDataAPI';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';

import axios from 'axios'

export default class ListeCommandes extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      listArticle: []
    };
  }

  componentDidMount() {
    // axios.get("192.168.1.2:3000/articles")
    // .then((response) => {
    //   this.setState({
    //     listArticle: response.data
    //   })
    // })
    // return fetch('192.168.1.2:3000/articles')
    // .then( (response) => response.json() )
    // .then( (responseJson) => {
    //   this.setState({
    //     listArticle: responseJson.article
    //   })
    // })
    // .catch((error) => {
    //   console.log(error)
    // })
  }

  onPressRecipe = item => {
    this.props.navigation.navigate('Signin', { item });
  };

  renderRecipes = ({ item }) => (
    <TouchableHighlight key={item.code}>
      <View style={styles.container} key={item.code}>
        <Text style={{color: '#DFBC5C'}}>Date: <Text style={styles.title}>{item.nom}</Text></Text>
        <Text style={{color: '#DFBC5C'}}>Source: <Text style={styles.title}>{item.categorie_id}</Text></Text>
        <Text style={{color: '#DFBC5C'}}>Destination: <Text style={styles.title}>{item.local_id}</Text></Text>
        <Icon name='check-circle' style={styles.icon} onPress={() => this.onPressRecipe(item)}/>
      </View>
    </TouchableHighlight>
  );

  pressHandlerToSignUp = () => {
    this.props.navigation.push('AddArticle')
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
      <View>
          {/* <FlatList
            vertical
            showsVerticalScrollIndicator={false}
            numColumns={2}
            data={commandes}
            renderItem={this.renderRecipes}
            keyExtractor={item => `${item.code}`}
          /> */}
          <FlatList
            vertical
            showsVerticalScrollIndicator={false}
            numColumns={2}
            data={this.state.listArticle}
            renderItem={this.renderRecipes}
            keyExtractor={item => `${item.code}`}
          >
          {/* {
            commandes.map((item) => 
              <TouchableHighlight key={item.code}>
                <View style={styles.container} key={item.code}>
                  <Text style={{color: '#DFBC5C'}}>Date: <Text style={styles.title}>{item.dateAjout}</Text></Text>
                  <Text style={{color: '#DFBC5C'}}>Source: <Text style={styles.title}>{item.source}</Text></Text>
                  <Text style={{color: '#DFBC5C'}}>Destination: <Text style={styles.title}>{item.destination}</Text></Text>
                  <Icon name='check-circle' style={styles.icon} onPress={() => this.onPressRecipe(item)}/>
                </View>
              </TouchableHighlight>
            )} */}
            </FlatList>
          </View>
      </View>
    );
  }
}
