import React, {useRef, useState} from 'react';
import {RefreshControl, StatusBar, StyleSheet, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {COLORS} from '../assets/Constants';

const BaseView = ({
  children,
  header,
  scrollEnabled,
  needKeyboardAware = true,
  footer,
  props,
  blur,
  scrollStyle,
  scrollVertical,
  refreshControlStatus,
  onRefreshController,
  scrollEnabledBottom,
}) => {
  const [refreshing, setRefreshing] = useState(false);

  const scrollRef = useRef();

  function scrollBotttom() {
    setTimeout(() => {
      scrollRef.current.scrollToEnd();
    }, 100);
  }

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: blur ? '#000000' : null, opacity: blur ? 0.1 : null},
      ]}>
      <StatusBar
        translucent={false}
        barStyle="light-content"
        backgroundColor={COLORS.black}
      />

      <View
        style={[
          styles.innerContainer,
          {backgroundColor: props ? COLORS.white : COLORS.white},
        ]}>
        {header}

        {needKeyboardAware ? (
          <KeyboardAwareScrollView
            keyboardShouldPersistTaps={'handled'}
            showsVerticalScrollIndicator={
              scrollVertical === undefined ? false : scrollVertical
            }
            scrollEnabled={scrollEnabled === undefined ? true : scrollEnabled}
            extraHeight={150}
            ref={scrollRef}
            bounces={false}
            style={[styles.scroll, {backgroundColor: scrollStyle}]}
            contentContainerStyle={{flex: 1}}
            // refreshControl={
            //   refreshControlStatus !== null ? (
            //     <RefreshControl
            //       refreshing={refreshing}
            //       onRefresh={onRefreshController}
            //       enabled={refreshControlStatus}
            //     />
            //   ) : null
            // }
          >
            {children}
          </KeyboardAwareScrollView>
        ) : (
          <View style={styles.flexContainer}>{children}</View>
        )}

        {scrollEnabledBottom && scrollBotttom()}

        {footer}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...StyleSheet.absoluteFillObject,
  },
  innerContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  scroll: {
    backgroundColor: null,
  },
  flexContainer: {
    flex: 1,
  },
});

export default BaseView;
