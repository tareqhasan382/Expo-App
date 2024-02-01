import { View, Text, Image } from "react-native";
import React from "react";

export default function CartItem({ data, darkMode }) {
  return (
    <View
      style={{
        backgroundColor: data.backgroundColor,
      }}
      className={`${
        darkMode ? " shadow-sm shadow-white " : " shadow-2xl shadow-black "
      }" py-6 mr-4 px-4 h-60 w-44 flex justify-between rounded-3xl  "`}
    >
      <Image
        source={{ uri: `${data.imgUrl}` }}
        className=" h-14 w-24 rounded-md mt-2 "
        resizeMode="contain"
      />
      <View className=" space-y-2 ">
        <Text
          style={{ fontFamily: "SpaceGroteskBold" }}
          className=" text-lg text-white  "
        >
          {data.cardNumber}
        </Text>
        <View className=" space-y-2 ">
          <Text
            style={{ fontFamily: "SpaceGroteskBold" }}
            className=" text-white text-2xl "
          >
            {data.price}
          </Text>
          <Text
            style={{ fontFamily: "SpaceGroteskBold" }}
            className="text-white font-medium text-lg "
          >
            {data.cardType}
          </Text>
        </View>
      </View>
    </View>
  );
}
