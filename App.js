import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Card from './app/components/Card';

export default function App() {
  return (
    <View style={styles.container}>
      <Card
        imageUrl={require('./app/assets/images/m3.jpg')}
        title="Model 3"
        subtitle="Order online for touchless delivery"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
