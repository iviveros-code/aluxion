import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';

import {getDataFromAuthor} from 'services';

import {RenderItem, Loading} from '@components';
import {Images, NAVIGATION} from '@constants';

import {styles} from './styles';

export const Bio = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const {item} = route.params;
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const goHome = () => {
    navigation.navigate(NAVIGATION.HOME.HOME);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await getDataFromAuthor(item?.user?.name);
      setData(result);

      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {loading ? <Loading /> : null}
      <View style={styles.containerClose}>
        <TouchableOpacity onPress={goHome}>
          <FastImage
            source={Images.Home.Close_Black}
            style={styles.close}
            resizeMode={FastImage.resizeMode.cover}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.header}>
        <View>
          <FastImage
            source={{uri: item?.user?.profile_image?.large}}
            style={styles.avatar}
            resizeMode={FastImage.resizeMode.cover}
            priority={FastImage.priority.high}
          />
        </View>
        <View style={styles.containerBio}>
          <Text style={styles.name}>{item?.user?.name}</Text>
          <Text style={styles.bio}>{item?.user?.bio}</Text>
        </View>
      </View>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>My Photos</Text>
      </View>

      <View>
        {data.length > 1 ? (
          <FlatList
            data={data}
            renderItem={({item, index}) => (
              <RenderItem {...{item, index}} profile />
            )}
            keyExtractor={(item, index) => index.toString()}
            numColumns={2}
            onEndReachedThreshold={0.5}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          <View style={styles.empty}>
            <Text style={styles.emoji}>⚠️</Text>
            <Text style={styles.message}>Empty State</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};
