import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {submitCartItem} from '../../store/foodSlice';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/atom/Header';

const Home = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {foodList} = useSelector(state => state.food);

  const _handleAddToCart = id => {
    dispatch(submitCartItem(id));
  };

  const _renderItem = item => {
    return (
      <View style={styles.containerCard}>
        <Image source={{uri: item.item.image}} style={styles.image} />
        <View style={styles.subContainer}>
          <Text style={styles.header}> {item.item.foodName} </Text>
          <Text style={styles.subDetails}>
            {' '}
            Category : {item.item.category}{' '}
          </Text>
          <Text style={styles.subDetails}> Price : {item.item.price} </Text>
          <Pressable
            style={styles.buttonConatiner}
            onPress={() => _handleAddToCart(item.item.id)}>
            <Text style={styles.textStyle}>Add</Text>
          </Pressable>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.mainConatiner}>
      <Header title="Home" />
      <FlatList
        data={foodList}
        renderItem={_renderItem}
        keyExtractor={item => item.foodName}
      />
    </SafeAreaView>
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
  buttonConatiner: {
    backgroundColor: '#6482AD',
    width: 80,
    borderRadius: 20,
    alignItems: 'center',
    // marginTop: 10,
  },
  textStyle: {
    color: '#fff',
    fontSize: 16,
    padding: 5,
    fontWeight: 'bold',
  },
  containerCard: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: 20,
    backgroundColor: '#E2DAD6',
    marginBottom: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 10,
  },
  subContainer: {
    marginLeft: 10,
  },
  mainConatiner: {
    backgroundColor: '#F5EDED',
    height: '100%',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },
  subDetails: {
    fontSize: 14,
    marginBottom: 5,
  },
});
