import React from 'react';
import { styles } from './styles';
import { View, Text } from 'react-native';
import { Header } from '../../components/Header';
import { MessageList } from '../../components/MessageList';

export function Home() {
  return (
    <View style={styles.container}>
      <Header />


      <MessageList />
      
    </View>
  );
}