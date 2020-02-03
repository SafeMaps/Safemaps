import React, {Component } from 'react';
import {Image,StyleSheet,View,Text,StatusBar,Button} from 'react-native';
import {Header,Colors} from 'react-native/Libraries/NewAppScreen';

export default class Homepage extends Component{
  render(){
    return(
    <View style={styles.container}>
      <Image
        source={require('../assets/logo.png')}
        style = {{top:100,position:'absolute'}}
      />
      <View style= {styles.submitButton}>
        <Button title= "Sign up" type = "outlined" color="white"/>
      </View>
      <Text style={styles.accountText}>Alredy have an account? </Text>
      <View style={styles.signinButton}>
        <Button title="Sign in" color="#0EE8DE"/>
      </View>
      <Text style={styles.guessText}> Continue as </Text>

      <View style={styles.guessButton}>
        <Button title="Guess" color="#0EE8DE"/>
      </View>
    </View>
  );
 }
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#384E79',
    alignItems : 'center',
    justifyContent:'center'
  },
  submitButton:{
   marginTop:10,
   paddingTop:15,
   paddingBottom:15,
   backgroundColor:'#384E79',
   borderRadius:50,
   borderWidth: 1,
   borderColor: '#0EE8DE',
   width:352,
   top:315
 },
 signinButton:{
   top:321,
   left:110
 },
 guessButton:{
   top:287,
   left:70

 },
 accountText:{  // already have an account ?
   color: '#FFF',
   top:350
 },
 guessText:{
   top:315,
   color: '#FFF'
 }

});
