import { View, Image, Switch, Text } from "react-native";
import React from "react";
import { BellIcon } from "react-native-heroicons/outline";
import Animated, { FadeInDown } from "react-native-reanimated";

export default function Header({ darkMode, setDarkMode }) {
  return (
    <Animated.View
      className=" flex flex-row justify-between items-center "
      entering={FadeInDown.duration(500).springify().delay(100)}
    >
      <View className=" border-2 border-white rounded-full overflow-hidden  ">
        <Image
          className=" h-10 w-10 object-cover "
          source={require("../../assets/images/tareqAvatar.jpg")}
        />
      </View>
      <Text
        style={{ fontFamily: "SpaceGroteskBold" }}
        className={`${
          darkMode ? " text-white " : " text-black "
        }" uppercase text-2xl font-bold "`}
      >
        IBank
      </Text>
      {/* notification and switch icon */}
      <View className=" flex-row space-x-4 justify-center items-center ">
        <BellIcon
          size={30}
          strokeWidth={2}
          color={darkMode ? "white" : "black"}
        />
        <Switch
          value={darkMode}
          onValueChange={(value) => {
            setDarkMode(value);
          }}
        />
      </View>
    </Animated.View>
  );
}
// "black"
