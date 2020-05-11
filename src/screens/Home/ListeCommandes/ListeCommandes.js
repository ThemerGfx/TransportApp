import React from 'react';
import { FlatList, Text, View, TouchableHighlight, Image, Button } from 'react-native';
import styles from './styles';
import { commandes } from '../../../data/dataArrays';
import { getCategoryName } from '../../../data/MockDataAPI';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ListeCommandes extends React.Component {

  onPressRecipe = item => {
    this.props.navigation.navigate('Signin', { item });
  };

  renderRecipes = ({ item }) => (
    <TouchableHighlight key={item.code}>
      <View style={styles.container} key={item.code}>
        <Text>Date: <Text style={styles.title}>{item.dateAjout}</Text></Text>
        <Text>Source: <Text style={styles.title}>{item.source}</Text></Text>
        <Text>Destination: <Text style={styles.title}>{item.destination}</Text></Text>
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
      <View style={{ flex: 1 }}>
          <FlatList
            vertical
            showsVerticalScrollIndicator={false}
            numColumns={2}
            data={commandes}
            renderItem={this.renderRecipes}
            keyExtractor={item => `${item.code}`}
          />
          </View>
      </View>
    );
  }
}
