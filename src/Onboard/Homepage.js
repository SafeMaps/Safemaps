import React, {Component } from 'react';
import {Image,StyleSheet,View,Text,StatusBar,Button, SafeAreaView} from 'react-native';
import {Header,Colors} from 'react-native/Libraries/NewAppScreen';

export default class Homepage extends Component{
  render(){
    return(
  <SafeAreaView style= {styles.container}>
    <View style={styles.container}>
      <Image
        source={require('../assets/logo.png')}
        style = {{top:100,position:'absolute'}}
      />
      <View style= {styles.signupButton}>
        <Button title= "Sign up" type = "outlined" color="white"
        onPress={() => this.props.navigation.navigate('Signup')}/>
      </View>
      <Text style={styles.accountText}>Alredy have an account? </Text>
      <View style={styles.signinButton}>
        <Button title="Sign in" color="#0EE8DE" onPress={()=> this.props.navigation.navigate('SignIn')}/>
      </View>
      <Text style={styles.guessText}> Continue as </Text>

      <View style={styles.guessButton}>
        <Button title="Guess" color="#0EE8DE" onPress ={()=>this.props.navigation.navigate('Map')}/>
      </View>
    </View>
  </SafeAreaView>
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
   signupButton:{
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
