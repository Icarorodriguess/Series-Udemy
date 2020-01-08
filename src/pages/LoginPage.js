import React from 'react';

import {Text, View, TextInput, StyleSheet, Button, ActivityIndicator, Alert} from 'react-native';

import firebase from '@firebase/app';
import '@firebase/auth';
import { tryLogin } from '../actions';
import { connect } from  'react-redux'
import FormRow from '../components/FormRow';

export default class LoginPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      mail: '',
      password: '',
      isLoading: false,
      message: ''
    }
  }

  componentDidMount() {
    const firebaseConfig = {
        apiKey: "AIzaSyCGuHb8Dc5P0_M2k2Z3z4CUjuB1_EZ9o7k",
        authDomain: "series-87927.firebaseapp.com",
        databaseURL: "https://series-87927.firebaseio.com",
        projectId: "series-87927",
        storageBucket: "series-87927.appspot.com",
        messagingSenderId: "730694609386",
        appId: "1:730694609386:web:3943cc192e79aecd39aa93",
        measurementId: "G-6712ET0ZYZ"
    };
    firebase.initializeApp(firebaseConfig);
  }  
    tryLogin() {
      this.setState({isLoading: true, message: ''});
      const { mail : email, password } = this.state;
      this.props.tryLogin({email, password})
    }
  onChangeHandler(field, value) {
    this.setState({
      [field] : value
    });
  }

  
  getMessageByErrorCode(errorCode) {
    switch(errorCode) {
      case 'auth/wrong-password':
        return 'Senha incorreta';
      case 'auth/user-not-found':
        return 'Usuário não encontrado';
    default : 
      return 'Erro desconhecido';

    }
  }
  renderButton() {
    if (this.state.isLoading) { 
      return <ActivityIndicator />      
    }
    return (
        <Button 
          title="Entrar"
          onPress={() => this.tryLogin()}
        />
    )
  }
  renderMessage() {
    const { message } = this.state;
    if(!message) 
    return null;
    return (
      <View>
        <Text>{ message }</Text>
      </View>
    )
  }
  render() {
        return (
            <View style={styles.container}>
              <FormRow first>
                  <TextInput 
                    placeholder="user@mail.com"
                    placeholderTextColor="#999"
                    autoCapitalize= "none"
                    autoCorrect={false}
                    style={styles.input}
                    value={this.state.mail}
                    keyboardType="email-address"
                    onChangeText={value => this.onChangeHandler('mail', value)}
                    />
              </FormRow>
              <FormRow last>
                  <TextInput 
                    placeholder="********"
                    secureTextEntry
                    style={styles.input}
                    value={this.state.password}
                    onChangeText={value => this.onChangeHandler('password', value)}
                    />
              </FormRow>
              { this.renderButton() }
              { this.renderMessage()}
            </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  input: {
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
  },
})

export default connect(null , { tryLogin })(LoginPage)