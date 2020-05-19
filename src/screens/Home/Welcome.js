import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text
} from 'react-native';
import { Button, Icon } from 'react-native-elements'
import logo from './logo.png'

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
      <View style={{flex: 1}}>
        <View style={{flexDirection: 'column'}}>
          <Image style={styles.logo} source={logo}/>
          {/* <Button title='retour' style={styles.retour}></Button> */}
        </View>
        <View style={styles.container}>
          <Text h2 style={styles.header}>Ajouter un article</Text>
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 20,
    fontSize: 30,
    fontWeight: 'bold'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#DFBC5C'
  },
  logo: {
    width: 70,
    height: 70,
    marginLeft: 10,
    marginTop: 30
  },
  retour: {
    marginTop: 40
  },
  to_liste: {
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
  },
  to_article: {
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
  },
  to_montant: {
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