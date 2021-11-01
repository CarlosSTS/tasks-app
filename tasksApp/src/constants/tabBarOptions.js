import {Platform} from 'react-native';
import {fonts} from '../common/fonts';
import {colors} from '../common/colors';

const tabBarOptions = {
  style: {
    elevation: 0,
    shadowOpacity: 0,
    height: Platform.OS === 'ios' ? 90 : 72,
    backgroundColor: colors.backgroundFinal,
    paddingBottom: 8,
    borderTopWidth: 1,
    borderTopColor: colors.blue,
  },
  iconStyle: {
    flex: 0,
    height: 40,
    width: 0,
  },
  labelStyle: {
    height: 24,
    fontSize: 16,
    fontFamily: fonts.RobotoSlab,
  },
  //inactiveBackgroundColor: colors.black,
  //activeBackgroundColor: colors.white,
  inactiveTintColor: colors.black,
  activeTintColor: colors.white,
  keyboardHidesTabBar: true,
};

export default tabBarOptions;
