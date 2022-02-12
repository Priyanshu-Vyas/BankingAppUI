import React from 'react';
import {ScrollView, StyleSheet, Text, View, Image, Button} from 'react-native';

export default function Topview() {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        contentContainerStyle={{alignItems: 'center', paddingRight: '69%'}}>
        <View style={styles.box1}>
          <Text style={{color: '#A6B5C5', fontSize: 20}}>Personal funds:</Text>
          <Text style={{color: '#fff', fontSize: 50}}>$14,000</Text>
          <View
            style={{
              borderRadius: 10,
              backgroundColor: '#47485B',
              padding: '2%',
            }}>
            <Text
              style={{
                color: '#A6B5C5',
                fontSize: 20,
              }}>
              Credit Limit: $10,000
            </Text>
          </View>
        </View>
        <View style={styles.box2}>
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMTdSDeBO_qL-9TJ8ogpsgfSMFrzDn8115gA&usqp=CAU',
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.box3}>
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5d9sHqYDnZl85FgCx9MLDl_UmvvV741kurg&usqp=CAU',
            }}
            style={styles.image}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#030306',
  },
  box1: {
    paddingHorizontal: '5%',
  },
  box2: {
    paddingHorizontal: '5%',
  },
  box3: {
    paddingHorizontal: '5%',
  },
  image: {
    width: 320,
    height: 207,
    borderRadius: 15,
  },
});
