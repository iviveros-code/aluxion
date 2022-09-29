import {StyleSheet} from 'react-native';
import {theme} from '@theme';
import {WIDTH_DEVICE} from '@constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 22,
  },
  containerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerBurguer: {
    left: 10,
  },
  drawer: {
    width: 25,
    height: 12,
  },
  containerText: {
    left: WIDTH_DEVICE / 4,
  },
  title: {
    fontSize: 24,
    lineHeight: 28,
    fontFamily: theme.fonts.semibold,
    fontWeight: 'bold',
    color: theme.colors.black,
  },
  containerFlat: {
    marginTop: 40,
  },
  flatList: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
});
