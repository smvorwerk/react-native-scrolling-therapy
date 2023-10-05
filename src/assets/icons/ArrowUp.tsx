import * as React from "react";
import { memo } from "react";

import Svg, { G, Path, Rect, SvgProps } from "react-native-svg";

const SvgComponent = (props: SvgProps) => {
  const { fill } = props;

  return (
    <Svg viewBox="0 0 32 32" {...props}>
      <G data-name="Layer 2">
        <Path
          fill={fill ? fill : "#ffffff"}
          d="M24,21a1,1,0,0,1-.71-.29L16,13.41l-7.29,7.3a1,1,0,1,1-1.42-1.42l8-8a1,1,0,0,1,1.42,0l8,8a1,1,0,0,1,0,1.42A1,1,0,0,1,24,21Z"
        />
      </G>
      <G>
        <Rect fill={"none"} height="32" width="32" />
      </G>
    </Svg>
  );
};

const Memo = memo(SvgComponent);
export default Memo;
