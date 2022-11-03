import { View, Text, Button, Animated, Image } from "react-native";
import React, { useEffect, useRef } from "react";

const Bai6 = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 300,
      duration: 5000,
      useNativeDriver: false,
    }).start();
  }, []);
  return (
    <View className="">
      <Animated.View className="bg-green-300 items-center ">
        <Image
          className="w-[200px] h-[200px]"
          source={{
            uri: "https://images.emojiterra.com/google/noto-emoji/v2.034/512px/1f514.png",
          }}
        />
      </Animated.View>
      <Button
        title="Bai7"
        onPress={() => {
          navigation.navigate("bai7");
        }}
      ></Button>
    </View>
  );
};

export default Bai6;
