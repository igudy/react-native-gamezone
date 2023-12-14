import React from "react";
import { globalStyles } from "../styles/global";
import { Button, Text, View } from "react-native";

const ReviewDetails = ({ route }) => {
  const { title, body, rating } = route.params
  
  return (
    <View style={globalStyles.container}>
      <Text>{title}</Text>
      <Text>{body}</Text>
      <Text>{rating}</Text>
    </View>
  );
};

export default ReviewDetails;
