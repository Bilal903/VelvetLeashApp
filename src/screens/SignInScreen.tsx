import React from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';

const { width, height } = Dimensions.get('window');

const SignInScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View className="flex-1 bg-white items-center">
      {/* Top Left Logo */}
      <View className="absolute left-5 items-center" style={{ top: 50 }}>
        <Image 
          source={require('../../assets/images/logo.png')} 
          className="w-10 h-10"
          style={{ resizeMode: 'contain' }}
        />
        <Text className="text-base font-medium mt-1">Velvet Leash Co.</Text>
      </View>

      {/* Sign In Button Top Right */}
      <TouchableOpacity className="absolute right-5" style={{ top: 60 }}>
        <Text className="text-base text-text font-semibold">Sign In</Text>
      </TouchableOpacity>

      {/* Vector Background */}
      <Image
        source={require('../../assets/images/Vector.png')}
        style={{
          position: 'absolute',
          top: height * 0.15,
          width: width * 1.2,
          height: height * 0.5,
          resizeMode: 'contain',
          zIndex: 1,
          marginTop: 50,
        }}
      />

      {/* Main illustration */}
      <View className="items-center" style={{ marginTop: height * 0.18 }}>
        {/* Circles on top of house */}
        <View className="flex-row justify-center" style={{ marginTop: 100, zIndex: 999 }}>
          <Image 
            source={require('../../assets/images/human1.png')} 
            className="rounded-full mx-2.5"
            style={{ width: 60, height: 60 }}
          />
          <Image 
            source={require('../../assets/images/human2.png')} 
            className="rounded-full mx-2.5"
            style={{ width: 90, height: 90 }}
          />
          <Image 
            source={require('../../assets/images/human3.png')} 
            className="rounded-full mx-2.5"
            style={{ width: 60, height: 60 }}
          />
        </View>
        
        {/* House Illustration */}
        <Image
          source={require('../../assets/images/signin_illustration.png')}
          style={{
            width: width * 0.9,
            height: height * 0.75,
            resizeMode: 'contain',
            zIndex: 99
          }}
        />
      </View>

      {/* Tagline */}
      <Text className="text-3xl font-pacifico text-center my-5 text-text">
        Trusted pet care right{"\n"}around the corner
      </Text>

      {/* Buttons */}
      <TouchableOpacity 
        className="bg-primary py-4 px-12 rounded-3xl mb-4 items-center"
        style={{ width: width * 0.8 }}
        onPress={() => navigation.navigate('Location')}
      >
        <Text className="text-lightText text-lg font-bold">Find Pet care</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        className="bg-secondary py-4 px-12 rounded-3xl items-center"
        style={{ width: width * 0.8, marginBottom: 400 }}
      >
        <Text className="text-text text-lg font-bold">Create account</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignInScreen;
