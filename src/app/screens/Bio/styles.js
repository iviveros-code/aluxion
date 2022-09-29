import {StyleSheet} from 'react-native';
import {WIDTH_DEVICE, IS_ANDROID} from '@constants';
import {theme} from '@theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 30,
  },
  containerClose: {
    position: 'absolute',
    top: 60,
    zIndex: 1,
  },
  close: {
    width: 37,
    height: 37,
  },
  avatar: {
    width: 63,
    height: 63,
    borderRadius: 63 / 2,
  },

  name: {
    fontSize: 22,
    color: theme.colors.black,
    fontFamily: theme.fonts.semibold,
    width: WIDTH_DEVICE - 120,
  },
  bio: {
    fontSize: 12,
    color: theme.colors.black,
    fontFamily: theme.fonts.regular,
    flexWrap: 'wrap',
    width: WIDTH_DEVICE - 120,
  },
  title: {
    fontSize: 42,
    color: theme.colors.black,
    fontFamily: theme.fonts.semibold,
    lineHeight: 50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: IS_ANDROID ? 120 : 70,
  },
  containerBio: {
    marginLeft: 10,
  },
  containerTitle: {
    marginTop: 30,
  },
  empty: {
    alignItems: 'center',
    marginTop: 150,
  },
  emoji: {
    fontSize: 40,
  },
  message: {
    fontSize: 20,
    color: theme.colors.black,
    fontFamily: theme.fonts.medium,
  },
});
