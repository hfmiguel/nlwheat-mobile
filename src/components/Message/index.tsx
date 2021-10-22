import React from 'react';
import { styles } from './styles';
import { View, Text } from 'react-native';
import { UserPhoto } from '../UserPhoto/index';
import { MotiView } from 'moti'

type MessageProps = {
  id: string;
  text: string;
  user: {
    id: string;
    name: string;
    avatar_url: string;
  }
}

type Props = {
  data: MessageProps
}

export function Message({ data }: Props) {
  return (
    <MotiView
      style={styles.container}
      from={{ opacity: 0, translateY: -50 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 700, type: 'timing' }}
    >
      <Text style={styles.message}>
        {data.text}
      </Text>

      <View style={styles.footer}>
        <UserPhoto
          sizes="SMALL"
          imgUri={data.user.avatar_url}
        />
        <Text style={styles.userName}>
          {data.user.name}
        </Text>
      </View>

    </MotiView>
  );
}