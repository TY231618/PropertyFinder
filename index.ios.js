//strict mode allows improved error handling and disables some less-than-ideal JS language features
'use strict';

//loads the react and react-native modules
var React = require('react');
var ReactNative = require('react-native');
var SearchPage = require('./SearchPage');

//StyleSheet class used to style the app
var styles = ReactNative.StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  container: {
    flex: 1
  }
});

//PropertyFinderApp extends React.Component, the basic building block of the React UI.
//Components contain immutable properties, mutable state variables and expose a method for rendering.
class HelloMate extends React.Component {
  render() {
    // return React.createElement(ReactNative.Text, {style: styles.text}, "Hello Rafa Benitez!");
    return <ReactNative.Text style={styles.text}>Hello Rafa (Again)</ReactNative.Text>;
    //The above is JSX, or JavaScript syntax extension, which mixes HTML-like syntax directly in your JavaScript code;
  }
}

class PropertyFinderApp extends React.Component {
  render() {
    return (
      <ReactNative.NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Let\'s Find a Home',
          //This is using the new component, SearchPage, which I added.
          component: SearchPage
        }}/>
    );
  }
}

//AppRegistry defines the entry point to the application and provides the root component.
ReactNative.AppRegistry.registerComponent('PropertyFinder', function() { return PropertyFinderApp });
