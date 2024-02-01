import { View, Text, FlatList } from "react-native";
import React from "react";
import { transaction } from "../utils/index";
import TransactionCard from "../components/TransactionCard";
import Animated, { FadeInDown } from "react-native-reanimated";

export default function Transactions() {
  return (
    <Animated.View
      className=" mt-8"
      entering={FadeInDown.duration(500).springify().delay(300)}
    >
      {/* title */}
      <Text
        style={{ fontFamily: "SpaceGroteskBold" }}
        className=" text-3xl dark:text-white mb-4 "
      >
        Last Transactions
      </Text>
      {/* cards */}
      <FlatList
        data={transaction}
        initialNumToRender={20}
        contentContainerStyle={{ paddingBottom: 100 }}
        removeClippedSubviews={false}
        height={400}
        renderItem={({ item }) => <TransactionCard data={item} />}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View className="h-4" />}
        keyExtractor={(item) => item.id}
      />
    </Animated.View>
  );
}
