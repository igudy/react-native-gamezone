import React from 'react'

const TextInput = () => {
      const [name, setName] = useState("Goodness");
  const [age, setAge] = useState(40);
  // const [person, setPerson] = useState({ name: "Chief Igudy", age: 45 });

  // const clickHandler = () => {
  //   setName("Igunma");
  //   setPerson({ name: "Ice Gudy", age: 34 });
    // };
    
  return (
      <div>
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
</div>
  )
}

export default TextInput