import React, { useState } from 'react'; // Import useState
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, } from 'react-native';
import Octicons from '@expo/vector-icons/Octicons';
import Entypo from '@expo/vector-icons/Entypo';
import DropDownPicker from 'react-native-dropdown-picker';

export default function TabTwoScreen() {
  const [location, setLocation] = useState('');
  const [destination, setDestination] = useState('');

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
  
    { label: 'Time', value: 'Time' },
    { label: 'Fare Cost', value: 'Fare Cost' },
    { label: 'Destination', value: 'Destination' },
    { label: 'Popularity', value: 'Popularity' },
  ]);
  

  return (
    <ScrollView style={styles.container}>
     
     <View style={styles.width}>
     <View style={styles.header}>
        <Text style={styles.detailsText}>Details</Text>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Post</Text>
        </TouchableOpacity>
        </View>

      <Text style={styles.label}>Location</Text>
      <TextInput
        style={styles.input}
        value={location}
        onChangeText={setLocation}
        placeholder="Novaliches, Bayan Glori"
        placeholderTextColor="#9CA3AF"
         
      />

      <Text style={styles.label}>Destination</Text>
      <TextInput
        style={styles.input}
        value={destination}
        onChangeText={setDestination}
        placeholder="Intramuros, Manila City"
        placeholderTextColor="#9CA3AF"
      />
      
      <Text style={styles.text}>Best Way</Text>

      
        <View  style={styles.card}>
        <View style={styles.top}> 
        <View style={styles.avatar}>
        <Text style={styles.avatarText}>NN</Text>
        </View>
        <Text style={styles.app}>App Name</Text> </View>
                        <Text style={styles.destination}>Destination: Intramuros, Manila</Text>
                        <Text style={styles.description}>Tourist Spot Description</Text>
                          <Text style={styles.comment}>
                          Intramuros represents the Philippines' colonial past,
      where the Spanish influence is deeply woven into the country's
      culture, architecture, and traditions. It is a symbol of both
      the glory and the struggles during the Spanish colonization.
      Today, it serves as a popular tourist destination that offers
      a look back in time, showcasing historical landmarks, museums,
      and the enduring spirit of the Filipino people
  </Text>

  <View style={styles.iconStatus}>
  <Octicons name="shield-check" size={18} color="blue"/>
  <Text style={styles.status}>Status</Text> 
  <View style={styles.badge}>
  <Entypo name="check" size={14} color="#03C04A" />
      <Text style={styles.cert}>Certified AppName</Text>
    </View>
        </View>
    </View>


  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginTop: 30 }}>
  <Text style={{ color: '#4B5563', fontWeight: 'bold', fontSize: 16, flexShrink: 1 }}>
    Route Post Suggestion
  </Text>
  
  <View style={{ width: 120, height: 40,  position: 'relative', // Ensure the dropdown can escape this container
  overflow: 'visible', zIndex: 1000, // Important: Allows the dropdown to extend outside the parent
 }}>
  <DropDownPicker
    open={open}
    value={value}
    items={items}
    setOpen={setOpen}
    setValue={setValue}
    setItems={setItems}
    style={{
      backgroundColor: '#FFFFFF',
      borderColor: '#6366F1',
      borderWidth: 1,
      borderRadius: 8,
      width: 120, // Set the width for the dropdown button
      minHeight: 10, // Use minHeight for dropdown button
      paddingVertical: 4, // Adjust padding to affect height
      overflow: 'visible',
      zIndex: 1000,

    }}
    dropDownContainerStyle={{
      overflow: 'visible',
      backgroundColor: '#FFFFFF',
      borderColor: '#6366F1',
      width: 120, // Ensure the dropdown container matches the button width
      elevation: 5,
      zIndex: 1000, // Ensure this value is higher than surrounding components
    }}
    
    textStyle={{
      fontSize: 14, // Smaller font size for dropdown items
      color: '#111827',
      padding: 0,
      zIndex: 1000,
    }}
    placeholder="Time" 
  placeholderStyle={{
    fontSize: 14,
    color: '#111827',
    zIndex: 1000,
  }}
    
  />
