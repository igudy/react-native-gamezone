import React from 'react'

const FlatList = () => {
  return (
    <div>      <View>
        <FlatList
          numColumns={1}
          keyExtractor={(item) => item.id}
          data={people}
          renderItem={({ item }) => (
            <Text style={styles.item}>{item.name}</Text>
          )}
        />
      </View></div>
  )
}

export default FlatList