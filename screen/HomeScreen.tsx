import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';
import { StackParamList } from '../Navigation';

type Props = NativeStackScreenProps<StackParamList, 'Home'>;

const HomeScreen = () => {
  return (
    <View>
      <Text>hello home</Text>
    </View>
  );
};

export default HomeScreen;
