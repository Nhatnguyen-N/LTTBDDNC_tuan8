import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Bai1 from "./screens/Bai1";
import Bai2 from "./screens/Bai2";
import Bai3 from "./screens/Bai3";
import Bai4 from "./screens/Bai4";
import Bai5 from "./screens/Bai5";
import Bai6 from "./screens/Bai6";
import Bai7 from "./screens/Bai7";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="bai1" component={Bai1} />
        <Stack.Screen name="bai2" component={Bai2} />
        <Stack.Screen name="bai3" component={Bai3} />
        <Stack.Screen name="bai4" component={Bai4} />
        <Stack.Screen name="bai5" component={Bai5} />
        <Stack.Screen name="bai6" component={Bai6} />
        <Stack.Screen name="bai7" component={Bai7} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
