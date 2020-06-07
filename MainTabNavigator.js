import React from 'react';
import { Platform, View, SafeAreaView, Button } from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
// import Icon from '@expo/vector-icons/Ionicons';
import {DrawerItems} from 'react-navigation';
// import { connect } from 'react-redux'
// import firebase from 'firebase';

import TabBarIcon from './components/TabBarIcon';
import Signin from './src/screens/Auth/Signin';
import Welcome from './src/screens/Home/Welcome'
import Signup from './src/screens/Auth/Signup';
import AddArticle from './src/screens/Home/AddArticle/AddArticle'
import ListeCommandes from './src/screens/Home/ListeCommandes/ListeCommandes'
import AddCaisse from './src/screens/Home/AddCaisse/AddCaisse'
import HistoriqueCmd from './src/screens/Home/HistoriqueCmd/HistoriqueCmd'

//import logout from '../src/components/logout'; 
// import { signOut } from '../src/actions/authActions'

const WelcomeStack = createStackNavigator({
  Welcome: Welcome,
});

WelcomeStack.navigationOptions = {
  tabBarLabel: 'Welcome',
  tabBarVisible: false,
  visible: false,
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

// const Welcome2Stack = createStackNavigator({
//   Welcome2: Welcome2Screen,
// });

// Welcome2Stack.navigationOptions = {
//   tabBarLabel: 'Welcome2',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={
//         Platform.OS === 'ios'
//           ? `ios-information-circle${focused ? '' : '-outline'}`
//           : 'md-information-circle'
//       }
//     />
//   ),
// };

const AnimationStack = createStackNavigator({
  AddArticle: AddArticle,
},
{
    defaultNavigationOptions: {
      header: null
    },
});

AnimationStack.navigationOptions = {
  tabBarLabel: 'AjoutArticle',
  header: null,
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'}
    />
  ),
//   drawerIcon: (
//     <Image source={require('../assets/images/home.png')}
//         style={{ height: 24, width: 24}} />
//   )
};

const ProfileStack = createStackNavigator({
  AddCaisse: AddCaisse,
},
{
    defaultNavigationOptions: {
      header: null
    },
});

ProfileStack.navigationOptions = {
  tabBarLabel: 'AjoutCaisse',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const SignatureStack = createStackNavigator({
  HistoriqueCmd: HistoriqueCmd,
});

SignatureStack.navigationOptions = {
  tabBarLabel: 'Historique',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-close-circle'}
    />
  ),
};

const PresenceStack = createStackNavigator({
  ListeCommandes: ListeCommandes,
});

PresenceStack.navigationOptions = {
  tabBarLabel: 'Liste',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-qr-scanner' : 'md-qr-scanner'}
    />
  ),
};

const AppBottomTabNavigator = createBottomTabNavigator({
  Welcome,
  ListeCommandes,
  HistoriqueCmd,
//   TimeLine: {screen: TimeLineScreen},
  AddArticle,
  AddCaisse
},
);

export default (createDrawerNavigator({
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
  },
  AddCaisse: {
    screen: AddCaisse
  },
  HistoriqueCmd: {
    screen: HistoriqueCmd
  }
},
{
  contentComponent:(props) => (
    <View style={{flex:1}}>
      <View style={{ height: 150, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}}>
        {/* <Image source={require('../assets/images/logo.png')} style={{ height: 120, width: 120, borderRaduis: 60}}/> */}
      </View>
        <SafeAreaView forceInset={{ horizontal: 'never' }}>
            <DrawerItems {...props} />
            <Button title="Logout"/>
        </SafeAreaView>
    </View>
  ),
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'
}
));
