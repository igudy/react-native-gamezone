import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import AboutStack from "./aboutStack";
import HomeStack from "./homeStack";

const Drawer = createDrawerNavigator();

function RootDrawerNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          component={HomeStack}
        />
        <Drawer.Screen
          component={AboutStack}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default RootDrawerNavigator;
