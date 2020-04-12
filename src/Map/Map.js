//https://github.com/react-native-community/react-native-maps  see more info
import React, {Component} from 'react';
import {View} from 'react-native';
import MapView from 'react-native-maps';
import Search from './Search';

export default class Map extends Component {
  constructor(props) {
    super(props);
  }
  reset = () => {
    this.props.navigation.navigate('Home');
  };
  render() {
    return (
      <View style={{flex: 1}}>
        <MapView
          style={{flex: 1}}
          showsUserLocation={true}
          region={{
            latitude: 40.78343,
            longitude: -73.96625,
            longitudeDelta: 0.0143,
            latitudeDelta: 0.0134,
          }}
          loadingEnabled={true}
        />

        <Search />
      </View>
    );
  }
}

//const styles = StyleSheet.create({});
