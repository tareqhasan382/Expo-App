import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "./src/sections/Header";
import Card from "./src/sections/Card";
import Transactions from "./src/sections/Transactions";
// import { useColorScheme } from "nativewind";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

export default function App() {
  // const [colorSchema, toggleColorSchema] = useColorScheme();
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
  // style={colorSchema == "dark" ? "light" : "dark"}
  return (
    <SafeAreaView className=" p-6 dark:bg-neutral-600 ">
      <StatusBar style="light" />
      <View onLayout={onLayoutRootView}>
        <View className=" my-6 ">
          <Header />
          <Card />
          <Transactions />
        </View>
      </View>
    </SafeAreaView>
  );
}
