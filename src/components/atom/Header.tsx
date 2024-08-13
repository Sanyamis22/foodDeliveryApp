import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Header = ({title}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.customerHeaderConatiner}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text> back</Text>
      </TouchableOpacity>
      <Text style={styles.textStyleHeader}>{title}</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
        <Text> cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  customerHeaderConatiner: {
    backgroundColor: '#6482AD',
    height: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 10,
    flexDirection: 'row',
  },
  textStyleHeader: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
    textTransform: 'uppercase',
  },
});
