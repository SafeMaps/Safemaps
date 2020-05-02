import React, {Component} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {signIn} from '../AccountService';

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {email: '', password: ''};
  }

  check_fields = () => {
    const {email, password} = this.state;
    var regx: *;
    regx = new RegExp(/\b[\w.-]+@[\w.-]+\.\w{2,4}\b/);
    var bool = regx.test(email);
    if (email === '' || password === '') {
      Alert.alert('Please fill out all fields');
      return false;
    } else if (!bool) {
      Alert.alert('Invalid email format. Must be example@test.com');
      return false;
    }
    return true;
  };
  make_Api_call = () => {
    if (this.check_fields()) {
      const credentials = {email: this.email, password: this.password};
      console.log(credentials)
      signIn(credentials).then(token => {
        console.log('The token im returning :' + token);
        // check response
        // save token on phone storage for othe calls
        // transition to maps screen
      });
    }
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Image source={require('../assets/pin.png')} style={styles.pin} />
        <TextInput
          placeholder="Email"
          placeholderTextColor="grey"
          style={styles.input}
          onChangeText={value => this.setState({email: value})}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="grey"
          style={styles.input}
          secureTextEntry={true}
          onChangeText={value => this.setState({password: value})}
        />
        <TouchableOpacity
          style={styles.signin}
          onPress={() => this.make_Api_call()}>
          <Text style={{color: 'white', fontSize: 15}}> Sign in </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#384E79',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 42,
    width: '90%',
    borderBottomWidth: 1,
    backgroundColor: '#fff',
    fontSize: 20,
    borderRadius: 10,
    marginBottom: '5%',
    color: 'grey',
  },
  pin: {
    height: 230,
    width: 230,
    resizeMode: 'contain',
    marginBottom: 100,
    padding: 10,
  },
  signin: {
    borderWidth: 1,
    height: 42,
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    backgroundColor: '#384E79',
    borderColor: '#0EE8DE',
    alignSelf: 'center',
    textAlign: 'center',
  },
  ImageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    top: 489,
    left: 20,
    position: 'absolute',
  },
});

