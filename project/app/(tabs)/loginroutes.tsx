import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, TextInput, } from 'react-native';
import { MaterialCommunityIcons, FontAwesome5, FontAwesome6 } from '@expo/vector-icons';


export default function TabTwoScreen() {
    const stepsCount = 4; // Replace with actual number of steps
const lineHeight = stepsCount * 38; // Adjust the multiplier based on step spacing

return (
<ScrollView style={styles.maincontainer}>

    <View style={styles.userDetails}>
     <View style={styles.circle}>
       <Text style={styles.userinitial}>AR</Text>
     </View>
        <View style={styles.nameemail}>
          <Text>
          <Text style={styles.username}>Ashley Ruaza</Text>
          <Text style={styles.email}>@ashruaza</Text>
          </Text>
          
        </View>
    </View>
       
    <View style={styles.container}>
      <Text style={styles.label}>Location</Text>
      <TextInput style={styles.userlocation} placeholder="Novaliches, Bayan Glori" placeholderTextColor="#666" />
        <Text style={[styles.label]}>Destination</Text>
      <TextInput style={styles.userdestination} placeholder="Intramuros, Manila City" placeholderTextColor="#666"/>
    </View>

    <View style={styles.routecontainer}>
     <View style={styles.position}>
       
        <Text style={styles.label}>Types of Vehicles</Text>
        <Text style={styles.fare}>Fare: ₱200.00</Text>
       
     </View>

      <View style={styles.vehicleTypes}>
        <View style={styles.vehicleItem}>
          <MaterialCommunityIcons name="jeepney" size={27} color= '#4F46E5' />
          <Text style={styles.vehicleText}>Jeep</Text>
        </View>
         <View style={styles.vehicleItem}>
         <View style={{ paddingBottom: 2, paddingTop: 2}}><FontAwesome6 name="bus-simple" size={22} color="#4F46E5" /></View>
          <Text style={[styles.vehicleText]}>Modern jeep</Text>
         </View>
          <View style={styles.vehicleItem}>
           <FontAwesome5 name="bus-alt" size={24} color= '#4F46E5' />
           <Text style={styles.vehicleText}>Bus</Text>
          </View>
        </View>

        <Text style={styles.estimatedTime}>Estimated Time: 45 minutes to 1.5 hours depending on traffic.</Text>
        <View style={{marginTop: 10, gap:4}}>
        <Text style={styles.label}>Route Overview</Text>
        </View>
       
          <View style={styles.routeline}>
            <View style={{ flexDirection: 'row', gap: 5}}>
              <Text style={[styles.getOnOff, { color: 'green' }]}>Get On</Text>
              <Text style={styles.startendroute}>Ride a jeepney from Glori Bayan, Novaliches, going towards Monumento or EDSA.</Text>
            </View>
            <View style={styles.greencircle}></View>
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
    </View>  {/* routecontainer */}
       
       <Text style={{fontSize: 13, color: '#6B7280', fontWeight: '700', marginTop: 15,}}>Your Experiences</Text>
       <Text style={styles.experience}>We started our journey at the Intramuros gates, aiming to explore the historic walled city. We initially struggled with finding parking, but a guard directed us to a nearby lot. The cobblestone streets were enchanting but tricky to navigate without a map. A tricycle driver offered a short tour, which made it easier to locate iconic spots like Fort Santiago and San Agustin Church. Getting lost led us to a quaint café serving authentic Filipino dishes.</Text>
       
       <View style={{flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 10}}>
         <Text style={{fontSize: 13, color: '#6B7280', fontWeight: '700', marginTop: 10,}}>Comments</Text>
         <View style={styles.commentcircle}>
           <Text style={styles.numofcomments}>12</Text>
         </View>
       </View>

        <View style={styles.commenterDetails}>
        <View style={styles.circlecomment}>
            <Text style={styles.commenterinitial}>AR</Text>
        </View>
        <View style={[ { flexDirection: 'column',}]}>
            <Text style={styles.commentername}>Ashley Ruaza</Text>
            <Text style={styles.commenteremail}>@ashruaza</Text>  
        </View>
    </View>

    <Text style={styles.comment}>We started our journey at the Intramuros gates, aiming to explore the historic walled city. We initially struggled with finding parking, but a guard directed us to a nearby lot. The cobblestone streets.</Text>
    <View style={[{ flexDirection: 'row', justifyContent: 'space-between', gap:2}]}>
      <TextInput style={styles.commenttextbox} placeholder="Write a comment" placeholderTextColor="#666"/>
      <TouchableOpacity style={styles.button} onPress={() => { }}>
        <Text style={styles.buttonText}>Post</Text>
      </TouchableOpacity>
    </View>
</ScrollView>
);}


