import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screen/HomeScreen';
import SVGScreen from './screen/SVGScreen';

export type StackParamList = {
  Home: undefined;
  SVG: undefined;
};

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SVG" component={SVGScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
