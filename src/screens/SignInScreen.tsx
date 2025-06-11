import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';
import { colors } from '../theme/theme';

const { width, height } = Dimensions.get('window');

const SignInScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      {/* Top Left Logo */}
      <View style={styles.logoContainer}>
        <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
        <Text style={styles.appName}>Velvet Leash Co.</Text>
      </View>

      {/* Sign In Button Top Right */}
      <TouchableOpacity style={styles.signInButton}>
        <Text style={styles.signInButtonText}>Sign In</Text>
      </TouchableOpacity>

      {/* Vector Background */}
      <Image
        source={require('../../assets/images/Vector.png')}
        style={styles.vectorBackground}
      />

      {/* Main illustration */}
      <View style={styles.mainIllustrationContainer}>


        {/* Circles on top of house */}
        <View style={styles.circlesContainer}>
          <Image source={require('../../assets/images/human1.png')} style={styles.circleSmall} />
          <Image source={require('../../assets/images/human2.png')} style={styles.circleMedium} />
          <Image source={require('../../assets/images/human3.png')} style={styles.circleSmall} />
        </View>
                {/* House Illustration */}
        <Image
          source={require('../../assets/images/signin_illustration.png')}
          style={styles.houseIllustration}
        />
      </View>

      {/* Tagline */}
      <Text style={styles.tagline}>
        Trusted pet care right{"\n"}around the corner
      </Text>

      {/* Buttons */}
      <TouchableOpacity style={styles.findCareButton} onPress={() => navigation.navigate('Location')}>
        <Text style={styles.findCareButtonText}>Find Pet care</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.createAccountButton}>
        <Text style={styles.createAccountButtonText}>Create account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  logoContainer: {
    position: 'absolute',
    top: 50,
    left: 20,
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  appName: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: 5,
  },
  signInButton: {
    position: 'absolute',
    top: 60,
    right: 20,
  },
  signInButtonText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '600',
  },
  vectorBackground: {
    position: 'absolute',
    top: height * 0.15,
    width: width * 1.2,  // make vector slightly overflow for full background effect
    height: height * 0.5,
    resizeMode: 'contain',
    zIndex: 1,
    marginTop: 50,
  },
  mainIllustrationContainer: {
    marginTop: height * 0.18,
    alignItems: 'center',
  },
  houseIllustration: {
    width: width * 0.9,
    height: height * 0.75,  // increased house size
    resizeMode: 'contain',
    zIndex: 99
  },
  circlesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 100,
    zIndex: 999
  },
  circleSmall: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginHorizontal: 10,
  },
  circleMedium: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginHorizontal: 10,
  },
  tagline: {
    fontSize: 28,
    fontFamily: 'Pacifico-Regular',
    textAlign: 'center',
    marginVertical: 20,
    color: '#333',
  },
  findCareButton: {
    backgroundColor: colors.primary,
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 25,
    marginBottom: 15,
    width: width * 0.8,
    alignItems: 'center',
  },
  findCareButtonText: {
    color: colors.lightText,
    fontSize: 18,
    fontWeight: 'bold',
  },
  createAccountButton: {
    backgroundColor: colors.secondary,
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 25,
    width: width * 0.8,
    alignItems: 'center',
    marginBottom: 400,
  },
  createAccountButtonText: {
    color: colors.text,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SignInScreen;
