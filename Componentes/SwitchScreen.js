import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

export default function SwitchScreen() {
  const [showFirstImage, setShowFirstImage] = useState(true);

  const toggleImage = () => {
    setShowFirstImage(!showFirstImage);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de Switch</Text>
      <Button
        title="Alterar Imagem"
        onPress={toggleImage}
        color="#141617"
      />
      <View style={styles.imageContainer}>
        {showFirstImage ? (
          <Image 
            source={require('../assets/clove2.webp')} 
            style={styles.image} 
          />
        ) : (
          <Image 
            source={require('../assets/clove.webp')} 
            style={styles.image} 
          />
        )}
      </View>
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#141617',
  },
  imageContainer: {
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 20,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'cover',
  },
});
