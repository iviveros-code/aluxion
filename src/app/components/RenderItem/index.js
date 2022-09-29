import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import FastImage from 'react-native-fast-image';

import LinearGradient from 'react-native-linear-gradient';

import {theme} from '@theme';

import {styles} from './styles';
import {NAVIGATION} from 'constants';

export const RenderItem = ({item, index, profile, data}) => {
  const navigation = useNavigation();
  const goDetails = () => {
    navigation.navigate(NAVIGATION.DETALLE.DETALLE, {item, data});
  };
  return (
    <>
      <View style={styles.container(index)}>
        {!profile ? (
          <TouchableOpacity onPress={goDetails}>
            <FastImage
              key={item.id}
              style={styles.image}
              source={{
                uri: item.urls?.small,
                priority: FastImage.priority.normal,
              }}
              resizeMode={FastImage.resizeMode.cover}
            />

            <View style={styles.containerFooter}>
              <LinearGradient
                colors={theme.colors.gradient}
                style={styles.gradient}>
                <View style={styles.containerText}>
                  <Text style={styles.description}>
                    {item.description?.length > 13
                      ? item.description.substring(0, 20) + '...'
                      : item.description}
                  </Text>
                  <Text style={styles.votes}>{item.likes} votos</Text>
                </View>
              </LinearGradient>
            </View>
          </TouchableOpacity>
        ) : (
          <View>
            <FastImage
              key={item.id}
              style={styles.image}
              source={{
                uri: item.urls?.small,
                priority: FastImage.priority.normal,
              }}
              resizeMode={FastImage.resizeMode.cover}
            />

            <View style={styles.containerFooter}>
              <LinearGradient
                colors={theme.colors.gradient}
                style={styles.gradient}>
                <View style={styles.containerText}>
                  <Text style={styles.description}>
                    {item.description?.length > 13
                      ? item.description.substring(0, 20) + '...'
                      : item.description}
                  </Text>
                  <Text style={styles.votes}>{item.likes} votos</Text>
                </View>
              </LinearGradient>
            </View>
          </View>
        )}
      </View>
    </>
  );
};
