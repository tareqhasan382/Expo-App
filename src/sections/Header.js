import { View, Text, Image, Switch } from "react-native";
import React from "react";
import { BellIcon } from "react-native-heroicons/outline";
import Animated, { FadeInDown } from "react-native-reanimated";

export default function Header() {
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
      {/* notification and switch icon */}
      <View className=" flex-row space-x-4 justify-center items-center ">
        <BellIcon size={30} strokeWidth={2} color="black" />
        <Switch />
      </View>
    </Animated.View>
  );
}
