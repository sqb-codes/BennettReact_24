import { View, Text, ActivityIndicator } from 'react-native';
import React from 'react';
import { styles } from '../common.styles';

export default function App() {
  return (
    <View style={styles.container}>
      <ActivityIndicator />
    </View>
  )
}