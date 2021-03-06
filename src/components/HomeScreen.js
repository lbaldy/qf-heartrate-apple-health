import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, View, TouchableOpacity, Text} from 'react-native';
import AuthenticationComponent from './AuthenticationComponent';
import {connect} from 'react-redux';
import HealthKitComponent from './HealthKitComponent';
import {refreshTokenAction} from '../redux/actions/AuthenticationActions';
import ErrorComponent from './ErrorComponent';

const HomeScreen = ({access_token, navigation}) => {
  return (
    <>
      <SafeAreaView style={{flex: 1, backgroundColor: '#5D71BA'}}>
        <ErrorComponent />
        <View style={{flex: 9}}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {access_token && <HealthKitComponent />}

            <AuthenticationComponent />
          </View>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Privacy Policy');
            }}>
            <Text style={{color: '#FFF'}}>Privacy policy</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

const mapStateToProps = state => {
  const {access_token, refresh_token} = state.AuthenticationReducer;
  return {access_token, refresh_token};
};

export default connect(
  mapStateToProps,
  {refreshTokenAction},
)(HomeScreen);
