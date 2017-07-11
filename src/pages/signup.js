'use strict';
import React , {Component} from 'react';
import  {
    AppRegistry,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDFVnxKxZMMMfFsb6f8eUWdorPvXUPKNew",
    authDomain: "fir-demoapp-9a5b6.firebaseapp.com",
    databaseURL: "https://fir-demoapp-9a5b6.firebaseio.com",
    projectId: "fir-demoapp-9a5b6",
    storageBucket: "fir-demoapp-9a5b6.appspot.com",
    messagingSenderId: "212488847729"
};
firebase.initializeApp(config);


export default class signup extends Component {

    constructor(props){
        super(props);

    }

    authenticate = (token) => {
        const provider = firebase.auth.FacebookAuthProvider;
        const credential = provider.credential(token);
        return firebase.auth().signInWithCredential(credential)
    };


    login = async () => {
        const ADD_ID = '410144346023674';
        const options = {
            permissions: ['public_profile', 'email'],
        };
        const {type, token} = await Exponent.Facebook.logInWithReadPermissionsAsync(ADD_ID, options)
        if (type === 'success') {
            const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`)
            console.log(await response.json())
            this.authenticate(token)
        }
    };

    render() {
        return (
            <View >
                <TouchableOpacity onPress={this.login()}>

                </TouchableOpacity>
            </View>
        );
    }
}

AppRegistry.registerComponent('signup', () => signup);