import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';

import {styles} from './styles';

export const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff" />
      <Text style={styles.loading}>loading ...</Text>
    </View>
  );
};
