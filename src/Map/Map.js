import React, {Component} from 'react';
import {View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Search from './Search'
import Geolocation from '@react-native-community/geolocation';

export default class Map extends Component {
   constructor(props) {
        super(props);
        this.state = {region:null, destination : null};
    }
    componentDidMount() {

        Geolocation.getCurrentPosition(position => {
            this.setState({ region:{
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                longitudeDelta: 0.0143,
                latitudeDelta: 0.0134}});},
            error =>{console.log('Error getting location:', error.message)},
            {enableHighAccuracy:true, maximumAge:1000, timeout:200})
    }
    handleLocationSelected = (data, {geometry}) => {
       const {location: {lat: latitude, lng: longitude}} = geometry;
       this.setState({destination:{latitude, longitude, text: data.structured_formatting.main_text}});

    };

    render() {
       const {region} = this.state;

    return (
      <View style={{flex: 1}}>
        <MapView
          style={{flex: 1}}
          showsUserLocation={true}
          region={region}
          loadingEnabled={true}
        />
        <Search onLocationSelected = {this.handleLocationSelected}/>

      </View>
    );
  }
}

//const styles = StyleSheet.create({});

