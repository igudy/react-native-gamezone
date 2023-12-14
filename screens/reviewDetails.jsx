import React from "react";
import { globalStyles } from "../styles/global";
import { Button, Text, View } from "react-native";
import Card from "../shared/card";

const ReviewDetails = ({ route }) => {
  const { title, body, rating } = route.params
  
  return (
    <View style={globalStyles.container}>
      <Card>
      <Text>{title}</Text>
      <Text>{body}</Text>
      <Text>{rating}</Text>
      </Card>
    </View>
  );
};

export default ReviewDetails;
