import * as React from "react";
import { memo } from "react";

import Svg, { Path, SvgProps } from "react-native-svg";
const SvgComponent = (props: SvgProps) => {
  const { fill = "#fff" } = props;
  return (
    <Svg width={44} height={24} viewBox="0 0 500 1017.78" {...props}>
      <Path
        d="M1024 512C1024 229.23 794.77 0 512 0S0 229.23 0 512c0 255.55 187.23 467.37 432 505.78V660H302V512h130V399.2C432 270.88 508.44 200 625.39 200 681.41 200 740 210 740 210v126h-64.56c-63.6 0-83.44 39.47-83.44 79.96V512h142l-22.7 148H592v357.78c244.77-38.41 432-250.22 432-505.78Z"
        fill={fill}
      />
    </Svg>
  );
};
const Memo = memo(SvgComponent);
export default Memo;
