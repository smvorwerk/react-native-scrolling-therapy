import * as React from "react";
import { memo } from "react";

import Svg, { Path, SvgProps } from "react-native-svg";

const SvgComponent = (props: SvgProps) => {
  return (
    <Svg width="5" height="5" viewBox="0 0 5 5" {...props}>
      <Path
        d="M5.218,6.38l-2.5-5h5Z"
        transform="translate(-2.718 -1.38)"
        fill="#45ec9f"
      />
    </Svg>
  );
};

const Memo = memo(SvgComponent);
export default Memo;
