import React from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  StyleSheet,
  ScrollView,
  Pressable,
  SafeAreaView,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {Dropdown} from 'react-native-element-dropdown';
import ImagePicker from 'react-native-image-crop-picker';
import {useDispatch} from 'react-redux';
import {addFood} from '../../store/foodSlice';
import Header from '../../components/atom/Header';

const FoodForm = () => {
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: {errors},
    reset,
  } = useForm({
    defaultValues: {
      foodName: '',
      category: null,
      price: '',
      image: null,
    },
  });

  const onSubmit = data => {
    console.log(data);

    const payload = {
      foodName: data.foodName,
      category: data.category.value,
      price: data.price,
      image: data.image,
    };
    dispatch(addFood(payload));
    reset();
  };

  const selectImage = async () => {
    console.log('hey');
    try {
      const selectedImage = await ImagePicker.openPicker({
        mediaType: 'photo',
        cropping: false,
      });

      if (selectedImage) {
        setValue('image', selectedImage.path);
      }
    } catch (error) {
      console.error('Error selecting image:', error);
    }
  };

  const categories = [
    {label: 'Junk Food', value: 'Junk Food'},
    {label: 'drink', value: 'drink'},
    {label: 'Healthy Food', value: 'Healthy Food'},
    {label: 'dinner', value: 'dinner'},
  ];

  return (
    <SafeAreaView>
      <Header title="Add Form" />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Add Food Item</Text>

        <Text style={styles.label}>Food Name</Text>
        <Controller
          control={control}
          name="foodName"
          rules={{
            required: 'Food name is required',
            pattern: {
              value: /^[A-Za-z\s]+$/,
              message: 'Food name should not contain numeric values',
            },
          }}
          render={({field: {onChange, value}}) => (
            <TextInput
              style={[styles.input, errors.foodName && styles.errorBorder]}
              onChangeText={onChange}
              value={value}
              placeholder="Enter food name"
              placeholderTextColor="#666"
            />
          )}
        />
        {errors.foodName && (
          <Text style={styles.errorText}>{errors.foodName.message}</Text>
        )}

        <Text style={styles.label}>Category</Text>
        <Controller
          control={control}
          name="category"
          rules={{required: 'Category is required'}}
          render={({field: {onChange, value}}) => (
            <Dropdown
              style={[styles.dropdown, errors.category && styles.errorBorder]}
              data={categories}
              labelField="label"
              valueField="value"
              placeholder="Select a category"
              value={value}
              onChange={onChange}
            />
          )}
        />
        {errors.category && (
          <Text style={styles.errorText}>{errors.category.message}</Text>
        )}

        <Text style={styles.label}>Price</Text>
        <Controller
          control={control}
          name="price"
          rules={{
            required: 'Price is required',
            pattern: {
              value: /^\d+(\.\d{1,2})?$/,
              message: 'Price should be a valid number',
            },
          }}
          render={({field: {onChange, value}}) => (
            <TextInput
              style={[styles.input, errors.price && styles.errorBorder]}
              onChangeText={onChange}
              value={value}
              placeholder="Enter price"
              placeholderTextColor="#666"
              keyboardType="numeric"
            />
          )}
        />
        {errors.price && (
          <Text style={styles.errorText}>{errors.price.message}</Text>
        )}
        <Pressable onPress={selectImage} style={styles.uploadButton}>
          <Text style={styles.label2}>Upload Image</Text>
        </Pressable>

        {watch('image') && (
          <Image source={{uri: watch('image')}} style={styles.image} />
        )}

        <Pressable
          style={styles.buttonConatiner}
          onPress={handleSubmit(onSubmit)}>
          <Text style={styles.buttonText}>Submit</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexGrow: 1,
    //flex: 1,
    height: '100%',
    backgroundColor: '#E2DAD6',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#6482AD',
  },
  label: {
    fontSize: 16,
    // color: 'white',
    //marginBottom: 5,
    padding: 5,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    color: '#7FA1C3',
  },
  label2: {
    fontSize: 16,
    color: '#F5EDED',
    //marginBottom: 5,
    padding: 5,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    // color: '#7FA1C3',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#FFF',
    fontSize: 16,
    color: '#333',
  },
  dropdown: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#FFF',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  errorBorder: {
    borderColor: 'red',
  },
  image: {
    width: 100,
    height: 100,
    marginVertical: 20,
    alignSelf: 'flex-start',
    borderRadius: 10,
  },
  submitButtonContainer: {
    marginTop: 20,
    backgroundColor: '#2196F3',
    borderRadius: 5,
  },
  buttonConatiner: {
    backgroundColor: '#6482AD',
    marginHorizontal: 50,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: '#F5EDED',
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
    textTransform: 'uppercase',
  },
  uploadButton: {
    backgroundColor: '#7FA1C3',
    // marginHorizontal: 50,
    borderRadius: 20,
    //alignItems: 'center',
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FoodForm;
