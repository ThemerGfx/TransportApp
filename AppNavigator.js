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

const AuthStack = createBottomTabNavigator({
  
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
  },
  // Landing: {
  //   screen: Example,
  //   navigationOptions: {
  //     headerTitle: 'Landing',
  //   },
  // },
  // SignIn: {
  //   screen: Example,
  //   navigationOptions: {
  //     headerTitle: 'Sign In',
  //   },
  // },
  // CreateAccount: {
  //   screen: Example,
    // navigationOptions: {
    //   headerTitle: 'Create Account',
    // },
  // },
  // ForgotPassword: {
  //   screen: Example,
  //   navigationOptions: {
  //     headerTitle: 'Forgot Password',
  //   },
  // },
  // ResetPassword: {
  //   screen: Example,
  //   navigationOptions: {
  //     headerTitle: 'Reset Password',
  //   },
  // },
});

const screens = createStackNavigator({
  Signin: {
    screen: Signin,
  },
  Signup: {
    screen: Signup
  },
    // initialRouteName: 'Welcome',
    // activeColor: '#ffffff',
    // inactiveColor: '#bda1f7'
});

// home stack navigator screens
const AppNavigator = createStackNavigator({AuthStack});

export default createAppContainer(AppNavigator);