import React, { Component } from 'react';

import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux';
import { reduxFirestore, getFirestore, createFirestoreInstance} from 'redux-firestore';
import { ReactReduxFirebaseProvider  } from 'react-redux-firebase';
import thunk from 'redux-thunk';

import AppNavigator from './AppNavigator';
import rootReducer from './src/Components/Store/Reducers/RootReducer'
import firebase from './Firebase/fbConfig'

class App extends Component {
  render() {

    const store = createStore(rootReducer,
      compose (
        applyMiddleware (
            thunk.withExtraArgument ( getFirestore )
        ),
        reduxFirestore ( firebase )
      )
    )

    const rrfProps = {
      firebase,
      config: {},
      dispatch: store.dispatch,
      createFirestoreInstance // <- needed if using firestore
    }

    return (
      <Provider store = {store}>
        <ReactReduxFirebaseProvider { ...rrfProps }>
          <View style={styles.container}>
            <AppNavigator/>
          </View>
        </ReactReduxFirebaseProvider>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App