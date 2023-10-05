import * as React from "react";
import { memo } from "react";

import Svg, { Path, SvgProps } from "react-native-svg";

const SvgComponent = (props: SvgProps) => {
  const { fill = "#fff", stroke = "#fff" } = props;
  return (
    <Svg width={37} height={37} viewBox="0 0 37 37" {...props}>
      <Path
        data-name="Path 208"
        d="M29.207 36.5H7.793A7.315 7.315 0 0 1 .5 29.207V7.793A7.315 7.315 0 0 1 7.793.5h21.414A7.315 7.315 0 0 1 36.5 7.793v21.414a7.315 7.315 0 0 1-7.293 7.293"
        fill="none"
        stroke={stroke}
      />
      <Path
        data-name="Path 209"
        d="M18.449 33.718a2.008 2.008 0 1 1 2.007-2.011 2.01 2.01 0 0 1-2.008 2.008m0-3.576a1.568 1.568 0 1 0 1.568 1.568 1.57 1.57 0 0 0-1.568-1.568"
        fill={fill}
      />
      <Path
        data-name="Path 210"
        d="M16.66 31.711a1.776 1.776 0 0 1 .022-.264h-6.494v.527h6.491a1.776 1.776 0 0 1-.022-.264"
        fill={fill}
      />
      <Path
        data-name="Path 211"
        d="M20.214 31.447a1.616 1.616 0 0 1 0 .527h6.494v-.527Z"
        fill={fill}
      />
      <Path
        data-name="Path 212"
        d="M25.588 26.605a5.037 5.037 0 0 1-.741 2.7h1.367a6.11 6.11 0 0 0 .6-2.7c0-8.8-14.582-3.671-14.582-11.217 0-3.2 2.549-5.133 6.39-5.133 3.773 0 6.22 1.87 6.526 5.3a.3.3 0 0 0 .306.272h.578c.2 0 .306-.1.272-.306-.306-4.011-3.229-6.288-7.648-6.288-4.589 0-7.648 2.345-7.648 6.187 0 8.6 14.582 3.467 14.582 11.183"
        fill={fill}
      />
      <Path
        data-name="Path 213"
        d="M12.453 29.308a6.253 6.253 0 0 1-1.038-3.111.3.3 0 0 0-.306-.272h-.612c-.2 0-.272.1-.272.306a7.605 7.605 0 0 0 .884 3.078Z"
        fill={fill}
      />
      <Path
        data-name="Path 214"
        d="M24.969 3.536c-1.038 1.88-3.318 2.985-6.314 2.985-3.094 0-5.231-1.163-6.349-2.985h-1.315c1.215 2.439 3.806 4.005 7.629 4.005 3.774 0 6.6-1.5 7.692-4.005Z"
        fill={fill}
      />
    </Svg>
  );
};

const Memo = memo(SvgComponent);
export default Memo;
