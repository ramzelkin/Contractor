import {StyleSheet} from 'react-native';
import {verticalScale, horizontalScale} from '../..//utils/scaling';

const globalStyle = StyleSheet.create({
  backgroundWhite: {
    backgroundColor: '#ffffff',
  },
  darkBackground:  {
    backgroundColor: '#171221',
  },
  flex: {
    flex: 1,
  },
  headerIndents: {
    marginTop: verticalScale(29),
    marginBottom: verticalScale(21),
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: horizontalScale(16),
  },
  contentMargins: {
    marginHorizontal: horizontalScale(16),
  },
});

export default globalStyle;
