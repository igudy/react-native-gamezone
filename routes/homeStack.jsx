import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import ReviewDetails from "../screens/reviewDetails";
import HomeScreen from "../screens/home"; // Rename to avoid conflict

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" options={{ title: "Gamezone" }} 
   component={HomeScreen} />
      <Stack.Screen name="ReviewDetails"  options={({ route }) => ({ title: route.params.title })}
  component={ReviewDetails} />
    </Stack.Navigator>
  );
}

export default HomeStack;
