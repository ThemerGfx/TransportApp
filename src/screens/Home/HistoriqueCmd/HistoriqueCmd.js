import React from 'react';
import { FlatList, Text, View, TouchableHighlight, Image } from 'react-native';
import styles from './styles';
import { commandes } from '../../../data/dataArrays';


export default class ListeCommandes extends React.Component {

  onPressRecipe = item => {
    this.props.navigation.navigate('Signin', { item });
  };

  renderRecipes = ({ item }) => (
    <TouchableHighlight onPress={() => this.onPressRecipe(item)}>
      <View style={styles.containerHisto}>
        <Text>Date: <Text style={styles.title}>{item.dateAjout}</Text></Text>
        <Text>Source: <Text style={styles.title}>{item.source}</Text></Text>
        <Text>Destination: <Text style={styles.title}>{item.destination}</Text></Text>
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
