import React, {Component} from 'react';
import {View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Search from './Search'
import Geolocation from '@react-native-community/geolocation';

export default class Map extends Component {
   constructor(props) {
        super(props);
        this.state = {latitude: 0, longitude: 0, longitudeDelta: 0.0143, latitudeDelta: 0.0134,};
    }
    componentDidMount() {

        Geolocation.getCurrentPosition(position => {
            this.setState({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude});},
            error =>{console.log('Error getting location:', error.message)},
            {enableHighAccuracy:true, maximumAge:1000, timeout:200})
    }

    render() {
    return (
      <View style={{flex: 1}}>
        <MapView
          style={{flex: 1}}
          showsUserLocation={true}
          region={this.state}
          loadingEnabled={true}
        />
        <Marker coordinate = {this.state}/>
          {console.log('This is my coordinates', this.state)}
        <Search />

      </View>
    );
  }
}

//const styles = StyleSheet.create({});

