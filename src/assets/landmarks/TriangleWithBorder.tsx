import * as React from "react";
import { memo } from "react";

import Svg, { Path, SvgProps } from "react-native-svg";

const SvgComponent = (props: SvgProps) => {
  return (
    <Svg width="14.146" height="12.123" viewBox="0 0 14.146 12.123" {...props}>
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
    </Svg>
  );
};

const Memo = memo(SvgComponent);
export default Memo;
