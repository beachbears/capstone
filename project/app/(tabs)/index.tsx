import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

const Feedback = () => {
  return (
    <ScrollView style={styles.container}>
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
  heading: {
    fontSize: 20,
    fontWeight: '600',
    color: '#4a4a4a',
    marginTop: 60,  
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
    backgroundColor: '#f5f5f5',
    padding: 2,
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
    width: '60%',   
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
    width: 56,
    height: 56,
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
