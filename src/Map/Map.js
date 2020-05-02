import React, {Component} from 'react';
import {View} from 'react-native';
import MapView, {Polyline} from 'react-native-maps';
import Search from './Search'
import Geolocation from '@react-native-community/geolocation';
import {getRoute} from "../AccountService";
import MapMarker from "react-native-maps/lib/components/MapMarker";

export default class Map extends Component {
   constructor(props) {
        super(props);
        this.mapRef = null;
        this.state = {region:null, destination : null, directions: []};
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
        this.setState({destination: {latitude, longitude, text: data.structured_formatting.main_text}});
        const {region, destination} = this.state;
        this.getCoordinates(region, destination).then(
            routeCoordinates => this.setState({directions:routeCoordinates})).then(this.fitMap)
    };


   getCoordinates = async (origin, destination) => {
       return await getRoute(origin, destination);

   };
   fitMap =()=>{
       const {directions} = this.state;
       this.mapRef.fitToCoordinates(directions, { edgePadding: { top: 10, right: 10, bottom: 10, left: 10 }, animated: false })
   };
    render() {
       const {region, destination, directions} = this.state;

    return (
      <View style={{flex: 1}}>
        <MapView
          style={{flex: 1}}
          showsUserLocation={true}
          region={region}
          loadingEnabled={true}
          ref={(ref) => { this.mapRef = ref }}
       >
            {destination && directions &&
           <Polyline
		coordinates={directions}
		strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
		strokeColors={[
			'#7F0000',
			'#00000000', // no color, creates a "long" gradient between the previous and next coordinate
			'#B24112',
			'#E5845C',
			'#238C23',
			'#7F0000'
		]}
		strokeWidth={6}
	/>}
	<MapMarker coordinate={destination}/>
        </MapView>
        <Search onLocationSelected = {this.handleLocationSelected}/>

      </View>
    );
  }
}

//const styles = StyleSheet.create({});

