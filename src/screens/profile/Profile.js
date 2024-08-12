import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {clearAddFood} from '../../store/foodSlice';

const Profile = () => {
  const dispatch = useDispatch();

  const _handleLogOut = () => {
    dispatch(clearAddFood());
  };
  return (
    <Pressable onPress={_handleLogOut}>
      <Text>logout</Text>
    </Pressable>
  );
};

export default Profile;

const styles = StyleSheet.create({});
