import { router } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons, FontAwesome5, FontAwesome6 } from '@expo/vector-icons';


const TravelDirections = () => {
  return (
    <View style={styles.whole} >
   
      <View style={styles.routeline}>
      <View style={{ flexDirection: 'row', gap: 5}}>

      <Text style={[styles.getOnOff, { color: 'green' }]}>Get On</Text>
      <Text style={styles.startendroute}>Ride a jeepney from Glori Bayan, Novaliches, going towards Monumento or EDSA.</Text>
      
      </View>
        <View style={styles.greencircle}>
        </View>
       
        <View style={styles.routes}>
      
          <Text style={styles.directionText}>Get down at North Avenue along EDSA.</Text>
        <Text style={styles.directionText}>Take a jeep or bus heading towards Quezon Avenue.</Text>
        <Text style={styles.directionText}>Get down at the intersection of Quezon Avenue and España Boulevard.</Text>
        </View>
        </View>
        
        <View style={{ flexDirection: 'row', gap: 6}}>
           
           
             <Text style={[styles.getOnOff, { color: 'blue' }]}>    Get Off</Text>
             <Text style={styles.startendroute}>Ride a jeep to Manila, then get off at Lerma Street.</Text>
            
             <View style={styles.bluecircle}> </View>  
        </View>
       
      
       <View style={{ flexDirection: 'row', marginLeft:40, gap:15, marginTop: 4 }}>
               <FontAwesome5 name="walking" size={20} color="#6B7280" />
                <Text style={styles.walkroutes}>Walk to Intramuros via Padre Burgos or General Luna Street.</Text>
              </View>



              
  
    </View>

  );
};

const styles = StyleSheet.create({
  whole: { flexDirection: 'column', padding: 30, backgroundColor: '#F9FAFB', width: '100%' },
 
  routeline: { paddingLeft: 14,
    borderLeftWidth: 3  ,
    borderLeftColor: 'green',
    position: 'relative',
  },
  greencircle: {
    position: 'absolute',
    left: -9 ,
    paddingHorizontal: 8,
    paddingVertical: 8,
    width: 2, 
    height: 2, 
    borderRadius: 24, 
    backgroundColor: 'green', 
    alignItems: 'center', 
    justifyContent: 'center', 
    marginRight: 16,
  },
  bluecircle: {
    position: 'absolute',
    left: -7 ,
    paddingHorizontal: 8,
    paddingVertical: 8,
    width: 2, 
    height: 2, 
    borderRadius: 24, 
    backgroundColor: 'blue', 
    alignItems: 'center', 
    justifyContent: 'center', 
    marginRight: 16,
  },

  routes: {flexDirection: 'column',},
  getOnOff: {
    fontSize: 12, fontWeight: 'bold'  
  
  },
  directionText: {
    fontSize: 10,
    color: '#6B7280',
    marginBottom: 8,
    marginLeft: 50,
  },
  startendroute:{
    fontSize: 10,
    color: '#6B7280',
    marginBottom: 8,
    marginLeft: 5,
  },
    
  walkroutes: {
    fontSize: 10, color: '#6B7280', marginVertical: 6,
  },
});

export default TravelDirections;