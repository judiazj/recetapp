import MaterialIcons from '@expo/vector-icons/MaterialIcons';

interface Props {
  size: number;
}

export const FoodLogo = ({ size }: Props) => (
  <MaterialIcons name="food-bank" size={size} color="white" className="mx-auto mt-24" />
);