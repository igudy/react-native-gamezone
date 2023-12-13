import React, { useState } from "react";
import HomeStack from "./routes/homeStack"; // Corrected import statement
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { Text } from "react-native";
import { globalStyles } from "./styles/global";
import { NavigationContainer } from "@react-navigation/native";

const getFonts = () =>
  Font.loadAsync({
    "raleway-regular": require("./assets/fonts/Raleway-Medium.ttf"),
    "raleway-bold": require("./assets/fonts/Raleway-Bold.ttf"),
  });

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
};

export default App;
