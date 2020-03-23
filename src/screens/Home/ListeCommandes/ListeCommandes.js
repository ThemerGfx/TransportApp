import React from 'react';
import { FlatList, Text, View, TouchableHighlight, Image } from 'react-native';
import styles from './styles';
import { recipes } from '../../../data/dataArrays';
import { getCategoryName } from '../../../data/MockDataAPI';


export default class ListeCommandes extends React.Component {

  onPressRecipe = item => {
    this.props.navigation.navigate('Signin', { item });
  };

  renderRecipes = ({ item }) => (
    <TouchableHighlight onPress={() => this.onPressRecipe(item)}>
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item.photo_url }} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
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
            data={recipes}
            renderItem={this.renderRecipes}
            keyExtractor={item => `${item.recipeId}`}
          />
        </View>
      </View>
    );
  }
}
