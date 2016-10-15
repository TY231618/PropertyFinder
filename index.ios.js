//strict mode allows improved error handling and disables some less-than-ideal JS language features
'use strict';

//loads the react and react-native modules
var React = require('react');
var ReactNative = require('react-native');

//StyleSheet class used to style the app
var styles = ReactNative.StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  }
});

//PropertyFinderApp extends React.Component, the basic building block of the React UI.
//Components contain immutable properties, mutable state variables and expose a method for rendering.
class PropertyFinderApp extends React.Component {
  render() {
    return React.createElement(ReactNative.Text, {style: styles.text}, "Hello Rafa Benitez!");
  }
}

//AppRegistry defines the entry point to the application and provides the root component.
ReactNative.AppRegistry.registerComponent('PropertyFinder', function() { return PropertyFinderApp });
