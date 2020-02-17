import React, {Component} from 'react';
import {Image,StyleSheet,View,Text,StatusBar,Button, SafeAreaView} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Cred from './key';

export default class Search extends Component{
    constructor(props){
        super(props);
        const cred = new Cred() // wil be in git ignore to make sure key is not public
        this.state = {key: cred.getKey()}
    }
  render(){
    
    return(
    
        <GooglePlacesAutocomplete 
        placeholder= "Where to ?" onPress = {(data,details)=>{console.log(data, details)   }}
        placeholderTextColor = "#333"
        query ={{key: this.state.key, language: 'en'}}//cred.key}}
        textInputProps ={{autoCapitalize : "none", autoCorrect : false}}
        enablePoweredByContainer = {false}  // dont want the powered by google 
        styles = {{
            container:{position:'absolute', top:60, width:'100%'},
            textInputContainer :{
                flex:1, 
                backgroundColor:'transparent', 
                height:54,
                marginHorizontal: 20,
                borderTopWidth :0,  // so the top line does not show 
                borderBottomWidth:0 // bottom line disapers 
            },
            textInput :{height: 54, margin:0, borderRadius:0, paddingTop:0,paddingBottom:0,  // box for text input
                        paddingLeft:20,paddingRight:20,shadowColor:"#000", fontSize:18},
            listView : {borderWidth:1,borderColor:'#DDD', backgroundColor:'#fff',marginHorizontal:20,
                        marginTop:20}

        }}
        >
        </GooglePlacesAutocomplete>
       
 
  );
 }
}
const styles = StyleSheet.create({});
