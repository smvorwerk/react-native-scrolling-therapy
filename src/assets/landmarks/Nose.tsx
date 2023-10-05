import * as React from "react";
import { memo } from "react";

import Svg, { G, Path, SvgProps } from "react-native-svg";

const SvgComponent = (props: SvgProps) => {
  return (
    <Svg width="73" height="5" viewBox="0 0 73 5" {...props}>
      <G data-name="Group 73" transform="translate(-158.597 -402.689)">
        <Path
          d="M5.218,6.38l-2.5-5h5Z"
          transform="translate(223.879 401.309)"
          fill="#45ec9f"
        />
        <Path
          data-name="triangle"
          d="M5.218,6.38l-2.5-5h5Z"
          transform="translate(155.879 401.309)"
          fill="#45ec9f"
        />
        <Path
          data-name="connector line"
          d="M-.283-35.038h.5L.5,31.125H0Z"
          transform="translate(193.273 404.621) rotate(90)"
          fill="#45ec9f"
        />
      </G>
    </Svg>
  );
};

const Memo = memo(SvgComponent);
export default Memo;
