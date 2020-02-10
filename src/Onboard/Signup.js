import React, {Component } from 'react';
import {Image,StyleSheet,View,Text,StatusBar,Button, SafeAreaView, KeyboardAvoidingView, Dimensions,
TextInput} from 'react-native';
import {Header,Colors} from 'react-native/Libraries/NewAppScreen';

export default class Signup extends Component{
  render(){
    return(

    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Image source={require('../assets/pin.png')} style={styles.pin} />
      <TextInput  placeholder="Email"style={styles.input}/>
      <TextInput placeholder="Password"  style={styles.input} />
      <TextInput placeholder="Confirm Password" style={styles.input} />
      </KeyboardAvoidingView>
  );
 }
}
  const window = Dimensions.get('window');
  const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#384E79',
    alignItems : 'center',
    justifyContent:'center',
    },
  form: {
    flex: 1,
    justifyContent: 'space-between',
  },
  input: {
    height: 50,
    backgroundColor: '#fff',
    marginHorizontal: 10,
    marginVertical: 5,
   // paddingVertical: 5,
    // paddingHorizontal: 15,
    width: window.width - 30
  },
  pin: {
    height: 240,
    width: 240,
    resizeMode: 'contain',
    marginBottom: 20,
    padding:10,
    marginTop:20
  },
  register:{
    marginBottom:20,
    width:window.width -100,
    alignItems:'center',
    justifyContent:'center',
    height:50,
    backgroundColor: '#ffae'
  }
});
