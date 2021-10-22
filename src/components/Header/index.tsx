import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import LogoSvg from '../../assets/logo.svg';
import { styles } from './styles';
import { UserPhoto } from '../UserPhoto';

export function Header() {
  return (
    <View style={styles.container}>
      <LogoSvg />

      <View style={styles.logoutButton}>
        <TouchableOpacity>
          <Text style={styles.logoutText}>
            Sair
          </Text>
        </TouchableOpacity>
        <UserPhoto
          imgUri='https://github.com/hfmiguel.png'
          sizes='NORMAL'
        />
      </View>

    </View>
  );
}