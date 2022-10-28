import { View, Text, Animated, Button } from "react-native";
import React, { useRef } from "react";

const Bai2 = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const fadeIn = () => {
    Animated.loop(
      Animated.timing(fadeAnim, {
        toValue: 350,
        duration: 5000,
        useNativeDriver: false,
      })
    ).start();
  };
  return (
    <View>
      <Animated.View style={{ marginLeft: fadeAnim }}>
        <Text className="text-[50px]">🛬</Text>
      </Animated.View>
      <Button title="Bay di" onPress={fadeIn}></Button>
      <Button
        title="Bai 3"
        onPress={() => {
          navigation.navigate("bai3");
        }}
      ></Button>
    </View>
  );
};

export default Bai2;
