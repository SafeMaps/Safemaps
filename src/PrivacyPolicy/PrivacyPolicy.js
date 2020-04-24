import React, {Component} from 'react';
import {StyleSheet, Text, ScrollView, SafeAreaView} from 'react-native';

export default class PrivacyPolicy extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <Text h1 style={styles.headings}>
            {' '}
            Privacy Policy{' '}
          </Text>
          <Text>
            Safemaps built the Safemaps app as a Free app. This SERVICE is
            provided by Safemaps at no cost and is intended for use as is.This
            page is used to inform visitors regarding our policies with the
            collection, use, and disclosure of Personal Information if anyone
            decided to use our Service.If you choose to use our Service, then
            you agree to the collection and use of information in relation to
            this policy. The Personal Information that we collect is used for
            providing and improving the Service. We will not use or share your
            information with anyone except as described in this Privacy
            Policy.The terms used in this Privacy Policy have the same meanings
            as in our Terms and Conditions, which is accessible at Safemaps
            unless otherwise defined in this Privacy Policy.
          </Text>

          <Text h2 style={styles.headings}>
            {' '}
            Information Collection and Use{' '}
          </Text>
          <Text>
            For a better experience, while using our Service, we may require you
            to provide us with certain personally identifiable information. The
            information that we request will be retained by us and used as
            described in this privacy policy. The app does use third party
            services that may collect information used to identify you.Link to
            privacy policy of third party service providers used by the app
            Google Play Services
          </Text>

          <Text h1 style={styles.headings}>
            {' '}
            Log Data{' '}
          </Text>
          <Text>
            We want to inform you that whenever you use our Service, in a case
            of an error in the app we collect data and information (through
            third party products) on your phone called Log Data. This Log Data
            may include information such as your device Internet Protocol (“IP”)
            address, device name, operating system version, the configuration of
            the app when utilizing our Service, the time and date of your use of
            the Service, and other statistics.
          </Text>
          <Text h1 style={styles.headings}>
            {' '}
            Security{' '}
          </Text>
          <Text>
            {' '}
            We value your trust in providing us your Personal Information, thus
            we are striving to use commercially acceptable means of protecting
            it. But remember that no method of transmission over the internet,
            or method of electronic storage is 100% secure and reliable, and we
            cannot guarantee its absolute security.
          </Text>

          <Text h1 style={styles.headings}>
            {' '}
            Children Policy{' '}
          </Text>
          <Text>
            {' '}
            These Services do not address anyone under the age of 18. We do not
            knowingly collect personally identifiable information from children
            under 18. In the case we discover that a child under 18 has provided
            us with personal information, we immediately delete this from our
            servers. If you are a parent or guardian and you are aware that your
            child has provided us with personal information, please contact us
            so that we will be able to do necessary actions.
          </Text>

          <Text h1 style={styles.headings}>
            {' '}
            Changes to This Privacy Policy{' '}
          </Text>
          <Text>
            We may update our Privacy Policy from time to time. Thus, you are
            advised to review this page periodically for any changes. of any
            changes by posting the new Privacy Policy on this page. These
            changes are effective immediately after they are posted on this
            page.
          </Text>
          <Text h1 style={styles.headings}>
            {' '}
            Contact Us
          </Text>
          <Text>
            If you have any questions or suggestions about our Privacy Policy,
            do not hesitate to contact us at ccastro002@citymail.cuny.edu.
          </Text>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  headings: {
    backgroundColor: '#384E79',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
  },
});
