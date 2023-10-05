import * as React from "react";
import { memo } from "react";

import Svg, { G, Path, Rect, SvgProps } from "react-native-svg";

const SvgComponent = (props: SvgProps) => {
  const { stroke = "#fff" } = props;

  return (
    <Svg width={36} height={36} viewBox="0 0 36 36" {...props}>
      <G data-name="Rectangle 47" fill="none" stroke={stroke}>
        <Rect width={36} height={36} rx={6} stroke="none" />
        <Rect x={0.5} y={0.5} width={35} height={35} rx={5.5} />
      </G>
      <Path
        data-name="Path 256"
        d="M22.967 8.476 13.5 17.949l9.467 9.441"
        fill="none"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Memo = memo(SvgComponent);
export default Memo;
