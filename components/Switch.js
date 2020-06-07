import React from 'react';
import { Switch, Platform } from 'react-native';

import Theme from '../constants/Theme';

class MkSwitch extends React.Component {
  render() {
    const { value, ...props } = this.props;
    const thumbColor =
      Platform.OS === 'ios'
        ? Theme.COLORS.PRIMARY
        : Platform.OS === 'android' && value
        ? Theme.COLORS.SWITCH_ON
        : Theme.COLORS.SWITCH_OFF;

    return (
      <Switch
        value={value}
        thumbColor={[value === true ? Theme.COLORS.SWITCH_ON : '#ffffff']}
        ios_backgroundColor={'#D8D8D8'}
        trackColor={{
          true: '#d3d3d3',
          false: Platform.OS == 'ios' ? '#d3d3d3' : '#333',
        }}
        {...props}
      />
    );
  }
}

export default MkSwitch;
