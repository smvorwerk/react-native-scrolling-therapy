import * as React from "react";
import { memo } from "react";

import Svg, { Circle, G, Path, SvgProps } from "react-native-svg";

const SvgComponent = (props: SvgProps) => {
  const { stroke = "#7e57f7", fill = "#7e57f7" } = props;
  return (
    <Svg width={49} height={49} viewBox="0 0 49 49" {...props}>
      <G data-name="Ellipse 20" fill="none" stroke={stroke} strokeWidth={2}>
        <Circle cx={24.5} cy={24.5} r={24.5} stroke="none" />
        <Circle cx={24.5} cy={24.5} r={23.5} />
      </G>
      <Path
        d="M25.175 30.678a.466.466 0 0 0 .481-.449l.353-16.2a.43.43 0 0 0-.449-.481h-2.119a.43.43 0 0 0-.449.481l.353 16.2a.446.446 0 0 0 .481.449Zm-.675 5.229a1.736 1.736 0 0 0 1.829-1.764 1.718 1.718 0 0 0-1.829-1.764 1.7 1.7 0 0 0-1.825 1.764 1.719 1.719 0 0 0 1.825 1.764Z"
        fill={fill}
      />
    </Svg>
  );
};

const Memo = memo(SvgComponent);
export default Memo;
