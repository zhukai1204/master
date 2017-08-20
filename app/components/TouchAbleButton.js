import React, { PropTypes } from 'react';
import { ViewPropTypes, Text, TouchableOpacity } from 'react-native';

const propTypes = {
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
  style: Text.propTypes.style,
  containerStyle: ViewPropTypes.style,
  text: PropTypes.string,
  activeOpacity: PropTypes.number
};

const TouchAbleButton = ({
  onPress,
  disabled,
  style,
  containerStyle,
  text,
  activeOpacity
}) =>
  (<TouchableOpacity
    style={containerStyle}
    onPress={onPress}
    disabled={disabled}
    activeOpacity={activeOpacity}
  >
    <Text style={style}>
      {text}
    </Text>
  </TouchableOpacity>);

TouchAbleButton.propTypes = propTypes;

TouchAbleButton.defaultProps = {
  onPress() {},
  disabled: false,
  activeOpacity: 0.2
};

export default TouchAbleButton;