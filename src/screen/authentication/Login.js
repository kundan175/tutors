import React, {useRef, useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {COLORS, FONTS} from '../../assets/Constants';
import {ImagePath} from '../../assets/ImagePath';
import CommonBtn from '../../components/CommonBtn';
import BaseView from '../../components/BaseView';
import CustomTextInput from '../../components/CustomTextInput';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();

  const [userDetails, setUserDetails] = useState({email: '', password: ''});

  return (
    <BaseView
      footer={
        <View style={styles.footerContainer}>
          <Text
            onPress={() => navigation.navigate('SingUp')}
            style={styles.accountText}>
            I don’t have an account
          </Text>
        </View>
      }>
      <View style={styles.container}>
        <View style={styles.centeredContainer}>
          <Text style={styles.welcomeText}>Welcome back</Text>
          <Text style={styles.subText}>
            Enter the required details to access your account and find the right
            tutor for you
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <CustomTextInput
            placeholder={'damilolajohn@gmail.com'}
            title={'E-mail'}
            onChangeText={text =>
              setUserDetails(prevUserDetails => ({
                ...prevUserDetails,
                email: text,
              }))
            }
            value={userDetails.email}
          />
          <CustomTextInput
            type={'password'}
            placeholder={'********'}
            title={'Password'}
            maxLength={16}
            onChangeText={text =>
              setUserDetails(prevUserDetails => ({
                ...prevUserDetails,
                password: text,
              }))
            }
            value={userDetails.password}
          />

          <View style={styles.forgotPasswordContainer}>
            <Text style={styles.forgotPasswordText}>Forgot password?</Text>
          </View>

          <CommonBtn
            onPress={() => navigation.navigate('BottomNavigation')}
            title={'Login'}
          />

          <View style={styles.orContainer}>
            <Text style={styles.orText}>OR</Text>

            <View style={styles.googleContainer}>
              <Image source={ImagePath.google} />
              <Text style={styles.googleText}>Continue with Google</Text>
            </View>
          </View>
        </View>
      </View>
    </BaseView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: 'center',
  },

  footerContainer: {
    alignItems: 'center',
    marginBottom: wp(3),
  },

  centeredContainer: {
    alignItems: 'center',
    marginTop: wp(10),
  },

  welcomeText: {
    fontSize: 20,
    fontWeight: '500',
    fontFamily: FONTS.medium,
    color: COLORS.black,
  },

  subText: {
    fontSize: 16,
    fontWeight: '500',
    fontFamily: FONTS.regular,
    color: COLORS.black,
    textAlign: 'center',
    marginHorizontal: wp(8),
    marginTop: wp(5),
  },

  inputContainer: {
    marginTop: wp(15),
  },

  forgotPasswordContainer: {
    alignItems: 'flex-end',
  },

  forgotPasswordText: {
    color: COLORS.primary,
    fontWeight: '500',
    fontFamily: FONTS.medium,
    fontSize: 18,
  },

  orContainer: {
    marginTop: wp(5),
    alignItems: 'center',
  },

  orText: {
    fontWeight: '500',
    fontSize: 16,
    color: COLORS.gray,
    fontFamily: FONTS.medium,
    alignSelf: 'center',
  },

  googleContainer: {
    borderWidth: wp(0.5),
    borderColor: COLORS.primary,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: wp(3),
    height: wp(12),
    borderRadius: wp(3),
    justifyContent: 'center',
    marginTop: wp(5),
    width: wp(85),
  },

  googleText: {
    color: COLORS.primary,
    fontSize: 18,
    fontFamily: FONTS.medium,
    fontWeight: '500',
    marginLeft: wp(3),
  },

  accountText: {
    color: COLORS.primary,
    fontSize: 18,
    fontWeight: '500',
    fontFamily: FONTS.medium,
    marginBottom: wp(2),
  },
});

export default Login;
