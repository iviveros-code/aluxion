import {StyleSheet} from 'react-native';
import {WIDTH_DEVICE, HEIGHT_DEVICE} from '@constants';
import {theme} from '@theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  containerClose: {
    position: 'absolute',
    top: 60,
    left: 30,
    zIndex:1
  },
  close: {
    width: 37,
    height: 37,
  },
  item: {
    zIndex: -1,
  },
  image: {
    width: WIDTH_DEVICE,
    height: HEIGHT_DEVICE + 200,
  },
  description: {
    color: theme.colors.white,
    fontSize: 42,
    lineHeight: 50,
    fontFamily: theme.fonts.medium,
    textAlign: 'left',
    marginLeft: 30,
  },
  votes: {
    color: theme.colors.white,
    fontSize: 14,
    lineHeight: 16,
    fontFamily: theme.fonts.regular,
    textAlign: 'left',
    marginLeft: 30,
    marginTop: 20,
  },
  avatar: {
    width: 37,
    height: 37,
    borderRadius: 37 / 2,
  },
  name: {
    fontSize: 12,
    color: theme.colors.white,
    fontFamily: theme.fonts.medium,
    marginLeft: 10,
  },
  viewProf: {
    fontSize: 10,
    color: theme.colors.white,
    fontFamily: theme.fonts.regular,
    marginLeft: 10,
  },
  containerFooter: {
    position: 'absolute',
    bottom: 0,
    height: 250,
    width: '100%',
  },
  gradient: {
    bottom: 0,
    height: 250,
  },
  containerAuthor: {
    flexDirection: 'row',
    marginLeft: 30,
    marginTop: 20,
    alignItems: 'center',
  },
});
