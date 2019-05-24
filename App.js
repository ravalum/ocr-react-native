import React from 'react';
import {SafeAreaView} from 'react-native';
import Search from './components/Search'

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <Search/>
      </SafeAreaView>
    );
  }
}
