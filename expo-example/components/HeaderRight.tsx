import { useRouter } from "expo-router";
import { Alert, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useTheme } from "../contexts/ThemeContext";
import useAuth from "../firebase/hooks/useAuth";

export default function HeaderRight() {
  const router = useRouter();
  const { user, logout } = useAuth();
  const { toggleTheme, theme, colors } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={[styles.userEmail, { color: colors.textColor }]}>
        {user?.email}
      </Text>

      <TouchableOpacity
        style={[
          styles.themeButton,
          { backgroundColor: colors.primaryButtonColor },
        ]}
        onPress={toggleTheme}
      >
        <Text style={[styles.buttonText, { color: colors.textColor }]}>
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.logoutButton,
          { backgroundColor: colors.logoutButtonColor },
        ]}
        onPress={async () => {
          try {
            await logout();
            router.replace("/");
          } catch (error: any) {
            Alert.alert("Erro ao sair", error.toString());
          }
        }}
      >
        <Text style={[styles.buttonText, { color: colors.textColor }]}>
          Sair
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 16,
  },
  userEmail: {
    fontSize: 14,
    fontWeight: "500",
  },
  themeButton: {
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginLeft: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  logoutButton: {
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginLeft: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "bold",
  },
});
