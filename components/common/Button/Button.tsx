import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

type ButtonProps = {
  children: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};

const Button = ({ children, onPress, style }: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, style]}
      activeOpacity={0.5}
    >
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    height: 40,
    backgroundColor: 'dodgerblue',
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    borderRadius: 20,
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});

export default Button;
