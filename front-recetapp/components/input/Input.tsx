import { KeyboardTypeOptions, TextInput } from 'react-native';


type AutoCompleteOptions = "off" | "username" | "password" | "email" | "name" | "tel" | "street-address" | "postal-code" | "cc-number" | "cc-csc" | "cc-exp" | "cc-exp-month" | "cc-exp-year" | "off";
type AutoCapitalizeOptions = "none" | "sentences" | "words" | "characters" | undefined;

interface Props {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType?: KeyboardTypeOptions | undefined;
  secureTextEntry?: boolean;
  autoComplete?: AutoCompleteOptions;
  autoCapitalize?: AutoCapitalizeOptions;
}

export const InputText = (
  { placeholder,
    value,
    onChangeText,
    keyboardType,
    autoCapitalize,
    autoComplete
  }: Props) => {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
      autoCapitalize={autoCapitalize}
      autoComplete={autoComplete}
      className="block p-2 w-auto bg-gray-50 border border-gray-300 font-bold text-gray-900 text-3xl rounded-md focus:ring-blue-500 focus:border-blue-500"
    />
  )
}

export const InputPassword = (
  { placeholder,
    value,
    onChangeText,
    secureTextEntry,
    autoComplete
  }: Props) => {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      autoComplete={autoComplete}
      className="block p-2 w-auto bg-gray-50 border border-gray-300 font-bold text-gray-900 text-3xl rounded-md focus:ring-blue-500 focus:border-blue-500"
    />
  )
}

