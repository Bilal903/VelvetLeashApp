import React from 'react';
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';

const LocationScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View className="flex-1 bg-background items-center px-5" style={{ paddingTop: 60 }}>
      {/* Cancel Button */}
      <TouchableOpacity className="absolute left-5 z-10" style={{ top: 60 }} onPress={() => navigation.goBack()}>
        <Text className="text-base text-text">Cancel</Text>
      </TouchableOpacity>

      {/* Globe Illustration */}
      <Image
        source={require('../../assets/images/globe_illustration.png')}
        className="w-36 h-36 mt-20 mb-10"
        style={{ resizeMode: 'contain' }}
      />

      {/* Question Text */}
      <Text className="text-xl font-bold text-center mb-8 text-text">
        Where are you looking for pet care?
      </Text>

      {/* Search Location Input */}
      <TextInput
        className="w-11/12 py-4 px-5 rounded-3xl bg-secondary mb-8 text-base text-text"
        placeholder="Search Location"
        placeholderTextColor="#333333"
      />

      {/* Continue Button */}
      <TouchableOpacity 
        className="bg-primary py-4 px-12 rounded-3xl w-4/5 items-center" 
        onPress={() => navigation.navigate('SkipScreen01')}
      >
        <Text className="text-lightText text-lg font-bold">Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LocationScreen; 