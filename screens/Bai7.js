import { View, Text, Animated, Button, Image } from "react-native";
import React, { useRef } from "react";

const Bai7 = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const spinn = () => {
    Animated.loop(
      Animated.timing(fadeAnim, {
        toValue: 100,
        duration: 5000,
        useNativeDriver: false,
      })
    ).start();
  };
  const spin = fadeAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View className=" w-[100%] h-[100%] justify-center items-center">
      <Animated.Image
        className="w-[100px] h-[100px] mb-10"
        source={{
          uri: "https://tieucanhmini.com.vn/wp-content/uploads/2018/04/ng%C5%A9-h%C3%A0nh-phong-th%E1%BB%A7y-1024x997.jpg",
        }}
        style={{
          transform: [{ rotate: spin }],
        }}
      ></Animated.Image>
      <Button title="Xoay" onPress={spinn}></Button>
    </View>
  );
};

export default Bai7;
