import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Transaksi from "./src/screen/Transaksi";
import DetailTransaksi from "./src/screen/DetailTransaksi";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Transaksi"
          component={Transaksi}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="DetailTransaksi"
          component={DetailTransaksi}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
