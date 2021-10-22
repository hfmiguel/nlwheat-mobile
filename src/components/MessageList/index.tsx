import React from 'react';
import { styles } from './styles';
import { ScrollView, View } from 'react-native';
import { Message } from '../Message';

export function MessageList() {

  const messages = {
    id: "1",
    text: "teste",
    user: {
      id: "1",
      name: "Henrique felix",
      avatar_url: "https://github.com/hfmiguel.png"
    }
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps='never'
    >
      <Message data={messages} />
      <Message data={messages} />
      <Message data={messages} />
      <Message data={messages} />
      <Message data={messages} />
      <Message data={messages} />
      <Message data={messages} />
      <Message data={messages} />
    </ScrollView >
  );
}