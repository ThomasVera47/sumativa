import React, { useEffect, useRef } from "react";
import { Animated, View } from "react-native";
import { useHabits } from "../hooks/useHabits";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";

interface ProgressCardProps {
  title: string;
  subtitle: string;
  percentage: number;
  badgeText?: string;
}

export const ProgressCard: React.FC<ProgressCardProps> = ({
  title,
  subtitle,
  percentage,
  badgeText,
}) => {
  const { theme } = useHabits();
  const isDark = theme === "dark";
  const widthAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(widthAnim, {
      toValue: percentage,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [percentage]);

  return (
    <ThemedView variant="card" style={{ borderRadius: 24, padding: 20, marginBottom: 20 }}>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "between", marginBottom: 12 }}>
        <View style={{ flex: 1, marginRight: 8 }}>
          <ThemedText variant="subtitle">{title}</ThemedText>
          <ThemedText variant="muted" style={{ marginTop: 2 }}>{subtitle}</ThemedText>
        </View>

        <View
          style={{
            paddingHorizontal: 12,
            paddingVertical: 6,
            borderRadius: 20,
            backgroundColor: isDark ? "#FFFFFF" : "#09090B",
          }}
        >
          <ThemedText variant="badge">{badgeText ?? `${percentage}%`}</ThemedText>
        </View>
      </View>

      <View
        style={{
          height: 10,
          width: "100%",
          borderRadius: 5,
          overflow: "hidden",
          backgroundColor: isDark ? "#27272A" : "#E4E4E7",
          marginTop: 8,
        }}
      >
        <Animated.View
          style={{
            height: "100%",
            borderRadius: 5,
            backgroundColor: isDark ? "#FFFFFF" : "#09090B",
            width: widthAnim.interpolate({
              inputRange: [0, 100],
              outputRange: ["0%", "100%"],
            }),
          }}
        />
      </View>
    </ThemedView>
  );
};