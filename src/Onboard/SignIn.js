import React, {Component } from 'react';
import {Image,StyleSheet,View,Text,StatusBar,Button, SafeAreaView, KeyboardAvoidingView, Dimensions,
TextInput, TouchableOpacity} from 'react-native';
import {Header,Colors} from 'react-native/Libraries/NewAppScreen';

export default class SignIn extends Component{
  render(){
    return(

    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Image source={require('../assets/pin.png')} style={styles.pin} />
      <TextInput  placeholder="Email"style={styles.input}/>
      <TextInput placeholder="Password"  style={styles.input} />
      <TouchableOpacity style= {styles.signin}>
        <Text style={{color:'white',fontSize: 15}}> Sign in </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>

  );
 }
}
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
    height: 42,
    width:"90%",
    borderBottomWidth:1,
    backgroundColor: '#fff',
    fontSize: 20,
    borderRadius: 10,
    marginBottom:"5%"
  },
  pin: {
    height: 230,
    width: 230,
    resizeMode: 'contain',
    marginBottom: 100,
    padding:10,
  },
  signin:{
  borderWidth:1,
  height: 42,
  width:"40%",
  justifyContent:"center",
  alignItems:"center",
  borderRadius:40,
  backgroundColor:"#384E79",
  borderColor: '#0EE8DE',
  alignSelf:'center',
  textAlign: 'center',

  }
});
