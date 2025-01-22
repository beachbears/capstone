import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { useRouter } from 'expo-router'; // Import useRouter from expo-router
import FloatingNavBar from './FloatingNavBar'; // Assuming FloatingNavBar is in the same folder

const Home = () => {
  const router = useRouter(); // useRouter hook to access routing functionality

  const [showDropdown, setShowDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const touristAttractions = [
    { id: 1, name: "Intramuros", city: "Manila", image: require('../../assets/images/logo.png') },
    { id: 2, name: "Rizal Park", city: "Manila", image: require('../../assets/images/logo.png') },
    { id: 3, name: "National Museum of Fine Arts", city: "Manila", image: require('../../assets/images/logo.png') },
    { id: 4, name: "SM Mall of Asia", city: "Pasay", image: require('../../assets/images/logo.png') },
    { id: 5, name: "Bonifacio High Street", city: "Taguig", image: require('../../assets/images/logo.png') },
    { id: 6, name: "Quezon Memorial Circle", city: "Quezon City", image: require('../../assets/images/logo.png') },
    { id: 7, name: "Eastwood City", city: "Quezon City", image: require('../../assets/images/logo.png') },
    { id: 8, name: "Star City", city: "Pasay", image: require('../../assets/images/logo.png') },
  ];

  const filteredAttractions = touristAttractions.filter(attraction =>
    attraction.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardVisible(true);
    });
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardVisible(false);
    });

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <ScrollView
          contentContainerStyle={[styles.scrollContent, keyboardVisible && styles.scrollViewWithKeyboard]}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.header}>
            <View style={styles.logoContainer}>
              <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
              <Text style={styles.logoText}>Lokacion</Text>
            </View>
            <View>
              <TouchableOpacity onPress={toggleDropdown} style={styles.profileIconContainer}>
                <View style={styles.profileCircle}>
                  <Text style={styles.profileInitial}>G</Text>
                </View>
              </TouchableOpacity>
              {showDropdown && (
                <View style={styles.dropdown}>
                  <Text style={styles.dropdownTitle}>
                    You are currently browsing as a <Text style={styles.boldText}>Guest</Text>
                  </Text>
                  <TouchableOpacity style={styles.dropdownButton} onPress={() => console.log("Login clicked")}>
                    <Text style={styles.dropdownButtonText}>Login</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.dropdownButton, styles.signupButton]}
                    onPress={() => router.push('/explore')} // Navigate to the explore page
                  >
                    <Text style={styles.signupButtonText}>Sign Up</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </View>

          <View style={styles.heroContainer}>
            <View style={styles.headerContent}>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>Official application</Text>
              </View>
              <Text style={styles.title}>
                Simply Travel with <Text style={styles.highlight}>Lokacion</Text>
              </Text>
              <Text style={styles.description}>
                Conquer the Metro with ease! <Text style={styles.boldText}>Lokacion: Gabay ko, Byahe Mo!!!</Text> your companion for hassle-free commuting, offering clear routes, and navigation to make every journey stress-free.
              </Text>

              <Image source={require('../../assets/images/logo.png')} style={styles.conquerImage} />

              <View style={styles.searchContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Whachu lookin' for?"
                  placeholderTextColor="#000000"
                />
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Let's go</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.attractionsContainer}>
            <Text style={styles.attractionsTitle}>Cities Tourist Attractions</Text>
            <View style={styles.searchBarContainer}>
              <TextInput
                style={styles.searchBar}
                placeholder="Search Attractions"
                value={searchQuery}
                onChangeText={setSearchQuery}
              />
            </View>

            <ScrollView style={styles.attractionsList}>
              {filteredAttractions.map((attraction) => (
                <TouchableOpacity key={attraction.id} style={styles.attractionItem}>
                  <ImageBackground
                    source={attraction.image}
                    style={styles.attractionImage}
                  >
                    <View style={styles.attractionText}>
                      <Text style={styles.attractionTitle}>
                        {attraction.name}
                      </Text>
                      <Text style={styles.attractionCity}>
                        {attraction.city}
                      </Text>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>

      <View style={[styles.navbarContainer, keyboardVisible && styles.fixedNavbar]}>
        <FloatingNavBar />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  scrollContent: {
    padding: 16,
  },
  scrollViewWithKeyboard: {
    paddingBottom: 100, // Adjust bottom padding when keyboard is visible
  },
  navbarContainer: {
    position: 'relative',
  },
  fixedNavbar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 100,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 16,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 30,
    marginRight: 8,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4F46E5',
  },
  profileIconContainer: {
    padding: 8,
  },
  profileCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E0E7FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileInitial: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4F46E5',
  },
  dropdown: {
    position: 'absolute',
    top: 50,
    right: 0,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    padding: 16,
    zIndex: 10,
    width: 200,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  dropdownTitle: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 10,
  },
  boldText: {
    fontWeight: '700',
    color: '#374151',
  },
  dropdownButton: {
    width: '100%',
    backgroundColor: '#E5E7EB',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 8,
  },
  dropdownButtonText: {
    fontSize: 14,
    color: '#4F46E5',
    fontWeight: '600',
  },
  signupButton: {
    backgroundColor: '#4F46E5',
  },
  signupButtonText: {
    color: '#FFFFFF',
  },
  heroContainer: {
    flex: 1,
    paddingRight: 16,
  },
  headerContent: {
    alignItems: 'flex-start',
    textAlign: 'left',
  },
  badge: {
    backgroundColor: '#E0E7FF',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 9999,
    marginBottom: 16,
  },
  badgeText: {
    color: '#4F46E5',
    fontSize: 12,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    textAlign: 'left',
    marginBottom: 16,
  },
  highlight: {
    color: '#4F46E5',
  },
  description: {
    fontSize: 16,
    maxWidth: 500,
    textAlign: 'left',
    marginBottom: 16,
  },
  conquerImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginTop: 16,
  },
  searchContainer: {
    width: '100%',
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#4F46E5',
    borderWidth: 1,
    borderRadius: 16,
  },
  input: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    color: '#333',
  },
  button: {
    backgroundColor: '#4F46E5',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 16,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  attractionsContainer: {
    width: '100%',
    marginTop: 32,
  },
  attractionsTitle: {
    textAlign: 'left',
    marginBottom: 16,
    fontWeight: '700',
    fontSize: 18,
  },
  searchBarContainer: {
    marginTop: 16,
    marginBottom: 16,
    width: '100%',
  },
  searchBar: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderColor: '#4F46E5',
    borderWidth: 1,
    width: '70%',
  },
  attractionsList: {
    maxHeight: 350,
  },
  attractionItem: {
    height: 180,
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 16,
  },
  attractionImage: {
    width: '100%',
    height: '100%',
    borderRadius: 16,
    resizeMode: 'cover',
  },
  attractionText: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    color: 'white',
  },
  attractionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: 'white',
  },
  attractionCity: {
    fontSize: 14,
    color: 'white',
  },
});

export default Home;
