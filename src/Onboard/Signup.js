import React, {Component } from 'react';
import {Image,StyleSheet,View,Text,StatusBar,Button, SafeAreaView, KeyboardAvoidingView,
TextInput, TouchableOpacity,Alert} from 'react-native';
import {Header,Colors} from 'react-native/Libraries/NewAppScreen';

export default class Signup extends Component{
  constructor(props){
    super(props)
    this.state = {email :"", password:"",confirmpass:""}
   }
  validate_fields=()=>{
     const {email, password, confirmpass} = this.state
     var regx = new RegExp(/\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/)
     var bool = regx.test(email);
     if (email == "" || password =="" || confirmpass==""){
       Alert.alert("Please fill out all fields")
       return false
     }
     else if(password != confirmpass){
       Alert.alert("Password don't match")
       return false
     }
     else if(!bool){
       Alert.alert("Invalid email format. Must be example@test.com")
       return false
     }
     return true
   }
    createAccount=()=>{
      // this will make an api call to back server to create an account
      if (this.validate_fields()){ // if validate_fields returns true then create acccount

      }
    }
  render(){
    return(
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Image source={require('../assets/pin.png')} style={styles.pin} />
      <TextInput  placeholder="Email" pattern={[]} style={styles.input} onChangeText={(value)=> this.setState({email:value})}/>
      <TextInput placeholder="Password"  style={styles.input}secureTextEntry={true}
       onChangeText={(value)=> this.setState({password:value})} />
      <TextInput placeholder="Confirm Password" style={styles.input} secureTextEntry={true}
       onChangeText={(value)=> this.setState({confirmpass:value})} />
      <TouchableOpacity style= {styles.register} onPress ={()=>this.createAccount()}>
        <Text style={{color:'white',fontSize: 15}}> Register </Text>
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
    marginBottom:"5%",

  },
  pin: {
    height: 230,
    width: 230,
    resizeMode: 'contain',
    marginBottom: 100,
    padding:10,
  },
  register:{
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
