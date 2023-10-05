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
        data-name="Path 251"
        d="m14.951 24.262 6.271 7.524 12.827-14.572"
        fill="none"
        stroke={stroke}
        strokeLinecap="round"
        strokeWidth={2}
      />
    </Svg>
  );
};

const Memo = memo(SvgComponent);
export default Memo;
