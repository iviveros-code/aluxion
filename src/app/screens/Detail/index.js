import React, {useEffect, useState, useRef} from 'react';
import {Text, View, TouchableOpacity, StatusBar} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';


import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import Carousel from 'react-native-snap-carousel';
import * as Animatable from 'react-native-animatable';

import {Images, NAVIGATION, WIDTH_DEVICE} from '@constants';

import {styles} from './styles';
import {theme} from '@theme';

export const Detail = () => {

  const route = useRoute();
  const navigation = useNavigation();
  const carouselRef = useRef(null);

  const {data} = route.params;
  const itemParams = route.params.item;
  const [activeSlide, setActiveSlide] = useState(
    data.findIndex(item => item.id === itemParams.id),
  );

  useEffect(() => {
    StatusBar.setHidden(true);
  }, []);

  const onSnaptoItem = index => {
    setActiveSlide(index);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerClose}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FastImage
            source={Images.Home.Close_White}
            style={styles.close}
            resizeMode={FastImage.resizeMode.cover}
          />
        </TouchableOpacity>
      </View>

      <View>
        <Carousel
          ref={carouselRef}
          data={data}
          firstItem={activeSlide}
          onSnaptoItem={onSnaptoItem}
          sliderWidth={WIDTH_DEVICE}
          itemWidth={WIDTH_DEVICE}
          layout="tinder"
          renderItem={({item}) => (
            <>
              <View style={styles.item}>
                <FastImage
                  source={{uri: item.urls?.full}}
                  style={styles.image}
                  resizeMode={FastImage.resizeMode.cover}
                  priority={FastImage.priority.high}
                />
              </View>
              <View style={styles.containerFooter}>
                <LinearGradient
                  colors={theme.colors.gradient}
                  style={styles.gradient}>
                  <Animatable.Text
                    style={styles.description}
                    animation="fadeInRightBig"
                    duration={1000}>
                    {item?.description?.length > 8
                      ? item.description.substring(0, 20) + '...'
                      : item.description
                      ? item.description
                      : 'No description'}
                  </Animatable.Text>

                  <Animatable.Text
                    style={styles.votes}
                    animation="fadeInUp"
                    duration={1000}>
                    {item?.likes ? item.likes : 'No votes'} votos
                  </Animatable.Text>

                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate(NAVIGATION.PROFILE.PROFILE, {item})
                    }>
                    <Animatable.View
                      style={styles.containerAuthor}
                      animation="fadeInLeftBig"
                      duration={1000}>
                      <View>
                        <FastImage
                          source={{uri: item.user?.profile_image.medium}}
                          style={styles.avatar}
                          resizeMode={FastImage.resizeMode.cover}
                          priority={FastImage.priority.high}
                        />
                      </View>
                      <View>
                        <Text style={styles.name}>{item?.user?.name}</Text>
                        <Text style={styles.viewProf}>View Profile</Text>
                      </View>
                    </Animatable.View>
                  </TouchableOpacity>
                </LinearGradient>
              </View>
            </>
          )}
        />
      </View>
    </View>
  );
};
