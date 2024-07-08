// components/Block.tsx
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Block = ({ title, children }) => {
  return (
    <View style={styles.block}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.content}>
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    margin: 10,
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3498db', // Màu sắc thương hiệu
    marginBottom: 10,
  },
  content: {
    padding: 10,
  },
});

export default Block;
