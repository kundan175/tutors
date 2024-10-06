import React, {useRef, useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import BaseView from '../../components/BaseView';
import {useNavigation} from '@react-navigation/native';

const Chats = () => {
  const navigation = useNavigation();

  return (
    <BaseView>
      <View>
        <Text>Chats</Text>
      </View>
    </BaseView>
  );
};

export default Chats;
