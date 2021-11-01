import {colors} from '../common/colors';
import {fonts} from '../common/fonts';

const screenOptions = {
  headerTitleAlign: 'center',
  headerBackTitleVisible: false,
  headerTintColor: colors.white,
  headerStyle: {
    backgroundColor: colors.backgroundInitial,
    borderBottomWidth: 1,
    borderBottomColor: colors.blue,
  },
  headerTitleStyle: {
    //fontWeight: 'bold',
    fontSize: 18,
    fontFamily: fonts.RobotoSlab,
  },
  cardStyle: {
    backgroundColor: colors.transparent,
  },
};

export default screenOptions;
