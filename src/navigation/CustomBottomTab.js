import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/core';
import {COLORS, FONTS} from '../assets/Constants';
import {ImagePath} from '../assets/ImagePath';

const CustomBottomTab = ({state, descriptors}) => {
  const navigation = useNavigation();

  return (
    <View style={{backgroundColor: COLORS.white}}>
      <View
        style={{
          flexDirection: 'row',
          paddingVertical: wp(1),
        }}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label = '';
          const isFocused = state.index === index;

          let icon;
          if (route.name == 'Home') {
            icon = isFocused ? ImagePath.homeActive : ImagePath.homeActive;
          } else if (route.name == 'Tutors') {
            icon = isFocused
              ? ImagePath.inActiveTutors
              : ImagePath.inActiveTutors;
          } else if (route.name == 'Sessions') {
            icon = isFocused
              ? ImagePath.inActiveSessions
              : ImagePath.inActiveSessions;
          } else if (route.name == 'Notifications') {
            icon = isFocused
              ? ImagePath.inActiveNotifications
              : ImagePath.inActiveNotifications;
          } else if (route.name == 'Chats') {
            icon = isFocused ? ImagePath.inActiveChat : ImagePath.inActiveChat;
          }

          const onPress = () => {
            navigation.navigate(route.name);
          };

          const onLongPress = () => {
            navigation.navigate(route.name);
          };
          if (route.name == 'Orders') {
            return (
              <TouchableOpacity
                onPress={onPress}
                activeOpacity={1}
                keyExtractor={() => route.name}
                onLongPress={onLongPress}
                style={{
                  borderWidth: 1,
                  borderRadius: wp(20),
                  justifyContent: 'center',
                  paddingHorizontal: wp(2.5),
                  borderColor: COLORS.gray,
                  bottom: wp(4),
                  backgroundColor: COLORS.white,
                }}>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <View>
                    <Image
                      source={icon}
                      resizeMode="contain"
                      style={{height: hp(3.1), width: wp(10)}}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            );
          } else {
            return (
              <TouchableOpacity
                onPress={onPress}
                activeOpacity={1}
                keyExtractor={() => route.name}
                onLongPress={onLongPress}
                style={{flex: 1}}>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <View
                    style={{
                      marginTop: wp(2),
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Image
                      source={icon}
                      resizeMode="contain"
                      style={{height: hp(3.1), width: wp(10)}}
                    />
                    <Text
                      style={{
                        fontFamily: FONTS.medium,
                        fontWeight: isFocused ? '800' : '400',
                        color: isFocused ? COLORS.black : COLORS.gray,
                        fontSize: 14,
                        marginTop: wp(1),
                      }}>
                      {route.name}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }
        })}
      </View>
    </View>
  );
};

export default CustomBottomTab;
