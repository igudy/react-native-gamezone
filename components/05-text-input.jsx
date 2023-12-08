import React from 'react'

const TextInput = () => {
  return (
    <div>      <Text>Enter name:</Text>
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