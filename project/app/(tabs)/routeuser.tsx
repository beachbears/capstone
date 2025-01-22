import React from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  Image, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet,
  Dimensions
} from 'react-native';

const About = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.card}>
        <View style={styles.headerContainer}>
          <View style={styles.userInfo}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>JM</Text>
            </View>
            <View>
              <Text style={styles.userName}>Joanah Marie Aldave</Text>
              <Text style={styles.userHandle}>@jmaldave</Text>
            </View>
          </View>
          <Text style={styles.timeStamp}>12 hours ago</Text>
        </View>

        {/* Location Form Section */}
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Location</Text>
            <TextInput
              style={styles.input}
              placeholder="Novaliches, Bayan Glori"
              placeholderTextColor="#666"
            />
            <Text style={[styles.label, styles.topSpacing]}>Destination</Text>
            <TextInput
              style={styles.input}
              placeholder="Intramuros, Manila City"
              placeholderTextColor="#666"
            />
          </View>

          {/* Vehicle Types Section */}
          <View style={styles.vehicleCard}>
            <View style={styles.fareHeader}>
              <Text style={styles.fareText}>Types of Vehicles</Text>
              <Text style={styles.fareText}>Fare: ₱200.00</Text>
            </View>
            <View style={styles.vehicleTypes}>
              <View style={styles.vehicleItem}>
                <Image 
                  source={require('../../assets/images/logo.png')} 
                  style={styles.vehicleIcon}
                />
                <Text style={styles.vehicleText}>Jeep</Text>
              </View>
              <View style={styles.vehicleItem}>
                <Image 
                  source={require('../../assets/images/logo.png')} 
                  style={styles.vehicleIcon}
                />
                <Text style={styles.vehicleText}>Modern jeep</Text>
              </View>
              <View style={styles.vehicleItem}>
                <Image 
                  source={require('../../assets/images/logo.png')} 
                  style={styles.vehicleIcon}
                />
                <Text style={styles.vehicleText}>Bus</Text>
              </View>
            </View>
            <Text style={styles.estimatedTime}>
              Estimated Time: 45 minutes to 1.5 hours depending on traffic.
            </Text>

            {/* Route Overview */}
            <Text style={[styles.label, styles.topSpacing]}>Route Overview</Text>
            <View style={styles.timeline}>
              <View style={styles.timelineItem}>
                <View style={styles.timelineDot} />
                <View style={styles.timelineContent}>
                  <Text style={styles.timelineLabel}>Get On</Text>
                  <Text style={styles.timelineText}>
                    Ride a jeepney from Glori Bayan, Novaliches, going towards Monumento or EDSA.
                  </Text>
                </View>
              </View>
              {/* Add more timeline items as needed */}
            </View>
          </View>
        </View>

        {/* Experience Section */}
        <View style={styles.experienceSection}>
          <Text style={styles.sectionTitle}>Your experiences</Text>
          <Text style={styles.experienceText}>
            We started our journey at the Intramuros gates, aiming to explore the historic walled city...
          </Text>
        </View>

        {/* Image Section */}
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={styles.locationImage}
          />
          <View style={styles.imageCaption}>
            <Text style={styles.captionTitle}>Intramuros</Text>
            <Text style={styles.captionSubtitle}>Manila City</Text>
          </View>
        </View>

        {/* Post Button */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.postButton}>
            <Text style={styles.buttonText}>Post</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    margin: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#6366F1',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  avatarText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  userName: {
    fontSize: 12,
    fontWeight: '600',
    color: '#374151',
  },
  userHandle: {
    fontSize: 12,
    color: '#6B7280',
  },
  timeStamp: {
    fontSize: 12,
    color: '#6B7280',
  },
  formContainer: {
    paddingHorizontal: 16,
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 12,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 4,
  },
  input: {
    backgroundColor: '#EEF2FF',
    borderWidth: 1,
    borderColor: '#C7D2FE',
    borderRadius: 8,
    padding: 8,
    fontSize: 12,
    color: '#374151',
  },
  topSpacing: {
    marginTop: 16,
  },
  vehicleCard: {
    borderWidth: 1,
    borderColor: '#6366F1',
    borderRadius: 8,
    padding: 12,
    marginTop: 16,
  },
  fareHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  fareText: {
    fontSize: 12,
    color: '#374151',
  },
  vehicleTypes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#EEF2FF',
    borderRadius: 8,
    padding: 12,
  },
  vehicleItem: {
    alignItems: 'center',
  },
  vehicleIcon: {
    width: 28,
    height: 28,
  },
  vehicleText: {
    fontSize: 8,
    color: '#6B7280',
    marginTop: 4,
  },
  estimatedTime: {
    fontSize: 9,
    color: '#6B7280',
    textAlign: 'center',
    marginTop: 8,
  },
  timeline: {
    marginTop: 16,
  },
  timelineItem: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  timelineDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#10B981',
    marginRight: 8,
    marginTop: 6,
  },
  timelineContent: {
    flex: 1,
  },
  timelineLabel: {
    fontSize: 12,
    color: '#10B981',
    fontWeight: '600',
  },
  timelineText: {
    fontSize: 10,
    color: '#6B7280',
    marginTop: 4,
  },
  experienceSection: {
    marginTop: 16,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
  },
  experienceText: {
    fontSize: 10,
    color: '#6B7280',
    lineHeight: 16,
  },
  imageContainer: {
    marginTop: 16,
    position: 'relative',
  },
  locationImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  imageCaption: {
    position: 'absolute',
    bottom: 12,
    left: 16,
  },
  captionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
  captionSubtitle: {
    fontSize: 12,
    color: '#fff',
  },
  buttonContainer: {
    alignItems: 'flex-end',
    marginTop: 16,
  },
  postButton: {
    backgroundColor: '#EEF2FF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
  },
  buttonText: {
    color: '#6366F1',
    fontSize: 14,
  },
});

export default About;