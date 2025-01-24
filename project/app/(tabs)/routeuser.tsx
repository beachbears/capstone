import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SimpleTimeline() {
  return (
    <View style={styles.container}>

      <View style={styles.timeline}>
        <View style={[styles.point, { backgroundColor: 'green' }]} />
        <View style={styles.line} />
       <View style={styles.routeContainer}>
         <View style={styles.paths}>
          <Text style={[styles.getonoff, { color: 'green' }]}>Get On </Text> 
          <Text style={styles.start}>Ride a jeepney from Glori Bayan, Novaliches, going towards Monumento or EDSA.</Text>
         </View>
           <Text style={styles.routes}>Get down at North Avenue along EDSA.</Text>
           <Text style={styles.routes}>Take a jeep or bus heading towards Quezon Avenue.</Text>
           <Text style={styles.routes}>Get down at the intersection of Quezon Avenue and España Boulevard.</Text>
       </View>
      </View>

      <View style={styles.timeline}>
        <View style={[styles.point, { backgroundColor: 'blue' }]} />
        <View style={styles.routeContainer}>
         <View style={styles.timeline}>
          <Text style={[styles.getonoff, { color: 'blue' }]}>Get Off </Text> 
          <Text style={styles.end}>Ride a jeepney from Glori Bayan, Novaliches, going towards Monumento or EDSA.    </Text>
         </View> 
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 30,
    backgroundColor: '#f8f9fa',
    marginTop: 40,
    borderColor: 'black',
    borderRadius: 8,
  },

  timeline: { flexDirection: 'row',},
  point: {width: 16, height: 16, borderRadius: 8, zIndex: 1},
  line: { position: 'absolute', left: 7, width: 2, height: '100%', backgroundColor: 'green', zIndex: 0,},
  routeContainer: { flexDirection: 'row', flexWrap: 'wrap', },
  paths: {flexDirection: 'row', gap: 8,},
  getonoff: {fontSize: 12, fontWeight: 'bold', height: 20, marginLeft: 4, },
  start: {fontSize: 10, color: '#333', marginVertical: 3,},
  routes: {fontSize: 10, color: '#333', marginVertical: 3, marginLeft: 55,},
  end: {fontSize: 10, color: '#333', marginVertical: 3, marginLeft: 4},
  
});
