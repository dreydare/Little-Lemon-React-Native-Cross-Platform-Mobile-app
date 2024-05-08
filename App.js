import * as React from "react";
import { View } from "react-native";

import LittleLemonHeader from "./components/LittleLemonHeader";
import WelcomeScreen from "./components/WelcomeScreen";
import LittleLemonFooter from "./components/LittleLemonFooter";
export default function App() {
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: "#495E57",
        }}
      >
        <LittleLemonHeader />
        <WelcomeScreen />
      </View>
      <View style={{ backgroundColor: "#495E57" }}>
        <LittleLemonFooter />
      </View>
    </>
  );
}
