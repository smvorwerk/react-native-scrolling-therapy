import * as React from "react";
import { memo } from "react";

import Svg, { Circle, G, Path, SvgProps } from "react-native-svg";

const SvgComponent = (props: SvgProps) => {
  const { stroke = "#7e57f7" } = props;
  return (
    <Svg width={49} height={49} viewBox="0 0 49 49" {...props}>
      <G data-name="Ellipse 20" fill="none" stroke={stroke} strokeWidth={2}>
        <Circle cx={24.5} cy={24.5} r={24.5} stroke="none" />
        <Circle cx={24.5} cy={24.5} r={23.5} />
      </G>
      <Path
        data-name="Polygon 1"
        d="m24.5 15.5 2.25 6.694 6.75.181-5.359 4.319 1.921 6.806-5.562-4.025-5.562 4.025 1.922-6.806-5.36-4.319 6.75-.181Z"
        fill="none"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </Svg>
  );
};

const Memo = memo(SvgComponent);
export default Memo;
