import React, {useState, useEffect} from 'react';
import {SafeAreaView, FlatList, View} from 'react-native';

import {getImages, getMoreImages} from '@services';

import {RenderItem} from '@components';
import {Loading} from '@components';
import {styles} from './styles';

export const Fee = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await getImages(page);
      setData(result);

      setLoading(false);
    };

    fetchData();
  }, []);

  const callMoreImages = async () => {
    const result = await getMoreImages(page);
    setData([...data, ...result]);
    setPage(page + 1);
  };

  return (
    <SafeAreaView style={styles.container}>
      {loading ? <Loading /> : null}
      <View style={styles.containerFlat}>
        <FlatList
          data={data}
          keyExtractor={(item, index) => String(index)}
          numColumns={2}
          style={styles.flatList}
          renderItem={({item, index}) => (
            <RenderItem {...{item, index, data}} />
          )}
          onEndReachedThreshold={0.01}
          onEndReached={callMoreImages}
        />
      </View>
    </SafeAreaView>
  );
};
