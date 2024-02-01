import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "./src/sections/Header";
import Card from "./src/sections/Card";
import Transactions from "./src/sections/Transactions";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { useState } from "react";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [fontLoaded, fontError] = useFonts({
    SpaceGroteskSemiBold: require("./src/fonts/SpaceGrotesk-SemiBold.ttf"),
    SpaceGroteskLight: require("./src/fonts/SpaceGrotesk-Light.ttf"),
    SpaceGroteskMedium: require("./src/fonts/SpaceGrotesk-Medium.ttf"),
    SpaceGroteskRegular: require("./src/fonts/SpaceGrotesk-Regular.ttf"),
    SpaceGroteskBold: require("./src/fonts/SpaceGrotesk-Bold.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontLoaded, fontError]);
  if (fontError || fontError) {
    return null;
  }

  return (
    <SafeAreaView className={`${darkMode && " bg-black "} " p-6 "`}>
      <StatusBar style="black" />
      <View onLayout={onLayoutRootView}>
        <View className=" my-6 ">
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <Card darkMode={darkMode} />
          <Transactions darkMode={darkMode} />
        </View>
      </View>
    </SafeAreaView>
  );
}
