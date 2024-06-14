import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView, StyleSheet } from 'react-native';

const Assistant = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Chatbot />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


export default Assistant;
