import { Tabs } from "expo-router";
import React from "react";
import { ImageBackground, Text, View } from "react-native";

// Component for the tab background that moves
function TabBackground({ focused }: { focused: boolean }) {
  return (
    <ImageBackground
      source={require("../../assets/images/notch.png")}
      style={{
        width: 120,
        height: 38,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 24,
        overflow: "hidden",
        marginTop: 20,
        opacity: focused ? 1 : 0,
        transform: [{ scale: focused ? 1 : 0.8 }],
      }}
      imageStyle={{
        tintColor: "#e223ac93",
        borderRadius: 24,
      }}
    />
  );
}

// Component for the tab label (always visible)
function TabLabel({ label, focused }: { label: string; focused: boolean }) {
  return (
    <View
      style={{
        position: "absolute",
        width: 120,
        height: 38,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
      }}
    >
      <Text 
        style={{ 
          color: focused ? "white" : "#666", 
          fontWeight: focused ? "bold" : "normal", 
          fontSize: 14 
        }}
      >
        {label}
      </Text>
    </View>
  );
}

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }: { focused: boolean }) => (
            <View style={{ position: "relative" }}>
              <TabBackground focused={focused} />
              <TabLabel label="Home" focused={focused} />
            </View>
          ),
          tabBarLabel: () => null, // Hide default label
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }: { focused: boolean }) => (
            <View style={{ position: "relative" }}>
              <TabBackground focused={focused} />
              <TabLabel label="Profile" focused={focused} />
            </View>
          ),
          tabBarLabel: () => null, // Hide default label
        }}
      />
    </Tabs>
  );
}
