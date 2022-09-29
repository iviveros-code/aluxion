import {StyleSheet} from 'react-native';
import {theme} from '@theme';


export const styles = StyleSheet.create({
  drawer: {
    width: 25,
    height: 12,
  },

  title: {
    fontSize: 24,
    lineHeight: 28,
    fontFamily: theme.fonts.semibold,
    fontWeight: 'bold',
    color: theme.colors.black,
    
  },
});
