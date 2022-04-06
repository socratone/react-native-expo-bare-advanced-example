import Svg, {
  Circle,
  Ellipse,
  G,
  Text,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Image,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
} from 'react-native-svg';

type BubbleTriangleIconProps = {
  fill: string;
  stroke: string;
};

const BubbleTriangleIcon = ({ fill, stroke }: BubbleTriangleIconProps) => {
  return (
    <Svg width="21" height="21" viewBox="0 0 21 21" fill="none">
      <Path d="M1 9L20 1L13 20L1 9Z" fill={fill} />
      <Path d="M1 9L20 1L13 20" stroke={stroke} />
    </Svg>
  );
};

export default BubbleTriangleIcon;
