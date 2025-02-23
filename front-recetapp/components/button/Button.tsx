import { Link } from 'expo-router';
import { TouchableOpacity, Text } from 'react-native';

interface Props {
  text: string;
  onPress: () => void;
}

export const Button = ({ text, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} className="bg-cyan-950 py-2 px-16 rounded-lg flex justify-center items-center mx-auto">
      <Text className="text-white items-center">{text}</Text>
    </TouchableOpacity>
  )
}
