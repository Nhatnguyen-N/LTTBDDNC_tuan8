import { View, Text, Animated, Button } from "react-native";
import React, { useEffect, useRef } from "react";

const Bai1 = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);
  return (
    <View>
      <Animated.View
        style={{ opacity: fadeAnim, justifyContent: "center" }}
        className="p-5 items-center justify-center"
      >
        <Text className="text-[30px]">Welcome to Animation React Native</Text>
      </Animated.View>
      <Button
        title="Bai2"
        onPress={() => {
          navigation.navigate("bai2");
        }}
      ></Button>
    </View>
  );
};

export default Bai1;
