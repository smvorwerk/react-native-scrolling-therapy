import * as React from "react";
import { memo } from "react";

import Svg, { G, Path, SvgProps } from "react-native-svg";

const SvgComponent = (props: SvgProps) => {
  return (
    <Svg width="14.146" height="47.559" viewBox="0 0 14.146 47.559" {...props}>
      <G data-name="Group 72" transform="translate(-180.427 -295.689)">
        <Path
          d="M5.218,6.38l-2.5-5h5Z"
          transform="translate(182.879 294.309)"
          fill="#45ec9f"
        />
        <G
          data-name="icon_tringle with border"
          transform="translate(180.427 331.125)">
          <Path
            data-name="Path 223"
            d="M4.62,5.185l-1.9-3.8h3.8Z"
            transform="translate(2.452 1.246)"
            fill="#45ec9f"
          />
          <Path
            data-name="Path 224"
            d="M.829.476H13.316L7.073,11.18ZM0,0,7.073,12.123,14.146,0Z"
            fill="#45ec9f"
          />
        </G>
        <Path
          data-name="connector line"
          d="M.636-.214h.5L.5,31.125H0Z"
          transform="translate(187.25 300)"
          fill="#45ec9f"
        />
      </G>
    </Svg>
  );
};

const Memo = memo(SvgComponent);
export default Memo;
