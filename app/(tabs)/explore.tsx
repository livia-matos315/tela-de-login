import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Explore() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explore</Text>
      <Image
        style={styles.logo}
        source={require('../../assets/images/logo.png')}
        resizeMode="contain"
      />
      <Text style={styles.text}>Imagem carregada via caminho relativo (sem alias "@/").</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 12,
  },
  text: {
    fontSize: 14,
    color: '#333',
  },
});