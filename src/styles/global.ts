import {StyleSheet} from 'react-native';
import theme from '../theme';

export const globalStyle = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primaryBlue,
    flex: 1,
  },
  header: {
    textAlign: 'center',
    backgroundColor: theme.colors.offBlack,
    color: theme.colors.textColor,
    fontWeight: '900',
    fontSize: 20,
    textTransform: 'uppercase',
    padding: 10,
  },
});
