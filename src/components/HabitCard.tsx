import { Ionicons } from "@expo/vector-icons";
import React, { useRef } from "react";
import { Animated, Pressable, View } from "react-native";
import { Habit } from "../../types/habit";
import { useHabits } from "../hooks/useHabits";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";

interface HabitCardProps {
  habit: Habit;
  completed: boolean;
  onToggle: () => void;
  onPressDetail?: () => void;
}

export const HabitCard: React.FC<HabitCardProps> = ({
  habit,
  completed,
  onToggle,
  onPressDetail,
}) => {
  const { theme } = useHabits();
  const isDark = theme === "dark";
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handleTogglePress = () => {
    Animated.sequence([
      Animated.timing(scaleAnim, { toValue: 0.95, duration: 80, useNativeDriver: true }),
      Animated.spring(scaleAnim, { toValue: 1, friction: 4, useNativeDriver: true }),
    ]).start();
    onToggle();
  };

  return (
    <Animated.View style={{ transform: [{ scale: scaleAnim }], marginBottom: 12 }}>
      <ThemedView
        variant="card"
        style={{
          borderRadius: 20,
          padding: 16,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderColor: completed ? (isDark ? "#FFFFFF" : "#09090B") : isDark ? "#27272A" : "#E4E4E7",
          borderWidth: completed ? 1.5 : 1,
        }}
      >
        <Pressable onPress={onPressDetail} style={{ flexDirection: "row", alignItems: "center", flex: 1, marginRight: 12 }}>
          <View
            style={{
              width: 48,
              height: 48,
              borderRadius: 14,
              alignItems: "center",
              justifyContent: "center",
              marginRight: 14,
              backgroundColor: completed ? (isDark ? "#FFFFFF" : "#09090B") : isDark ? "#1E1E24" : "#F4F4F5",
            }}
          >
            <Ionicons
              name={habit.icon as any}
              size={22}
              color={completed ? (isDark ? "#09090B" : "#FFFFFF") : isDark ? "#FAFAFA" : "#18181B"}
            />
          </View>

          <View style={{ flex: 1 }}>
            <ThemedText
              variant="subtitle"
              style={{
                textDecorationLine: completed ? "line-through" : "none",
                opacity: completed ? 0.7 : 1,
                marginBottom: 2,
              }}
            >
              {habit.title}
            </ThemedText>
            <ThemedText variant="muted">
              {habit.category} · {habit.completedDays.length}/21 días
            </ThemedText>
          </View>
        </Pressable>

        <Pressable
          onPress={handleTogglePress}
          hitSlop={12}
          style={{
            width: 36,
            height: 36,
            borderRadius: 18,
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 2,
            backgroundColor: completed ? (isDark ? "#FFFFFF" : "#09090B") : "transparent",
            borderColor: completed ? (isDark ? "#FFFFFF" : "#09090B") : isDark ? "#52525B" : "#A1A1AA",
          }}
        >
          {completed && (
            <Ionicons name="checkmark" size={18} color={isDark ? "#09090B" : "#FFFFFF"} />
          )}
        </Pressable>
      </ThemedView>
    </Animated.View>
  );
};