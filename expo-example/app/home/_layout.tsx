import { Stack } from "expo-router";
import { View, StyleSheet } from "react-native";
import { useTheme } from "../../contexts/ThemeContext";

export default function DefaultLayout() {
  const { colors } = useTheme();

  return (
    <View
      style={[styles.container, { backgroundColor: colors.backgroundColor }]}
    >
      <Stack />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
