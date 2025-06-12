import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';

const SelectServiceScreen = () => {
  const services = [
    {
      id: '1',
      name: 'Boarding',
      description: 'in the sitter\'s home',
      icon: require('../../assets/icons/boarding.png'),
    },
    {
      id: '2',
      name: 'House Sitting',
      description: 'in your home',
      icon: require('../../assets/icons/house_sitting.png'),
    },
    {
      id: '3',
      name: 'Drop-in Visits',
      description: 'visits in your home',
      icon: require('../../assets/icons/drop_in_visits.png'),
    },
    {
      id: '4',
      name: 'Doggy Day Care',
      description: 'in the sitter\'s home',
      icon: require('../../assets/icons/doggy_day_care.png'),
    },
    {
      id: '5',
      name: 'Dog Walking',
      description: 'in your neighborhood',
      icon: require('../../assets/icons/dog_walking.png'),
    },
  ];

  return (
    <View className="flex-1 bg-background" style={{ paddingTop: 60 }}>
      <Text className="text-xl font-bold text-center mb-5 text-text">Select a Service</Text>
      <ScrollView className="px-5">
        {services.map((service) => (
          <TouchableOpacity 
            key={service.id} 
            className="flex-row items-center bg-white rounded-lg p-4 mb-4 shadow-sm"
            style={{
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.1,
              shadowRadius: 3,
              elevation: 3,
            }}
          >
            <Image 
              source={service.icon} 
              className="w-8 h-8 mr-4"
              style={{ resizeMode: 'contain' }}
            />
            <View>
              <Text className="text-lg font-bold text-text">{service.name}</Text>
              <Text className="text-sm text-text">{service.description}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      {/* Bottom Navigation */}
      <View className="flex-row justify-around items-center border-t border-secondary py-2.5 bg-white">
        <TouchableOpacity className="p-2.5">
          <Text className="text-base text-text">Services</Text>
        </TouchableOpacity>
        <TouchableOpacity className="p-2.5">
          <Text className="text-base text-text">More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SelectServiceScreen; 