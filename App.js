import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import image from './assets/image.jpg'

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />

      <View style={styles.main}>
        <Text style={styles.label}>Name</Text>
        <Text style={styles.info}>Leonado Da Vinci</Text>
      </View>

      <View style={styles.main}>
        <Text style={styles.label}>Email</Text>
        <Text style={styles.info}>davinci@demons.com</Text>
      </View>

      <View style={styles.main}>
        <Text style={styles.label}>Gender</Text>
        <Text style={styles.info}>Male</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginTop: 100,
    marginBottom: 50,
    borderRadius: 75,
  },
  main: {
    flexDirection: "row",
    marginHorizontal: 15,
    marginVertical: 7,
  },
  label: {
    borderColor: "black",
    flex: 3,
    borderWidth: 1,
    paddingHorizontal: 5,
    fontSize: 20,
  },
  info: {
    flex: 7,
    borderWidth: 1,
    paddingHorizontal: 5,
    fontSize: 20,
  }
});
