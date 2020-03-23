import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import { Button } from 'react-native-elements'

class Welcome extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  pressHandlerListe = () => {
    this.props.navigation.push('ListeCommandes')
  }
  pressHandlerArticle = () => {
    this.props.navigation.push('AddArticle')
  }

  render() {

    return (
      <View style={styles.container}>
        <Button
          onPress={this.pressHandlerListe}
          buttonStyle={styles.loginButton}
          title='Liste des commandes' />
        <Button
          buttonStyle={styles.loginButton}
          onPress={this.pressHandlerArticle}
          title='Ajouter un article'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButton: {
    width: 200,
    height: 100,
    marginBottom: 16,
    backgroundColor: '#6f37be',
  }
});

export default Welcome