import React from 'react';
import { styles } from './styles';
import { Image } from 'react-native';
import avatarImg from '../../assets/avatar.png'
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '../../theme';

const SIZES = {
  SMALL: {
    containerSize: 40,
    avatarSize: 35
  },
  NORMAL: {
    containerSize: 55,
    avatarSize: 50
  }
}
const AVATAR_DEFAULT = Image.resolveAssetSource(avatarImg).uri;


type Props = {
  imgUri: string | undefined,
  sizes?: 'SMALL' | 'NORMAL',
}

export function UserPhoto({ imgUri, sizes = 'NORMAL' }: Props) {

  const { containerSize, avatarSize } = SIZES[sizes];

  return (
    <LinearGradient
      start={{ x: 0, y: 0.8 }}
      end={{ x: 0.9, y: 1 }}
      colors={[
        COLORS.PINK,
        COLORS.YELLOW
      ]}
      style={[
        styles.container,
        {
          width: containerSize,
          height: containerSize,
          borderRadius: containerSize / 2
        }
      ]}
    >
      <Image
        source={{ 'uri': imgUri || AVATAR_DEFAULT }}
        style={[
          styles.avatar, {
            width: avatarSize,
            height: avatarSize,
            borderRadius: avatarSize / 2
          }
        ]}
      />
    </LinearGradient>
  );
}