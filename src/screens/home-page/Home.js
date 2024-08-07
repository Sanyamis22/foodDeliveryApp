import {FlatList, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

const Home = () => {
  const {foodList} = useSelector(state => state.food);
  console.log('foodList====>', foodList);

  const _renderItem = item => {
    return (
      <View>
        <Image source={{uri: item.item.image}} style={styles.image} />
        <Text> Food Name : {item.item.foodName} </Text>
        <Text> Category : {item.item.category} </Text>
        <Text> Price : {item.item.price} </Text>
      </View>
    );
  };
  return (
    <View>
      <FlatList
        data={foodList}
        renderItem={_renderItem}
        keyExtractor={item => item.foodName}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    marginVertical: 20,
    alignSelf: 'flex-start',
    borderRadius: 10,
  },
});
