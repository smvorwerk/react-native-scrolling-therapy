import * as React from "react";
import { memo } from "react";

import Svg, { G, Path, Rect, SvgProps } from "react-native-svg";

const SvgComponent = (props: SvgProps) => {
  const { stroke = "#fff" } = props;
  return (
    <Svg width={36} height={36} viewBox="0 0 36 36"{...props}>
      <G data-name="Rectangle 47" fill="none" stroke={stroke}>
        <Rect width={36} height={36} rx={6} stroke="none" />
        <Rect x={0.5} y={0.5} width={35} height={35} rx={5.5} />
      </G>
      <Path
        data-name="Path 253"
        d="m8.504 27.498 19-19"
        fill="none"
        stroke={stroke}
        strokeLinecap="round"
      />
      <Path
        data-name="Path 254"
        d="m8.501 8.393 19.003 19.003"
        fill="none"
        stroke={stroke}
        strokeLinecap="round"
      />
    </Svg>
  );
};

const Memo = memo(SvgComponent);
export default Memo;
