import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../components/common/Button/Button';
import { StackParamList } from '../Navigation';

type Props = NativeStackScreenProps<StackParamList, 'Home'>;

const HomeScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Button onPress={() => navigation.navigate('SVG')}>SVG</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 10,
  },
});

export default HomeScreen;
