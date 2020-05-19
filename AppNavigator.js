import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs'

import Signin from './src/screens/Auth/Signin';
import Welcome from './src/screens/Home/Welcome'
import Signup from './src/screens/Auth/Signup';
import AddArticle from './src/screens/Home/AddArticle/AddArticle'
import ListeCommandes from './src/screens/Home/ListeCommandes/ListeCommandes'
import AddCaisse from './src/screens/Home/AddCaisse/AddCaisse'
import HistoriqueCmd from './src/screens/Home/HistoriqueCmd/HistoriqueCmd'


const ProjectStack = createBottomTabNavigator({
  Welcome: {
    screen: Welcome,
  },  
  Liste: {
    screen: ListeCommandes
  },
  Article: {
    screen: AddArticle
  },
  Caisse: {
    screen: AddCaisse
  },
  Historique: {
    screen: HistoriqueCmd
  }
});

const screens = {
  Signin: {
    screen: Signin,
  },
  Signup: {
    screen: Signup
  },
  Welcome: {
    screen: Welcome,
  },  
  Liste: {
    screen: ListeCommandes
  },
  Article: {
    screen: AddArticle
  },
  Caisse: {
    screen: AddCaisse
  },
  Historique: {
    screen: HistoriqueCmd
  }
}

// home stack navigator screens
const AppNavigator = createStackNavigator(screens);

export default createAppContainer(AppNavigator);