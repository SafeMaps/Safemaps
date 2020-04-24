import React, {Component} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {createUser, saveKey} from '../AccountService';

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {email: '', password: '', confirm_pass: '', busy: false};
  }
  validate_fields = () => {
    const {email, password, confirm_pass} = this.state;
    var regx: *;
    regx = new RegExp(/\b[\w.-]+@[\w.-]+\.\w{2,4}\b/);
    var bool = regx.test(email);
    if (email === '' || password === '' || confirm_pass === '') {
      Alert.alert('Please fill out all fields');
      return false;
    } else if (password !== confirm_pass) {
      Alert.alert("Password don't match");
      return false;
    } else if (!bool) {
      Alert.alert('Invalid email format. Must be example@test.com');
      return false;
    }
    return true;
  };
  createAccount = () => {
    // this will make an api call to back server to create an account
    if (this.validate_fields()) {
      const {email, password} = this.state;
      const credential = {email: email, password: password};
      createUser(credential).then(token => {
        if (token === false) {
          console.log('User already exist');
        } else {
          saveKey(token);
          this.setState({busy: true});
          this.props.navigation.navigate('SideMenu_guess');
        }
      });
    }
  };
  get_indicator_status = () => {
    const {busy} = this.state;
    return busy;
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Image source={require('../assets/pin.png')} style={styles.pin} />
        <ActivityIndicator
          rowSpan="4"
          animating={this.get_indicator_status()}
        />
        <TextInput
          placeholder="Email"
          placeholderTextColor="grey"
          pattern={[]}
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
        <TextInput
          placeholder="Confirm Password"
          placeholderTextColor="grey"
          style={styles.input}
          secureTextEntry={true}
          onChangeText={value => this.setState({confirm_pass: value})}
        />
        <TouchableOpacity
          style={styles.register}
          onPress={() => this.createAccount()}>
          <Text style={{color: 'white', fontSize: 15}}> Register </Text>
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
  form: {
    flex: 1,
    justifyContent: 'space-between',
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
  register: {
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
  activity: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
