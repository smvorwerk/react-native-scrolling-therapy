import * as React from "react";
import { memo } from "react";

import Svg, { G, Path, SvgProps } from "react-native-svg";

const SvgComponent = (props: SvgProps) => {
  const { stroke = "#fff" } = props;
  return (
    <Svg
      width={20.328}
      height={10.674}
      viewBox="0 0 20.328 10.674"
      {...props}>
      <G transform="translate(0.707 0.707)" stroke={stroke}>
        <Path
          data-name="Path 263"
          d="M7357.533,3954.476l-9.467,9.473,9.467,9.441"
          transform="translate(-3954.476 7357.533) rotate(-90)"
          fill="none"
          stroke={stroke}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width={1}
        />
      </G>
    </Svg>
  );
};

const Memo = memo(SvgComponent);
export default Memo;
