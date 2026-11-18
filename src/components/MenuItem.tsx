import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, View } from "react-native";
import { useHabits } from "../hooks/useHabits";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";

interface MenuItemProps {
  icon: string;
  title: string;
  subtitle?: string;
  onPress: () => void;
  rightElement?: React.ReactNode;
}

export const MenuItem: React.FC<MenuItemProps> = ({
  icon,
  title,
  subtitle,
  onPress,
  rightElement,
}) => {
  const { theme } = useHabits();
  const isDark = theme === "dark";

  return (
    <Pressable onPress={onPress} className="mb-3">
      <ThemedView
        variant="card"
        className="rounded-2xl p-4 flex-row items-center justify-between"
      >
        <View className="flex-row items-center flex-1">
          <View
            className={`w-10 h-10 rounded-xl items-center justify-center mr-3.5 ${
              isDark ? "bg-zinc-800" : "bg-zinc-100"
            }`}
          >
            <Ionicons
              name={icon as any}
              size={20}
              color={isDark ? "#FFFFFF" : "#09090B"}
            />
          </View>
          <View className="flex-1">
            <ThemedText variant="subtitle" className="text-base">
              {title}
            </ThemedText>
            {subtitle && <ThemedText variant="muted">{subtitle}</ThemedText>}
          </View>
        </View>

        {rightElement ?? (
          <Ionicons
            name="chevron-forward"
            size={20}
            color={isDark ? "#71717A" : "#A1A1AA"}
          />
        )}
      </ThemedView>
    </Pressable>
  );
};