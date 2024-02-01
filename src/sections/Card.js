import { View, Text, ScrollView } from "react-native";
import React from "react";
import { Data } from "../utils/index";
import CartItem from "../components/CartItem";
import Animated, { FadeInDown } from "react-native-reanimated";

export default function Card() {
  return (
    <Animated.View
      className=" mt-8 mb-4"
      entering={FadeInDown.duration(500).springify().delay(200)}
    >
      <Text
        style={{ fontFamily: "SpaceGroteskBold" }}
        className=" text-3xl mb-4 dark:text-white "
      >
        Card
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className=" space-x-5 "
      >
        {Data.map((item) => (
          <CartItem key={item.id} data={item} />
        ))}
      </ScrollView>
    </Animated.View>
  );
}
