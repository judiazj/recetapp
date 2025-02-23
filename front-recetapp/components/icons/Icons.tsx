import MaterialIcons from '@expo/vector-icons/MaterialIcons';

interface Props {
  size: number;
  mt?: string;
}

export const FoodLogo = ({ size, mt }: Props) => (
  <MaterialIcons name="food-bank" size={size} color="white" className={`mx-auto ${mt}`} />
);