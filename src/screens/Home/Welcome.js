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
    this.props.navigation.navigate('Liste')
  }
  pressHandlerArticle = () => {
    this.props.navigation.navigate('Article')
  }
  pressHandlerCaisse = () => {
    this.props.navigation.navigate('Caisse')
  }
  pressHandlerHistoriqueCmd = () => {
    this.props.navigation.navigate('Historique')
  }

  render() {

    return (
      <View style={styles.container}>
        <Button
          onPress={this.pressHandlerListe}
          buttonStyle={styles.to_liste}
          title='Liste des commandes'
        />
        <Button
          buttonStyle={styles.to_article}
          onPress={this.pressHandlerArticle}
          title='Ajouter un article'
        />
        <Button
          buttonStyle={styles.to_montant}
          onPress={this.pressHandlerCaisse}
          title='Ajouter un montant'
        />
        <Button
          buttonStyle={styles.to_historique}
          onPress={this.pressHandlerHistoriqueCmd}
          title='Consulter votre historique'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ECDAAC'
  },
  to_liste: {
    width: 200,
    height: 100,
    marginBottom: 16,
    backgroundColor: '#BB2333',
    shadowColor: "#0000",
    shadowOffset: {
      width: 2,
      height: 12,
    },
    shadowOpacity: 2.58,
    shadowRadius: 16.00,
    elevation: 24,
  },
  to_article: {
    width: 200,
    height: 100,
    marginBottom: 16,
    backgroundColor: '#000000',
    shadowColor: "#0000",
    shadowOffset: {
      width: 2,
      height: 12,
    },
    shadowOpacity: 2.58,
    shadowRadius: 16.00,
    elevation: 24,
  },
  to_montant: {
    width: 200,
    height: 100,
    marginBottom: 16,
    backgroundColor: '#BA9356',
    shadowColor: "#0000",
    shadowOffset: {
      width: 2,
      height: 12,
    },
    shadowOpacity: 2.58,
    shadowRadius: 16.00,
    elevation: 24,
  },
  to_historique: {
    width: 200,
    height: 100,
    marginBottom: 16,
    backgroundColor: '#DFBC5C',
    shadowColor: "#0000",
    shadowOffset: {
      width: 2,
      height: 12,
    },
    shadowOpacity: 2.58,
    shadowRadius: 16.00,
    elevation: 24,
  }
});

export default Welcome