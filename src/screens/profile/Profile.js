import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {clearAddFood} from '../../store/foodSlice';
import {SafeAreaView} from 'react-native-safe-area-context';
import {logout} from '../../store/authSlice';

const Profile = () => {
  const dispatch = useDispatch();

  const _handleLogOut = () => {
    dispatch(clearAddFood());
    dispatch(logout());
  };
  return (
    <SafeAreaView>
      <Pressable onPress={_handleLogOut}>
        <Text>logout</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
