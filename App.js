import React, { Component } from 'react';

import { StyleSheet, View } from 'react-native';

import AppNavigator from './AppNavigator';


class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <AppNavigator headerMode="none"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
  },
});

export default App