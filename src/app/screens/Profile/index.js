import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

import FastImage from 'react-native-fast-image';

import {Images} from '@constants';
import {styles} from './styles';

export const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleExample}>Comming soon</Text>
      <View style={{alignSelf: 'center'}}>
        <FastImage
          source={Images.Home.Wip}
          style={{width: 300, height: 300}}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>
    </SafeAreaView>
  );
};
