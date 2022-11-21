import React from "react";
import { View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export function StarsRating({ stars }: { stars: number }) {
  const absoluteStars = Math.floor(stars / 2);

  return (
    <View style={{ flexDirection: "row", padding: 10 }}>
      {Array.from({ length: 5 }, (_, index) => (
        <FontAwesome
          key={index}
          name="star"
          size={24}
          style={{ paddingHorizontal: 5 }}
          color={index >= absoluteStars ? "gray" : "#FFC837"}
        />
      ))}
    </View>
  );
}
