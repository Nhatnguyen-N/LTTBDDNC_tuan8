import { View, Text, Animated, Button } from "react-native";
import React, { useRef } from "react";

const Bai3 = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeStart = () => {
    Animated.loop(
      Animated.timing(fadeAnim, {
        toValue: 300,
        duration: 5000,
        useNativeDriver: false,
      })
    ).start();
  };
  const fadeStop = () => {
    Animated.timing(fadeAnim, {
      toValue: 300,
      duration: 1000,
      useNativeDriver: false,
    }).stop();
  };
  const fadeReset = () => {
    Animated.loop(
      Animated.timing(fadeAnim, {
        toValue: 300,
        duration: 5000,
        useNativeDriver: false,
      })
    ).start();
  };
  return (
    <View>
      <Animated.View style={{ marginLeft: fadeAnim }}>
        <Text className="text-[50px]">❤️</Text>
      </Animated.View>
      <Button title="Start" onPress={fadeStart}></Button>
      <Button title="Stop" onPress={fadeStop}></Button>
      <Button title="Reset" onPress={fadeReset}></Button>
      <Button
        title="Bai 4"
        onPress={() => {
          navigation.navigate("bai4");
        }}
      ></Button>
    </View>
  );
};

export default Bai3;
