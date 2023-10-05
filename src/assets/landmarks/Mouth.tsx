import * as React from "react";
import { memo } from "react";

import Svg, { G, Path, SvgProps } from "react-native-svg";

const SvgComponent = (props: SvgProps) => {
  return (
    <Svg width="150.74" height="65.497" viewBox="0 0 150.74 65.497" {...props}>
      <G data-name="Group 74" transform="translate(-121.337 -528.192)">
        <Path
          d="M5.218,6.38l-2.5-5h5Z"
          transform="translate(191.879 532.309)"
          fill="#45ec9f"
        />
        <Path
          data-name="triangle"
          d="M5.218,6.38l-2.5-5h5Z"
          transform="translate(191.879 587.309)"
          fill="#45ec9f"
        />
        <Path
          data-name="connector line"
          d="M-.474,6.016h.5L.091,57.552h-.5Z"
          transform="translate(197.25 531.272)"
          fill="#45ec9f"
        />
        <Path
          data-name="connector line"
          d="M5.11,41.936h.5L.5,116.2H0Z"
          transform="translate(237.534 528.689) rotate(90)"
          fill="#45ec9f"
        />
        <Path
          data-name="connector line"
          d="M-.5,37.457H0l5.607,72.95h-.5Z"
          transform="translate(309.534 528.689) rotate(90)"
          fill="#45ec9f"
        />
      </G>
    </Svg>
  );
};

const Memo = memo(SvgComponent);
export default Memo;
