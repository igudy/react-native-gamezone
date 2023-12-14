import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AboutScreen from '../screens/about';
import Header from "../shared/header";

const Stack = createStackNavigator();

function AboutStack({navigation}) {
  return (
    <Stack.Navigator>
          <Stack.Screen name="About" options={{
          header: () => (
            <Header navigation={navigation} title={"About Gamezone"} />
          ),
        }} component={AboutScreen} />
    </Stack.Navigator>
  );
}

export default AboutStack;
