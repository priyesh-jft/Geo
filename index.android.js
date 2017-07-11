import React , {Component} from 'react';
import  {
    AppRegistry,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import * as Firebase from 'firebase';
var config = {
    apiKey: "AIzaSyDFVnxKxZMMMfFsb6f8eUWdorPvXUPKNew",
    authDomain: "fir-demoapp-9a5b6.firebaseapp.com",
    databaseURL: "https://fir-demoapp-9a5b6.firebaseio.com",
    projectId: "fir-demoapp-9a5b6",
    storageBucket: "fir-demoapp-9a5b6.appspot.com",
    messagingSenderId: "212488847729"
};
firebase.initializeApp(config);


export default class firebaseDemo extends Component {

}
AppRegistry.registerComponent('firebaseDemo', () => firebaseDemo);
