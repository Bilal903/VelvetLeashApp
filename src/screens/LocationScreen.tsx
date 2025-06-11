import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';
import { colors } from '../theme/theme';

const LocationScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      {/* Cancel Button */}
      <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
        <Text style={styles.cancelButtonText}>Cancel</Text>
      </TouchableOpacity>

      {/* Globe Illustration */}
      <Image
        source={require('../../assets/images/globe_illustration.png')} // Placeholder for globe illustration
        style={styles.globeIllustration}
      />

      {/* Question Text */}
      <Text style={styles.questionText}>Where are you looking for pet care?</Text>

      {/* Search Location Input */}
      <TextInput
        style={styles.locationInput}
        placeholder="Search Location"
        placeholderTextColor={colors.text}
      />

      {/* Continue Button */}
      <TouchableOpacity style={styles.continueButton} onPress={() => navigation.navigate('SkipScreen01')}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  cancelButton: {
    position: 'absolute',
    top: 60,
    left: 20,
    zIndex: 1,
  },
  cancelButtonText: {
    fontSize: 16,
    color: colors.text,
  },
  globeIllustration: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginTop: 80,
    marginBottom: 40,
  },
  questionText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: colors.text,
  },
  locationInput: {
    width: '90%',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 25,
    backgroundColor: colors.secondary,
    marginBottom: 30,
    fontSize: 16,
    color: colors.text,
  },
  continueButton: {
    backgroundColor: colors.primary,
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 25,
    width: '80%',
    alignItems: 'center',
  },
  continueButtonText: {
    color: colors.lightText,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LocationScreen; 