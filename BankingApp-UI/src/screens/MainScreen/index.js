import React from 'react';
import {View} from 'react-native';
import Topview from '../../components/TopView';
import Bottomview from '../../components/BottomView';

export default function Mainscreen({navigation}) {
  return (
    <View style={{flex:1, backgroundColor:"#030306"}}>
      <Topview/>
      <Bottomview/>
    </View>
  );
}