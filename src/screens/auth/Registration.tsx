import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
  TouchableOpacity,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import {storeRegisterData} from '../../store/authSlice';
import {useNavigation} from '@react-navigation/native';

const Registration = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm();

  const onSubmit = data => {
    dispatch(storeRegisterData(data));
    navigation.navigate('Login');
  };

  const password = watch('password');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Registration</Text>

      <View style={styles.inputContainer}>
        <Text>Name</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="name"
        />
        {errors.name && <Text style={styles.error}>This is required.</Text>}
      </View>

      <View style={styles.inputContainer}>
        <Text>Email</Text>
        <Controller
          control={control}
          rules={{
            required: true,
            pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType="email-address"
            />
          )}
          name="email"
        />
        {errors.email && (
          <Text style={styles.error}>
            This is required and should be a valid email.
          </Text>
        )}
      </View>

      <View style={styles.inputContainer}>
        <Text>Phone</Text>
        <Controller
          control={control}
          rules={{
            required: true,
            pattern: /^[0-9]{10}$/,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType="phone-pad"
              maxLength={10}
            />
          )}
          name="phone"
        />
        {errors.phone && (
          <Text style={styles.error}>
            This is required and should be a valid phone number.
          </Text>
        )}
      </View>

      <View style={styles.inputContainer}>
        <Text>Password</Text>
        <Controller
          control={control}
          rules={{
            required: true,
            minLength: 6,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry
            />
          )}
          name="password"
        />
        {errors.password && (
          <Text style={styles.error}>
            Password must be at least 6 characters long.
          </Text>
        )}
      </View>

      <View style={styles.inputContainer}>
        <Text>Confirm Password</Text>
        <Controller
          control={control}
          rules={{
            required: true,
            validate: value =>
              value === password || 'The passwords do not match',
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry
            />
          )}
          name="confirmPassword"
        />
        {errors.confirmPassword && (
          <Text style={styles.error}>{errors.confirmPassword.message}</Text>
        )}
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <View style={styles.forgotPassword}>
        <Text style={styles.forgotPasswordText}>
          Already have account?{' '}
          <Text onPress={() => navigation.navigate('Login')}>Login</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    marginHorizontal: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
    color: '#6482AD',
  },
  inputContainer: {
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    marginTop: 4,
  },
  error: {
    color: 'red',
    marginTop: 4,
  },
  button: {
    backgroundColor: '#6482AD',
    paddingVertical: 12,
    borderRadius: 4,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPassword: {
    marginTop: 16,
    alignItems: 'center',
  },
  forgotPasswordText: {
    color: '#6482AD',
    fontSize: 16,
  },
});

export default Registration;
