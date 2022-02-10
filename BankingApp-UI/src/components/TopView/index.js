import React from 'react';
import { ScrollView, StyleSheet, Text, View} from 'react-native';

export default function Topview() {
  return (
    <View style={styles.container}>
    <ScrollView horizontal={true}>
      <View style={styles.box1}>
        <Text style={{color:"#A6B5C5", fontSize:20}}>Personal funds:</Text>
        <Text style={{color:"#fff", fontSize:20}}>$14,000</Text>
        <Text style={{backgroundColor:"#47485B", color:"#A6B5C5", fontSize:20}}>Credit Limit: $10,000</Text>
      </View>
      <View>
        <Text>Credit Card</Text>
      </View>
    </ScrollView>
      <Text>Buttons</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#030306',
    alignItems: "center",
  },
  box1: {
    backgroundColor: "blue",
    
  }
});
