import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';
import { colors } from '../theme/theme';

const SkipScreen04 = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleGetStarted = () => {
    navigation.navigate('SelectService');
  };

  return (
    <View style={styles.container}>
      {/* Main image/illustration */}
      <Image
        source={require('../../assets/images/skip_screen_04.png')} // Placeholder for your illustration
        style={styles.illustration}
      />

      {/* Title */}
      <Text style={styles.title}>Enjoy peace of mind</Text>

      {/* Description */}
      <Text style={styles.description}>
        All sitters undergo background checks before
        <Text>profile approval.</Text>
      </Text>

      {/* Get Started Button */}
      <TouchableOpacity style={styles.getStartedButton} onPress={handleGetStarted}>
        <Text style={styles.getStartedButtonText}>Get Started</Text>
      </TouchableOpacity>

      {/* Pagination Dots (Placeholder) */}
      <View style={styles.paginationContainer}>
        <View style={styles.paginationDot} />
        <View style={styles.paginationDot} />
        <View style={styles.paginationDot} />
        <View style={[styles.paginationDot, styles.activeDot]} />
      </View>
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
  getStartedButton: {
    backgroundColor: colors.primary,
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 25,
    marginBottom: 20,
    width: '80%',
    alignItems: 'center',
  },
  getStartedButtonText: {
    color: colors.lightText,
    fontSize: 18,
    fontWeight: 'bold',
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
});

export default SkipScreen04; 