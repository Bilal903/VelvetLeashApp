import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { colors } from '../theme/theme';

const SelectServiceScreen = () => {
  const services = [
    {
      id: '1',
      name: 'Boarding',
      description: 'in the sitter\'s home',
      icon: require('../../assets/icons/boarding.png'), // Placeholder icon
    },
    {
      id: '2',
      name: 'House Sitting',
      description: 'in your home',
      icon: require('../../assets/icons/house_sitting.png'), // Placeholder icon
    },
    {
      id: '3',
      name: 'Drop-in Visits',
      description: 'visits in your home',
      icon: require('../../assets/icons/drop_in_visits.png'), // Placeholder icon
    },
    {
      id: '4',
      name: 'Doggy Day Care',
      description: 'in the sitter\'s home',
      icon: require('../../assets/icons/doggy_day_care.png'), // Placeholder icon
    },
    {
      id: '5',
      name: 'Dog Walking',
      description: 'in your neighborhood',
      icon: require('../../assets/icons/dog_walking.png'), // Placeholder icon
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Select a Service</Text>
      <ScrollView contentContainerStyle={styles.servicesContainer}>
        {services.map((service) => (
          <TouchableOpacity key={service.id} style={styles.serviceCard}>
            <Image source={service.icon} style={styles.serviceIcon} />
            <View>
              <Text style={styles.serviceName}>{service.name}</Text>
              <Text style={styles.serviceDescription}>{service.description}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      {/* Bottom Navigation (Placeholder) */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navText}>Services</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navText}>More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 60,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: colors.text,
  },
  servicesContainer: {
    paddingHorizontal: 20,
  },
  serviceCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  serviceIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginRight: 15,
  },
  serviceName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
  },
  serviceDescription: {
    fontSize: 14,
    color: colors.text,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: colors.secondary,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  navItem: {
    padding: 10,
  },
  navText: {
    fontSize: 16,
    color: colors.text,
  },
});

export default SelectServiceScreen; 