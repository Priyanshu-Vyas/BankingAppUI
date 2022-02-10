import React from 'react';
import {ScrollView} from 'react-native';
import Topview from '../../components/TopView';
import Bottomview from '../../components/BottomView';

export default function Mainscreen({navigation}) {
  return (
    <>
      <Topview/>
      <Bottomview/>
    </>
  );
}