import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Signin from './src/Components/Auth/Signin';
import Welcome from './src/Components/Home/Welcome'
import Signup from './src/Components/Auth/Signup';

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
};

// home stack navigator screens
const AppNavigator = createStackNavigator(screens);

export default createAppContainer(AppNavigator);