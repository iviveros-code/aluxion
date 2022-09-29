import {DefaultTheme} from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    black: '#000000',
    white: '#FFFFFF',
    black_alternative: '#030303',
    gradient: ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.7)', 'rgba(0, 0, 0, 1)'],
  },
  fonts: {
    thin: 'MuseoSans-100',
    regular: 'MuseoSans-300',
    medium: 'MuseoSans-500',
    semibold: 'MuseoSans-700',
  },
};
