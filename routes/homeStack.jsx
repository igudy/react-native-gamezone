import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import ReviewDetails from "../screens/reviewDetails";
import HomeScreen from "../screens/home";
import Header from "../shared/header";

const Stack = createStackNavigator();

function HomeStack({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" options={{ headerTitle: <Header navigation={navigation} /> }} component={HomeScreen} />
      <Stack.Screen name="ReviewDetails"  options={({ route }) => ({ title: route.params.title })} component={ReviewDetails} />
    </Stack.Navigator>
  );
}

export default HomeStack;
