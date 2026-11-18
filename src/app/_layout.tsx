import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "../../global.css";
import { HabitsProvider, useHabits } from "../hooks/useHabits";

function RootNavigator() {
  const { theme } = useHabits();
  const isDark = theme === "dark";

  return (
    <>
      <StatusBar style={isDark ? "light" : "dark"} />
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: isDark ? "#09090B" : "#FFFFFF",
          },
          headerTintColor: isDark ? "#FFFFFF" : "#09090B",
          headerTitleStyle: { fontWeight: "700" },
          contentStyle: {
            backgroundColor: isDark ? "#09090B" : "#FAFAFA",
          },
        }}
      >
        <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
        <Stack.Screen
          name="habit/[id]"
          options={{
            title: "Detalle del Hábito · 21 Días",
            presentation: "card",
          }}
        />
      </Stack>
    </>
  );
}

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <HabitsProvider>
        <RootNavigator />
      </HabitsProvider>
    </GestureHandlerRootView>
  );
}