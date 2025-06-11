import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';
import { colors } from '../theme/theme';

const SkipScreen02 = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleSkip = () => {
    navigation.navigate('SelectService');
  };

  const handleSwipeLeft = () => {
    navigation.navigate('SkipScreen03');
  };

  return (
    <View style={styles.container}>
      {/* Main image/illustration */}
      <Image
        source={require('../../assets/images/skip_screen_02.png')} // Placeholder for your illustration
        style={styles.illustration}
      />

      {/* Title */}
      <Text style={styles.title}>Book sitters & walkers</Text>

      {/* Description */}
      <Text style={styles.description}>
        Pick the service you need and book your pet's
        <Text>perfect match. Pay directly through our secured app.</Text>
      </Text>

      {/* Skip Button */}
      <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
        <Text style={styles.skipButtonText}>Skip</Text>
      </TouchableOpacity>

      {/* Pagination Dots (Placeholder) */}
      <View style={styles.paginationContainer}>
        <View style={styles.paginationDot} />
        <View style={[styles.paginationDot, styles.activeDot]} />
        <View style={styles.paginationDot} />
        <View style={styles.paginationDot} />
      </View>

      {/* Swipe Left Text */}
      <TouchableOpacity onPress={handleSwipeLeft}>
        <Text style={styles.swipeLeftText}>Swipe left to see more</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  illustration: {
    width: '100%',
    height: 350,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: colors.text,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: colors.text,
    marginBottom: 40,
  },
  skipButton: {
    position: 'absolute',
    bottom: 80,
    left: 20,
  },
  skipButtonText: {
    fontSize: 16,
    color: colors.text,
  },
  paginationContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.secondary,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: colors.primary,
  },
  swipeLeftText: {
    fontSize: 14,
    color: colors.text,
    position: 'absolute',
    bottom: 20,
  },
});

export default SkipScreen02; 