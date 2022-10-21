import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";
export default function ResultCard({ item }) {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.resultText}>Type: {item.type}</Text>
      <Text style={styles.resultText}>Code: {item.data}</Text>
    </View>
  );
}
