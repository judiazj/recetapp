import { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import PreferenceCard from "@/components/PreferenceCard";

type Preference = {
  label: string;
};



export default function PreferenceList({onPreferencesChange}: {onPreferencesChange: (preferences: string[]) => void}) {
  const [preferences, setPreferences] = useState<Preference[]>([
    { label: "Ganar músculo" },
    { label: "Familiar" },
    { label: "Perder peso" },
    { label: "Vegano" },
    { label: "Deportista" },
    { label: "Ajetreado" },
  ]);
  const [selected, setSelected] = useState<string[]>([]);

  useEffect(() => {
    onPreferencesChange(selected);
  }, [selected]);

  const togglePreference = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };


  return (
    <ScrollView className="px-4">
      {preferences.map((pref) => (
        <PreferenceCard
          key={pref.label}
          label={pref.label}
          selected={selected.includes(pref.label)}
          onPress={() => togglePreference(pref.label)}
        />
      ))}
    </ScrollView>

  );
}
