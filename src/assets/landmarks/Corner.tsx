import * as React from "react";
import { memo } from "react";

import Svg, { Path, SvgProps } from "react-native-svg";

const SvgComponent = (props: SvgProps) => {
  return (
    <Svg width="22.407" height="21.489" viewBox="0 0 22.407 21.489" {...props}>
      <Path
        data-name="Path 177"
        d="M2,21.489H0V8A8.181,8.181,0,0,1,8.337,0h14.07V1.918H8.337A6.219,6.219,0,0,0,2,8Z"
        fill="#45ec9f"
      />
    </Svg>
  );
};

const Memo = memo(SvgComponent);
export default Memo;
