import {Platform, Dimensions} from 'react-native';
import {hasNotch} from 'react-native-device-info';

export const ACCESS_KEY =
  'a2f508640cb62f314e0e0763594d40aab1c858a7ef796184067c537a88b276aa';

export const URL = 'https://api.unsplash.com/search/photos?page=';

export const IS_ANDROID = Platform.OS === 'android';
export const IS_IOS = Platform.OS === 'ios';
export const WIDTH_DEVICE = Dimensions.get('screen').width;
export const HEIGHT_DEVICE = Dimensions.get('window').height;
export const SCREEN = Dimensions.get('screen');
export const HAS_NOTCH = hasNotch();
