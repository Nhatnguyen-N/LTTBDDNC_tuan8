import { View, Text, Animated, Image, Button } from "react-native";
import React, { useEffect, useRef } from "react";

const Bai4 = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim2 = useRef(new Animated.Value(1)).current;
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: false,
    }).start();
    Animated.timing(fadeAnim2, {
      toValue: 100,
      duration: 5000,
      useNativeDriver: false,
    }).start();
  }, []);
  return (
    <View>
      <Animated.View style={{ opacity: fadeAnim }} className="items-center">
        <Image
          className="w-[350px] h-[300px] absolute"
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbe4w3KeER3ZtHXrRupzig_4RsCux6iffXew&usqp=CAU",
          }}
        />
      </Animated.View>
      <Animated.View style={{ marginLeft: fadeAnim2 }}>
        <Text className="text-[30px] mt-[100px] mb-[200px] text-cyan-300 font-bold">
          Day la cai cay
        </Text>
      </Animated.View>
      <Button
        title="Bai 5"
        onPress={() => {
          navigation.navigate("bai5");
        }}
      ></Button>
    </View>
  );
};

export default Bai4;
