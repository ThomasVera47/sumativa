import { Ionicons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";
import { useHabits } from "../../hooks/useHabits";

export default function DrawerLayout() {
  const { theme } = useHabits();
  const isDark = theme === "dark";

  return (
    <Drawer
      screenOptions={{
        headerStyle: {
          backgroundColor: isDark ? "#09090B" : "#FFFFFF",
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 1,
          borderBottomColor: isDark ? "#27272A" : "#E4E4E7",
        },
        headerTintColor: isDark ? "#FFFFFF" : "#09090B",
        drawerStyle: {
          backgroundColor: isDark ? "#09090B" : "#FFFFFF",
          width: 270,
        },
        drawerActiveTintColor: isDark ? "#09090B" : "#FFFFFF",
        drawerActiveBackgroundColor: isDark ? "#FFFFFF" : "#09090B",
        drawerInactiveTintColor: isDark ? "#A1A1AA" : "#52525B",
        drawerLabelStyle: { fontWeight: "700", fontSize: 15 },
      }}
    >
      <Drawer.Screen
        name="(tabs)"
        options={{
          drawerLabel: "Reto 21 Días",
          title: "Reto 21 Días · UETS",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="flame" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="profile"
        options={{
          drawerLabel: "Perfil y Ajustes",
          title: "Perfil y Ajustes",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person-circle" size={size} color={color} />
          ),
        }}
      />
    </Drawer>
  );
}