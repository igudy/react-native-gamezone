import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import ReviewDetails from "../screens/reviewDetails";
import AboutScreen from '../screens/about';

const Stack = createStackNavigator();

function AboutStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="About" options={{ title: "Gamezone" }} component={AboutScreen} />
    </Stack.Navigator>
  );
}

export default AboutStack;
