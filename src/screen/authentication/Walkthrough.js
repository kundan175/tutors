import React, {useRef, useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Swiper from 'react-native-swiper';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {COLORS, FONTS} from '../../assets/Constants';
import {ImagePath} from '../../assets/ImagePath';
import CommonBtn from '../../components/CommonBtn';
import BaseView from '../../components/BaseView';
import {useNavigation} from '@react-navigation/native';

const Walkthrough = () => {
  const navigation = useNavigation();
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  let data = [
    {
      id: 1,
      title: 'Pass your exams with distinctions',
      description:
        'Go into your exam hall with confidence and the knowledge you need to excel.Be the best version of yourself ',
      image: ImagePath.walkthroughFirst,
    },
    {
      id: 2,
      title: 'Build your confidence with the right knowledge',
      description:
        'Gain the knowledge you need to ace your examinations and test',
      image: ImagePath.walkthroughSec,
    },
    {
      id: 3,
      title: 'Find the right tutor to teach you',
      description:
        'Find the right tutor to prepare you for your examination and help you to ace your exam and build your confidence',
      image: ImagePath.walkthroughThird,
    },
  ];

  return (
    <BaseView
      footer={
        <View style={{alignItems: 'center', marginBottom: wp(3)}}>
          <CommonBtn
            onPress={() => navigation.navigate('Login')}
            title={'Get started'}
          />
          <Text style={styles.accountText}>I already have an account</Text>
        </View>
      }>
      <View style={styles.container}>
        <View style={styles.slideContainer}>
          <Swiper
            ref={swiperRef}
            loop={false}
            index={0}
            onIndexChanged={index => setActiveIndex(index)}
            showsPagination={false}>
            {data.map((item, index) => (
              <View key={index} style={styles.slide1}>
                <Image source={item.image} style={styles.image} />
                <View style={styles.headingText}>
                  <Text style={styles.header}>{item.title}</Text>
                  <Text style={styles.text}>{item.description}</Text>
                </View>
                <View style={styles.paginationContainer}>
                  {[0, 1, 2].map(dotIndex => (
                    <View key={dotIndex} style={styles.paginationDot}>
                      {dotIndex === activeIndex ? (
                        <View style={styles.activePaginationDot} />
                      ) : (
                        <View style={styles.inactivePaginationDot} />
                      )}
                    </View>
                  ))}
                </View>
              </View>
            ))}
          </Swiper>
        </View>
      </View>
    </BaseView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  slideContainer: {
    flex: 1,
    marginTop: wp(20),
  },
  slide1: {
    flex: 1,
    marginTop: wp(10),
  },
  text: {
    color: COLORS.black,
    fontSize: 16,
    textAlign: 'center',
    marginTop: wp(3),
    width: wp(90),
    fontFamily: FONTS.bold,
    fontWeight: '500',
  },
  header: {
    fontSize: 20,
    color: COLORS.black,
    textAlign: 'center',
    fontWeight: '500',
    width: wp(90),
    fontFamily: FONTS.medium,
  },
  headingText: {
    marginTop: wp(15),
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: wp(3),
  },
  paginationDot: {
    margin: wp(2),
    borderRadius: 10,
    marginTop: wp(3),
  },
  activePaginationDot: {
    backgroundColor: COLORS.primary,
    height: wp(2),
    width: wp(12),
    borderRadius: 10,
  },
  inactivePaginationDot: {
    backgroundColor: COLORS.lightPrimary,
    height: wp(2),
    width: wp(6),
    borderRadius: 10,
  },
  image: {
    alignSelf: 'center',
  },
  accountText: {
    color: COLORS.primary,
    fontSize: 18,
    fontWeight: '500',
    fontFamily: FONTS.medium,
    marginTop: wp(2),
  },
});

export default Walkthrough;
