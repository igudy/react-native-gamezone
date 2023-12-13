import React, { useState } from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Text } from "react-native";
import { globalStyles } from "./styles/global";
import { NavigationContainer } from "@react-navigation/native";
import HomeStack from "./routes/homeStack";

// Google cdn fonts
import { Raleway_200ExtraLight } from "@expo-google-fonts/raleway";
import { Quicksand_300Light } from "@expo-google-fonts/quicksand";
import { useFonts } from "expo-font";


const App = () => {
  // Local fonts
  const [fontsLoaded] = useFonts({
    "raleway-regular": require("./assets/fonts/Raleway-Medium.ttf"),
    "raleway-bold": require("./assets/fonts/Raleway-Bold.ttf"),
  });

  //   const [fontsLoaded] = useFonts({
  //   Raleway_200ExtraLight,
  //   Quicksand_300Light,
  // });

if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
};

export default App;

