import { useEffect, useState } from "react";
import { View, ActivityIndicator, ScrollView } from "react-native";
import PreferenceCard from "@/components/PreferenceCard";

type Preference = {
  id: string;
  label: string;
};

export default function PreferenceList() {
  const [preferences, setPreferences] = useState<Preference[]>([]);
  const [selected, setSelected] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate API call backend
    setTimeout(() => {
      setPreferences([
        { id: "1", label: "Ganar músculo" },
        { id: "2", label: "Familiar" },
        { id: "3", label: "Perder peso" },
        { id: "4", label: "Vegano" },
        { id: "5", label: "Deportista" },
        { id: "6", label: "Ajetreado" },
      ]);
      setLoading(false);
    }, 500);
  }, []);

  const togglePreference = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  if (loading) return <ActivityIndicator size="large" color="white" className="mt-4" />;

  return (
    <ScrollView className="px-4">
      {preferences.map((pref) => (
        <PreferenceCard
          key={pref.id}
          label={pref.label}
          selected={selected.includes(pref.id)}
          onPress={() => togglePreference(pref.id)}
        />
      ))}
    </ScrollView>
  );
}
