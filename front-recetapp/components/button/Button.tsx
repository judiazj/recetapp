import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';

interface Props {
  text: string;
  onPress: () => void;
  loading?: boolean;
  mb?: string;
}

export const Button = ({ text, onPress, mb, loading }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`bg-cyan-900 py-4 px-24 rounded-2xl flex justify-center items-center mx-auto ${mb}`}>
      {
        loading ? <ActivityIndicator color="white" /> :
          <Text className="text-white items-center text-2xl">{text}</Text>
      }
    </TouchableOpacity>
  )
}
