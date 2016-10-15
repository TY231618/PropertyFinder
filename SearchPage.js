'use strict';

//This is a destructuring assignment, which lets you extract multiple object properties
//and assign them to variables using a single statement. As a result, the rest of your code
//can drop the React prefix; for example, you can refer directly to StyleSheet rather than ReactNative.StyleSheet.
import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicator,
  Image
} from 'react-native';

var styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  }
});

class SearchPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.description}>
          Search for houses to buy!
        </Text>
        <Text style={styles.description}>
          Search by place-name, postcode or search near your location.
        </Text>
      </View>
    );
  }
}

//This exports the SearchPage class, which permits its use in other files.
module.exports = SearchPage;
