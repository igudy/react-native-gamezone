import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View } from "react-native";
import StateManagement from "./components/state-management";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("Goodness");
  const [age, setAge] = useState(40);
  // const [person, setPerson] = useState({ name: "Chief Igudy", age: 45 });

  // const clickHandler = () => {
  //   setName("Igunma");
  //   setPerson({ name: "Ice Gudy", age: 34 });
  // };

  return (
    <View style={styles.container}>
      <Text>Enter name:</Text>
      <TextInput
        multiline
        style={styles.input}
        placeholder="e.g John Doe"
        onChangeText={(val) => setName(val)}
      />

      <Text>Enter Age: </Text>
      <TextInput
        multiline
        style={styles.input}
        keyboardType="numeric"
        placeholder="e.g John Doe"
        onChangeText={(val) => setAge(val)}
      />

      <Text>
        {name}, age:{age}
      </Text>
    </View>
  );
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
});
