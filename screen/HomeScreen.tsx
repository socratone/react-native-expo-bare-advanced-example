import { NativeStackScreenProps } from '@react-navigation/native-stack';
import axios from 'axios';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../components/common/Button/Button';
import { StackParamList } from '../Navigation';

type Props = NativeStackScreenProps<StackParamList, 'Home'>;

const HomeScreen = ({ navigation }: Props) => {
  const handleFetch = () => {
    axios.get('https://koreanjson.com/posts/1').then((res) => {
      console.log(res.data);
    });
  };

  return (
    <View style={styles.container}>
      <Button
        onPress={() => navigation.navigate('SVG')}
        style={{ marginBottom: 10 }}
      >
        SVG
      </Button>
      <Button onPress={handleFetch}>Fetch</Button>
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
