import { View, Text, Dimensions, Image } from "react-native";
import React from "react";
const { width, height } = Dimensions.get("window");
export default function TransactionCard({ data }) {
  return (
    <>
      <View
        style={{
          width: "100%",
          maxWidth: width,
          height: height * 0.14,
        }}
        className=" rounded-3xl bg-red-300 px-4 py-8 justify-between flex-row items-center shadow-sm shadow-black "
      >
        <View className=" flex-row space-x-6 items-center justify-center ">
          <View className=" p-1 bg-black rounded-xl ">
            <Image
              source={{ uri: `${data.imaUrl}` }}
              style={{ width: 60, height: 60 }}
              resizeMode="contain"
            />
          </View>
          <View className=" space-y-1 ">
            {/* Name */}
            <Text
              style={{ fontFamily: "SpaceGroteskBold" }}
              className=" dark:text-white text-2xl text-black "
            >
              {data.name}
            </Text>
            {/* Type */}
            <Text
              style={{ fontFamily: "SpaceGroteskMedium" }}
              className=" dark:text-white text-sm text-gray-900 "
            >
              {data.type}
            </Text>
          </View>
        </View>
        <View className=" space-y-1 ">
          {/* Amount */}
          <Text style={{ fontFamily: "SpaceGroteskBold" }} className="text-xl">
            {data.amount}
          </Text>
          {/* Date */}
          <Text
            style={{ fontFamily: "SpaceGroteskBold" }}
            className=" text-sm "
          >
            {data.date}
          </Text>
        </View>
      </View>
    </>
  );
}