</View>


  
</View>

   
<View  style={styles.card}>
        <View style={styles.top}> 
        <View style={styles.avatar}>
        <Text style={styles.avatarText}>NN</Text>
        </View>
        <View style={styles.user}>
        <Text style={styles.name}>User</Text> 
        <Text style={styles.username}>@username</Text> 
        </View>
        <Text style={styles.timedate}>12 Hours ago</Text> 
        </View>
                        <Text style={styles.destination}>Destination: Intramuros, Manila</Text>
                        <Text style={styles.touristexp}>Tourist Experience:</Text>
                          <Text style={styles.comment}>
                          Intramuros represents the Philippines' colonial past,
      where the Spanish influence is deeply woven into the country's
      culture, architecture, and traditions. It is a symbol of both
      the glory and the struggles during the Spanish colonization.
      Today, it serves as a popular tourist destination that offers
      a look back in time, showcasing historical landmarks, museums,
      and the enduring spirit of the Filipino people
  </Text>

  <View style={styles.iconStatus}>
  <Octicons name="shield-check" size={18} color="blue"/>
  <Text style={styles.status}>Status</Text> 
  <View style={styles.badge}>
  <Entypo name="check" size={14} color="#03C04A" />
      <Text style={styles.cert}>Certified AppName</Text>
    </View>
        </View>
    </View>
     
      








      
      </View>
      
      
</ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  width: {
    flexDirection: 'column',
    padding: 16,
    backgroundColor: '#F9FAFB',
    width: '80%',
    maxWidth: 640,
    alignSelf: 'center',
    borderRadius: 8,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
    backgroundColor: '#F9FAFB',
    width: '100%',
    maxWidth: 640,
    alignSelf: 'center',
    borderRadius: 8,
  },
  detailsText: {
    color: '#4B5563',
    fontWeight: 'bold',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#6366F1',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
  label: {
    marginTop: 8,
    color: '#6B7280',
    fontSize: 14,
  },
  input: {
    backgroundColor: '#E0E7FF',
    borderColor: '#C7D2FE',
    color: '#374151',
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 12,
    marginTop: 4,
    fontSize: 14,
    width: '100%',
    marginBottom: 16,
  },
  text: {
    color: '#4B5563',
    fontWeight: 'bold',
    fontSize: 16,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E5E7EB',
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
    marginVertical: 20,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 24,
    backgroundColor: '#6366f1',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  avatarText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: 'bold',
  },
  app: {
    fontSize: 12,
    fontWeight: '700',
    color: '#4B5563',
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  username: {
    fontSize: 12,
    color: '#6B7280',
  },
  destination: {
    fontSize: 12,
    color: '#6B7280',
    fontWeight: '500',
    marginLeft: 50,
    marginTop: 6,
  },
  description: {
    fontSize: 12,
    marginVertical: 4,
    color: '#6B7280',
    fontWeight: '500',
    marginLeft: 50,
  },
  comment: {
    fontSize: 12,
    color: '#6B7280',
    flexWrap: 'wrap',
    marginLeft: 50,
  },
  iconStatus: {
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 10,
  },
  status: {
    fontSize: 12,
    color: '#4B5563',
    fontWeight: '500',
    flexDirection: 'row',
    alignItems: 'center',
  },
  badge: {
    borderWidth: 1,
    borderColor: '#4ade80',
    borderRadius: 5,
    paddingHorizontal: 4,
    paddingVertical: 2,
    backgroundColor: '#ecfdf5',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  cert: {
    color: '#22c55e',
    fontWeight: '500',
    fontSize: 12,
  },
  user: {
    flexDirection: 'column',
    marginBottom: 10,
  },
  name: {
    fontSize: 13,
    color: '#6B7280',
    fontWeight: '700',
  },
  touristexp: {
    marginVertical: 10,
    marginLeft: 50,
    fontSize: 12,
    color: '#6B7280',
    fontWeight: '500',
  },
  timedate: {
    fontSize: 12,
    color: '#6B7280',
    marginLeft: 380,
  },
});