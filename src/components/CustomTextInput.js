import React, {Component} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {FONTS, COLORS} from '../assets/Constants';

export default class CustomTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: this.props.type && this.props.type == 'password',
      borderColor: COLORS.lightPrimary,
    };
  }

  componentDidMount() {
    if (this.props.onRef != null) {
      this.props.onRef(this);
    }
  }

  onSubmitEditing() {
    this.props.onSubmitEditing();
  }

  focus() {
    this.textInput.focus();
  }
  getInputContainerStyle = () => ({
    flexDirection: 'row',
    borderColor: this.state.borderColor,
    borderWidth: wp(0.5),
    borderRadius: wp(4),
    height: hp(7),
    alignItems: 'flex-start',
  });
  render() {
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={this.props.onPress ? this.props.onPress : null}>
        <View style={[styles.container, this.props.containerStyle]}>
          <View style={styles.labelContainer}>
            <Text style={styles.labelText}>{this.props.title}</Text>
          </View>

          <View style={this.getInputContainerStyle()}>
            <TextInput
              style={[styles.textInput, this.props.textInputStyle]}
              editable={this.props.editable}
              onChangeText={val => {
                this.props.onChangeText(
                  val.replace(
                    /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])*$/,
                    '',
                  ),
                );
              }}
              keyboardType={this.props.keyboardType}
              secureTextEntry={this.state.visibility}
              maxLength={this.props.maxLength}
              selectionColor={'#007AFF'}
              pointerEvents={this.props.pointerEvents}
              multiline={this.props.multiline}
              value={this.props.value}
              placeholderTextColor={COLORS.gray}
              ref={input => (this.textInput = input)}
              returnKeyType={
                this.props.returnKeyType ? this.props.returnKeyType : 'done'
              }
              blurOnSubmit={this.props.blurOnSubmit}
              onSubmitEditing={this.onSubmitEditing.bind(this)}
              placeholder={this.props.placeholder}
              onFocus={() => this.setState({borderColor: COLORS.primary})}
              onBlur={() => this.setState({borderColor: COLORS.lightPrimary})}
            />

            {this.props.type == 'password' ? (
              <TouchableOpacity
                style={{padding: wp(1)}}
                onPress={() =>
                  this.setState({
                    visibility: !this.state.visibility,
                  })
                }>
                {/* {this.state.visibility ?
                                    <Image source={require('../assets/icons/eye.png')} /> :
                                    <Image source={require('../assets/icons/eye.png')} />} */}
              </TouchableOpacity>
            ) : null}
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: wp(90),
    height: hp(7),
    marginVertical: hp(2),
  },
  labelContainer: {
    position: 'absolute',
    backgroundColor: 'white',
    top: -9,
    left: 25,
    zIndex: 50,
    paddingHorizontal: hp(1),
  },
  labelText: {
    color: COLORS.black,
    fontSize: 14,
    fontFamily: FONTS.medium,
    fontWeight: '500',
  },

  textInput: {
    color: COLORS.black,
    paddingHorizontal: Platform.OS == 'ios' ? wp(4) : wp(4),
    fontSize: 14,
    fontFamily: FONTS.medium,
    height: Platform.OS == 'ios' ? hp(6) : null,
    fontWeight: '800',
    flex: 1,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    right: 0,
    position: 'absolute',
    paddingHorizontal: 10,
    height: hp(7),
  },
});
