import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import Card from './app/components/Card';
import CardList from './app/components/CardList';

import data from './data'

export default function App() {
  return (
    <>
      <CardList data={data}/>
      <StatusBar style="auto" />
    </>
  );
}
