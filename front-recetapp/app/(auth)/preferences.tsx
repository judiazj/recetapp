import { View, Text, TouchableOpacity } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import PreferenceList from "@/components/PreferenceItem";
import { axiosInstance } from "@/utils/axios/axiosInstance";
import { USER_PREFERENCES } from "@/constants/uri/users";

type PreferencesScreenProps = {
  preferences: string[];
};

export default function PreferencesScreen({ preferences }: PreferencesScreenProps) {
  const [selectedPreferences, setSelectedPreferences] = useState<string[]>(preferences);

  const handlePreferences = async () => {
    const email = "user@example.com";
    try {
      await axiosInstance.patch(USER_PREFERENCES, {
        email,
        preferences: selectedPreferences,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleTogglePreference = (preferenceList: string[]) => {
    console.log(preferenceList);
    setSelectedPreferences(preferenceList);
  };

  const router = useRouter();

  return (
    <View className="flex-1 bg-cyan-500 px-6 pt-12">
      <Text className="text-center text-2xl text-white font-semibold mb-6">
        Selecciona los perfiles con los cuales más te identifiques.
      </Text>

      <PreferenceList onPreferencesChange={handleTogglePreference} />

      <TouchableOpacity
        onPress={async () => {
          await handlePreferences();
          router.push("/(tabs)");
        }}
        className="bg-cyan-900 py-3 rounded-2xl w-40 mx-auto mb-8"
      >
        <Text className="text-white text-center text-lg font-bold">Go</Text>
      </TouchableOpacity>
    </View>
  );
}
