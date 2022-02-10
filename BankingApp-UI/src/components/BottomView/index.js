import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';

export default function Bottomview() {
  return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={{fontSize:400, color:"#030306"}}>HELLO World</Text>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },
});
