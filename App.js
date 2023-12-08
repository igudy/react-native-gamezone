import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const [name, setName] = useState("Goodness");
  const [person, setPerson] = useState({ name: "Chief Igudy", age: 45 });

  const clickHandler = () => {
    setName("Igunma");
    setPerson({ name: "Ice Gudy", age: 34 });
  };

  return (
    <View style={styles.container}>
      {/* <Text>Hello world</Text>
      <StatusBar style="auto" /> */}
      <Text>My name is {name}</Text>
      <Text>
        His name is {person.name} and his age is {person.age}
      </Text>
      <View style={styles.buttonContainer}>
        <Button title="update state" onPress={clickHandler} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff56df",
    alignItems: "center",
    justifyContent: "center",
  },
});
