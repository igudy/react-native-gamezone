import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import StateManagement from "./components/state-management";
import { useState } from "react";

export default function People() {

  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 30,
    marginHorizontal: 20,
    marginTop: 24,
  },
});