import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

type RootStackParams = {
  Home: undefined;
  Help: undefined;
  Match: {
    id: string;
    gamerTag: string;
  };
};

export const RootStack = createNativeStackNavigator<RootStackParams>();

export const useRootStackNavigation = () =>
  useNavigation<NativeStackNavigationProp<RootStackParams>>();

export const useMatchRoute = () =>
  useRoute<RouteProp<RootStackParams, 'Match'>>();
