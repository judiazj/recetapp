import { Link } from 'expo-router';
import { TouchableOpacity, Text } from 'react-native';

interface Props {
  text: string;
  onPress: () => void;
  mb?: string;
}

export const Button = ({ text, onPress, mb }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`bg-cyan-900 py-4 px-24 rounded-2xl flex justify-center items-center mx-auto ${mb}`}>
      <Text className="text-white items-center text-2xl">{text}</Text>
    </TouchableOpacity>
  )
}
