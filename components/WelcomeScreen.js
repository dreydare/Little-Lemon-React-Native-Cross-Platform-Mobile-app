import { View, Text } from "react-native";

export default function WelcomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Text
        style={{
          padding: 80,
          paddingBottom: 30,
          fontSize: 30,
          color: "white",
          textAlign: "center",
        }}
      >
        Welcome to Little Lemon
      </Text>
      <Text
        style={{
          fontSize: 24,
          paddingLeft: 50,
          paddingRight: 50,
          color: "white",
          textAlign: "center",
        }}
        numberOfLines={7}
      >
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
    </View>
  );
}
