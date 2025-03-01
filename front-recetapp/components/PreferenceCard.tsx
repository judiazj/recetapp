import { TouchableOpacity, Text, View } from "react-native";

type PreferenceCardProps = {
  label: string;
  selected: boolean;
  onPress: () => void;
};

export default function PreferenceCard({ label, selected, onPress }: PreferenceCardProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`flex-row items-center p-4 my-2 rounded-2xl border-2 bg-white ${
        selected ? "border-cyan-900" : "border-gray-300"
      }`}
    >
      <Text className="text-lg text-cyan-900 flex-1">{label}</Text>
      <View
        className={`w-5 h-5 rounded-md border-2 ${
          selected ? "border-cyan-900 bg-cyan-900" : "border-gray-400 bg-white"
        } flex items-center justify-center`}
      >
        {selected && <Text className="text-white text-xs">✔</Text>}
      </View>
    </TouchableOpacity>
  );
}
