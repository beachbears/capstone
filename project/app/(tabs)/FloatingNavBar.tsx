import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

type RoutePaths = '/' | '/route' | '/book' | '/chat'; // Step 1: Define the route paths

const FloatingNavBar: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'home' | 'route' | 'book' | 'chat'>('home');
  const router = useRouter();

  // Step 2: Update navigateToPage function
  const navigateToPage = (tab: 'home' | 'route' | 'book' | 'chat') => {
    setActiveTab(tab);

    const paths: Record<typeof tab, RoutePaths> = {
      home: '/',
      route: '/route',
      book: '/book',
      chat: '/chat',
    };
 
  };

  return (
    <View style={styles.navContainer}>
      <TouchableOpacity
        onPress={() => navigateToPage('home')}
        style={[styles.navButton, activeTab === 'home' && styles.activeButton]}
      >
        <FontAwesome5 name="home" size={20} color={activeTab === 'home' ? '#4F46E5' : '#9CA3AF'} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigateToPage('route')}
        style={[styles.navButton, activeTab === 'route' && styles.activeButton]}
      >
        <FontAwesome5 name="route" size={20} color={activeTab === 'route' ? '#4F46E5' : '#9CA3AF'} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigateToPage('book')}
        style={[styles.navButton, activeTab === 'book' && styles.activeButton]}
      >
        <FontAwesome5 name="book" size={20} color={activeTab === 'book' ? '#4F46E5' : '#9CA3AF'} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigateToPage('chat')}
        style={[styles.navButton, activeTab === 'chat' && styles.activeButton]}
      >
        <FontAwesome5 name="comment" size={20} color={activeTab === 'chat' ? '#4F46E5' : '#9CA3AF'} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navContainer: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  navButton: {
    padding: 12,
    marginHorizontal: 10,
    borderRadius: 20,
  },
  activeButton: {
    backgroundColor: '#E0E7FF',
  },
});

export default FloatingNavBar;
