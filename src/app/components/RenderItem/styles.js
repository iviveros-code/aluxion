import {StyleSheet} from 'react-native';
import {theme} from '@theme';

export const styles = StyleSheet.create({
  container: index => ({
    flex: 1,
    marginVertical: -20,
    marginHorizontal: 10,
    marginTop: index % 2 === 0 ? 0 : 40,
  }),
  image: {
    width: 151,
    height: 218,
    borderRadius: 10,
  },
  containerFooter: {
    position: 'absolute',
    bottom: 0,
    width: 151,
    height: 60,
  },
  gradient: {
    width: 151,
    height: 60,
    borderRadius: 10,
  },
  containerText: {
    left: 10,
    bottom: -15,
  },
  description: {
    color: theme.colors.white,
    fontSize: 12,
    lineHeight: 14,
    fontFamily: theme.fonts.medium,
  },
  votes: {
    color: theme.colors.white,
    fontSize: 8,
    lineHeight: 10,
    fontFamily: theme.fonts.thin,
    marginTop: 5,
  },
});
