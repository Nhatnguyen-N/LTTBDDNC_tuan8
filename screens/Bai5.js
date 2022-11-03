import { View, Text, Button } from "react-native";
import React from "react";

const Bai5 = ({ navigation }) => {
  return (
    <View>
      <Text>Bai5</Text>
      <Button
        title="Bai6"
        onPress={() => {
          navigation.navigate("bai6");
        }}
      ></Button>
    </View>
  );
};

export default Bai5;
