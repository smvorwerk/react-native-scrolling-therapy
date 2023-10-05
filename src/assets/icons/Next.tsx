import * as React from "react";
import { memo } from "react";

import Svg, { G, Path, SvgProps } from "react-native-svg";

const SvgComponent = (props: SvgProps) => {
  const { fill = "#1e1e1e" } = props;
  return (
    <Svg width={10.674} height={20.328} viewBox="0 0 10.674 20.328" {...props}>
      <G transform="translate(0.707 19.621) rotate(-90)">
        <Path
          data-name="Path 263"
          d="M7357.533,3954.476l-9.467,9.473,9.467,9.441"
          transform="translate(-3954.476 7357.533) rotate(-90)"
          fill="none"
          stroke={fill}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1"
        />
      </G>
    </Svg>
  );
};

const Memo = memo(SvgComponent);
export default Memo;
