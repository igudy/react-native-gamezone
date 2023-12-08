import React from 'react'

const StateManagement = () => {
      const [name, setName] = useState("Goodness");
  const [person, setPerson] = useState({ name: "Chief Igudy", age: 45 });

  const clickHandler = () => {
    setName("Igunma");
    setPerson({ name: "Ice Gudy", age: 34 });
    };
    
  return (
    <div>      {/* <Text>Hello world</Text>
      <StatusBar style="auto" /> */}
      <Text>My name is {name}</Text>
      <Text>
        His name is {person.name} and his age is {person.age}
      </Text>
      <View style={styles.buttonContainer}>
        <Button title="update state" onPress={clickHandler} />
      </View></div>
  )
}

export default StateManagement