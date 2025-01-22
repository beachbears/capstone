import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';


const Feedback = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  
    const toggleDropdown = () => { setShowDropdown(!showDropdown);};
    const router = useRouter();

  return (
    <ScrollView style={styles.container}>

      <View style={styles.header}>
        <Image
          source={require('../../assets/images/logo.png')}  
          style={styles.logo}
        />
        <View>
                    <TouchableOpacity onPress={toggleDropdown} style={styles.profileIconContainer}>
                      <View style={styles.profileCircle}>
                        <View style={styles.secondcircle}>
                        <Text style={styles.profileInitial}>G</Text>
                        </View>
                        
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

      <Text style={[styles.heading, styles.centerText]}>Our Feedback</Text>
      <View style={styles.feedbackBox}>
        <Text style={styles.feedbackText}>
          We value your input on <Text style={styles.bold}>TourEase</Text>. Your feedback will help us to improve.
          Please share your thoughts and suggestions to make <Text style={styles.bold}>TourEase</Text> even better!
        </Text>
      </View>

      <View style={styles.cardWrapper}>
            <View  style={styles.card}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>JM</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.name}>Joanah Marie Aldave</Text>
                <Text style={styles.handle}>@jmaldave</Text>
                <View style={{ flexShrink: 1 }}>
                  <Text style={styles.comment}>
                    Old-world Intramuros is home to Spanish-era landmarks like Fort Santiago, with a large stone gate and a shrine to national hero José Rizal. Apaka angas bbossing!
                  </Text>
                </View>
              </View>
            </View>
      </View>

      <View style={styles.cardWrapper}>
            <View  style={styles.card}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>JM</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.name}>Joanah Marie Aldave</Text>
                <Text style={styles.handle}>@jmaldave</Text>
                <View style={{ flexShrink: 1 }}>
                  <Text style={styles.comment}>
                    Old-world Intramuros is home to Spanish-era landmarks like Fort Santiago, with a large stone gate and a shrine to national hero José Rizal. Apaka angas bbossing!
                  </Text>
                </View>
              </View>
            </View>
      </View>

      <View style={styles.cardWrapper}>
            <View  style={styles.card}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>JM</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.name}>Joanah Marie Aldave</Text>
                <Text style={styles.handle}>@jmaldave</Text>
                <View style={{ flexShrink: 1 }}>
                  <Text style={styles.comment}>
                    Old-world Intramuros is home to Spanish-era landmarks like Fort Santiago, with a large stone gate and a shrine to national hero José Rizal. Apaka angas bbossing!
                  </Text>
                </View>
              </View>
            </View>
      </View>

      

      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/feedback.png')}  
          style={styles.image}
        />
      </View>

      <Text style={[styles.bottomHeading, styles.centerText]}>Our Feedback</Text>
       
      <View style={styles.feedbackBox}>
        <Text style={styles.additionalFeedback}>
          Discover additional feedback and insights shared{"\n"}
          by users about their experiences with TourEase.
        </Text>
      </View>

      <TouchableOpacity style={styles.getStartedButton}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.floatingButton}>
        <Text style={styles.floatingButtonText}>+</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },

  header: {flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 50, 
    width: '90%',alignSelf: 'center', marginBottom: 20,
   },

  logo: {width: 40,
    height: 40,
    resizeMode: 'contain',},

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
    secondcircle: {
      width: 30,
      height: 30,
      borderRadius: 20,
      backgroundColor: '#4F46E5',
      alignItems: 'center',
      justifyContent: 'center',
    },
    profileInitial: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'white',
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

  heading: {
    fontSize: 20,
    fontWeight: '600',
    color: '#4a4a4a',
    marginTop: 5,  
  },
  centerText: {
    textAlign: 'center',
  },
  bottomHeading: {
    fontSize: 20,
    fontWeight: '600',
    color: '#4a4a4a',
    marginTop: 0, 
  },
  feedbackBox: {
    backgroundColor: '#f9f9f89',
    marginHorizontal: 16,
    marginTop: 1,
    borderRadius: 8,
  },
  feedbackText: {
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: 30,
  },
  bold: {
    fontWeight: 'bold',
  },
  cardWrapper: {
    justifyContent: 'center',  
    alignItems: 'center',  
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    margin: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    elevation: 2,
    width: '80%',   
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#6366f1',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  avatarText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
  },
  handle: {
    fontSize: 12,
    color: '#9ca3af',
  },
  comment: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 8,
    flexWrap: 'wrap',   
  },
  imageContainer: {
    alignItems: 'center',
    
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  additionalFeedback: {
    textAlign: 'center',
    color: '#6b7280',
    fontSize: 14,
    marginVertical: 16,
  },
  getStartedButton: {
    backgroundColor: '#6366f1',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignSelf: 'center',
    marginVertical: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  floatingButton: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    width: 40,
    height: 40,
    borderRadius: 28,
    backgroundColor: '#6366f1',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    elevation: 4,
  },
  floatingButtonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Feedback;
