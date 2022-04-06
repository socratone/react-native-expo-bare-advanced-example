import { StyleSheet, Text, View } from 'react-native';
import BubbleTriangleIcon from '../icons/BubbleTriangleIcon';
import ExampleIcon from '../icons/ExampleIcon';

const SVGScreen = () => {
  return (
    <View style={styles.container}>
      <BubbleTriangleIcon fill="skyblue" stroke="dodgerblue" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SVGScreen;
