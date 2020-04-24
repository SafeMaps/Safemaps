import React, {Component} from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  Share,
  Button,
  SafeAreaView,
} from 'react-native';

export default class ShareApp extends Component {
  constructor(props) {
    super(props);
    this.message =
      'Hey I would like you to download this incredible app' +
      'from the Apple store called Safemaps. I want you to be safe, check it out.';
  }
  share_message = () => {
    Share.share({
      message: this.message,
    });
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Image
            source={require('../assets/logo.png')}
            style={{top: 100, position: 'absolute'}}
          />
          <Text style={styles.text}>
            Keep your friends and family safe. Click the button below to share
            app
          </Text>

          <View style={styles.share}>
            <Button
              title="Share"
              type="outlined"
              color="white"
              onPress={() => this.share_message()}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#384E79',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
  text: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: 20,
  },
  share: {
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: '#384E79',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#0EE8DE',
    width: 352,
    top: 315,
  },
});
