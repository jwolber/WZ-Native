import {useNavigation} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

type RootStackParams = {
  Home: undefined;
  Help: undefined;
};

export const RootStack = createNativeStackNavigator<RootStackParams>();

export const useRootStackNavigation = () =>
  useNavigation<NativeStackNavigationProp<RootStackParams>>();
