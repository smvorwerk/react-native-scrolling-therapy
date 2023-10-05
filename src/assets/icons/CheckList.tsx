import * as React from "react";
import { memo } from "react";

import Svg, {Path, SvgProps } from "react-native-svg";

const SvgComponent = (props: SvgProps) => {
  const { stroke = "#000" } = props;
  return (
    <Svg width={49} height={49} viewBox="0 0 49 49" {...props}>
      <Path
        data-name="Path 251"
        d="m14.951 24.262 6.271 7.524 12.827-14.572"
        fill="none"
        stroke={stroke}
        strokeLinecap="square"
        strokeWidth={2}
      />
    </Svg>
  );
};

const Memo = memo(SvgComponent);
export default Memo;