import React, { useState } from "react";
import { View, Text, Button, FlatList, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";

const Home = ({navigation}) => {
  const [reviews, setReviews] = useState([
  {title: "Avatar", rating: 5, body:"lorem ipsum ghtaitjithuuujeli", key: "1"},
  {title: "Splinter Cell", rating: 2, body:"lorem ipsum slfaateast", key: "2"},
  {title: "Game of thrones", rating: 1, body:"lorem ipsum qwerrrrtyojliip", key: "3"},
  ])

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate("ReviewDetails", item)}>
            <Text style={globalStyles.titleText}> {item.title}</Text>
          </TouchableOpacity>
        )}
      />
      <Button title="Go to review details" />
    </View>
  );
};

export default Home;
