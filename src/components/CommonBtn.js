import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {COLORS, FONTS} from '../assets/Constants';

const CommonBtn = ({
  marginTop = 30,
  title,
  onPress,
  buttonColor,
  titleColor,
  buttonStyle,
  textStyle,
  disabled = false,
  activeOpacity,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={1}
      style={{
        ...styles.container(marginTop),
        ...buttonStyle,
        backgroundColor: buttonColor || COLORS.primary,
      }}
      onPress={onPress}>
      <View>
        <Text
          style={{
            ...styles.title,
            ...textStyle,
            color: titleColor || COLORS.white,
          }}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default CommonBtn;

const styles = StyleSheet.create({
  container: marginTop => ({
    marginTop: marginTop,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    width: wp(85),
    height: hp(6.5),
    alignSelf: 'center',
    marginBottom: wp(2),
  }),
  title: {
    color: COLORS.white,
    fontSize: 16,
    fontFamily: FONTS.medium,
    textAlign: 'center',
    marginBottom: wp(0.2),
  },
});
