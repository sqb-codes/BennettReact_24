import { View, Text, Image, TextInput } from 'react-native';
import React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { layoutStyles } from '../commonLayout.style';
import { Octicons } from '@expo/vector-icons';


export default function SignIn() {
  return (
    <View style={[layoutStyles.wrapper, {paddingTop: hp(10)}]}>
      <View>
        <Image 
          style={{height: hp(40)}}
          resizeMode='contain'
          source={require("../assets/images/user-login.jpg")} />
      </View>

      <View>
        <Text style={{fontSize : hp(4), marginBottom:hp(2)}}>Sign In</Text>
      </View>

      {/* User email Input */}
      <View style={[layoutStyles.inputWrapper, {marginBottom: hp(4)}]}>
        <Octicons name='mail' size={hp(3)}/>
        <TextInput placeholder='Enter your Email ID'/>
      </View>

      {/* User password Input */}
      <View style={[layoutStyles.inputWrapper, {marginBottom: hp(4)}]}>
        <Octicons name='mail' size={hp(3)}/>
        <TextInput placeholder='Enter your Password'/>
      </View>

    </View>
  )
}