import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Signin from './src/screens/Auth/Signin';
import Welcome from './src/screens/Home/Welcome'
import Signup from './src/screens/Auth/Signup';
import AddArticle from './src/screens/Home/AddArticle/AddArticle'
import ListeCommandes from './src/screens/Home/ListeCommandes/ListeCommandes'

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
  ListeCommandes: {
    screen: ListeCommandes
  },
  AddArticle: {
    screen: AddArticle
  }
};

// home stack navigator screens
const AppNavigator = createStackNavigator(screens);

export default createAppContainer(AppNavigator);