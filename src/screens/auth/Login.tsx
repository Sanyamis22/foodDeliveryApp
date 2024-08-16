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
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  isLogginFail,
  isLogginStarted,
  isLogginSuccess,
} from '../../store/authSlice';

const Login = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {registeredData} = useSelector(state => state.auth);
  console.log('registeredData===>', registeredData);
  const {
    control,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm();

  const onSubmit = data => {
    console.log(data);
    dispatch(isLogginStarted());
    const isUserExist = registeredData?.find(
      item => item.email === data.email && item.password === data.password,
    );
    console.log('isUserExist===>', isUserExist);
    if (isUserExist) {
      // navigation.navigate('tabs');
      dispatch(isLogginSuccess());
      reset();
    } else {
      alert('Invalid credentials');
      dispatch(isLogginFail());
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Login</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
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
        <Text style={styles.label}>Password</Text>
        <Controller
          control={control}
          rules={{required: true}}
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
        {errors.password && <Text style={styles.error}>This is required.</Text>}
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.forgotPassword}>
        <Text style={styles.forgotPasswordText}>
          Don't have account?{' '}
          <Text onPress={() => navigation.navigate('Registration')}>
            Sign Up
          </Text>
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
    backgroundColor: '#f8f9fa',
    marginHorizontal: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#6482AD',
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    color: '#333',
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

export default Login;