const styles = StyleSheet.create({

  maincontainer: { flexDirection: 'column', padding: 30, backgroundColor: '#F9FAFB', width: '100%' },
  userDetails: {flexDirection: 'row', alignItems: 'center', marginBottom:14,},
  circle: {width: 36, height: 36, borderRadius: 24, backgroundColor: '#6366f1', alignItems: 'center', justifyContent: 'center', marginRight: 16,},
  userinitial: { color: '#fff', fontSize: 11, fontWeight: 'bold',},
  nameemail: {flexDirection: 'column',},
  username: {fontSize: 13, color: '#6B7280', fontWeight: '700',},
  email: { fontSize: 12, color: '#6B7280',},
  
  container:{padding:8},
  label:{fontSize: 12, fontWeight: '500', color: '#6B7280',},
  userlocation: {backgroundColor: '#EEF2FF', borderWidth: 1, borderColor: '#C7D2FE', borderRadius: 8, padding: 8, fontSize: 11, color: '#374151', marginVertical: 8,}, 
  userdestination: {backgroundColor: '#EEF2FF', borderWidth: 1, borderColor: '#C7D2FE', borderRadius: 8, padding: 8,fontSize: 11, color: '#374151', marginVertical: 8,}, 
  
  routecontainer:{borderWidth: 1, borderColor: '#C7D2FE',borderRadius: 8, padding:10, flexDirection: 'column', gap: 8, width: '100%', },
  fare: {fontSize: 12, fontWeight: '500', color: '#6B7280',},
  position: { flexDirection: 'row', justifyContent: 'space-between',},
  vehicleTypes: { flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#EEF2FF', borderRadius: 8, padding: 4,},
  vehicleItem: { alignItems: 'center',},
  vehicleText: {fontSize: 9, color: '#6B7280', marginVertical: 4,},
  estimatedTime: {fontSize: 8,color: '#6B7280', textAlign: 'center',},
 
   
  routeline: { paddingLeft: 14, borderLeftWidth: 3  ,borderLeftColor: 'green',position: 'relative',},
  greencircle: {position: 'absolute',left: -9 ,paddingHorizontal: 8,paddingVertical: 8,width: 2, height: 2, borderRadius: 24, backgroundColor: 'green', alignItems: 'center', justifyContent: 'center', marginRight: 16,},
  bluecircle: {position: 'absolute',left: -7 ,paddingHorizontal: 8,paddingVertical: 8,width: 2, height: 2, borderRadius: 24, backgroundColor: 'blue', alignItems: 'center', justifyContent: 'center', marginRight: 16,},
  routes: {flexDirection: 'column',},
  getOnOff: {fontSize: 12, fontWeight: 'bold'},
  directionText: {fontSize: 10,color: '#6B7280',marginBottom: 8,marginLeft: 50,},
  startendroute:{fontSize: 10,color: '#6B7280',marginBottom: 8,marginLeft: 5,},
  walkroutes: {fontSize: 10, color: '#6B7280', marginVertical: 6,},

  experience: { fontSize: 12, color: '#6B7280', marginVertical: 8,},
  commentcircle: {width: 20, height: 20, borderRadius: 24, backgroundColor: '#EEF2FF', alignItems: 'center', justifyContent: 'center', marginRight: 16,},
  numofcomments: {fontSize: 10, color: '#6366f1', fontWeight: 700,},

  commenterDetails: {flexDirection: 'row', alignItems: 'center', marginBottom:8, marginTop: 18,} ,
  circlecomment: {width: 36, height: 36, borderRadius: 24, backgroundColor: '#6366f1', alignItems: 'center', justifyContent: 'center', marginRight: 16,},
  commenterinitial: { color: '#fff', fontSize: 11, fontWeight: 'bold',},
  commentername: {fontSize: 13, color: '#6B7280', fontWeight: '700',},
  commenteremail: { fontSize: 12, color: '#6B7280',},
  comment: { fontSize: 12, color: '#6B7280',},

  commenttextbox: {backgroundColor: '#EEF2FF', borderWidth: 1, borderColor: '#C7D2FE', borderRadius: 8, padding: 6,fontSize: 11, color: '#374151', }, 
  button: {backgroundColor: '#6366F1', paddingHorizontal: 12, paddingVertical: 0, borderRadius: 10, justifyContent: 'center', alignItems: 'center',},
  buttonText: {color: 'white', fontSize: 11, paddingVertical: 2},
})

