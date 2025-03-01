import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import PreferenceList from "@/components/PreferenceItem";

export default function PreferencesScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-cyan-500 px-6 pt-12">
      <Text className="text-center text-2xl text-white font-semibold mb-6">
        Selecciona los perfiles con los cuales más te identifiques.
      </Text>

      <PreferenceList />

      <TouchableOpacity
        onPress={() => router.push("/(tabs)")}
        className="bg-cyan-900 py-3 rounded-2xl w-40 mx-auto mb-8"
      >
        <Text className="text-white text-center text-lg font-bold">Go</Text>
      </TouchableOpacity>
    </View>
  );
}
