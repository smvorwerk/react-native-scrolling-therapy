import * as React from "react";
import { memo } from "react";

import Svg, { ClipPath, Defs, G, Path, SvgProps } from "react-native-svg";

const SvgComponent = (props: SvgProps) => {
  const { fill = "#7e57ff" } = props;
  return (
    <Svg width={37} height={37} viewBox="0 0 37 37" {...props}>
      <Defs>
        <ClipPath id="a">
          <Path data-name="Rectangle 43" fill={fill} d="M0 0h37v37H0z" />
        </ClipPath>
      </Defs>
      <G data-name="Group 45" clipPath="url(#a)">
        <Path
          data-name="Path 250"
          d="M37 18.5a18.514 18.514 0 1 0-10.163 16.51 1.9 1.9 0 0 0 1.156.391 1.912 1.912 0 0 0 1.872-2.316A18.476 18.476 0 0 0 37 18.5m-9.006 15.668a.682.682 0 1 1 .682-.682.677.677 0 0 1-.682.682m.866-2.388a1.911 1.911 0 0 0-2.781 1.706v.06a16.922 16.922 0 1 1 2.778-1.766M12.685 18.441a.873.873 0 0 1 1.506.88 3.9 3.9 0 0 1-6.221.958c-.836-.754.4-1.983 1.233-1.233a2.142 2.142 0 0 0 3.482-.605m9.711.88a.873.873 0 0 1 1.506-.88 2.142 2.142 0 0 0 3.482.605c.832-.751 2.069.48 1.233 1.233a3.9 3.9 0 0 1-6.221-.958m-11.53 8.933c-.941.854-2.342-.541-1.4-1.4a14.405 14.405 0 0 1 18.347-.971c1 .762.013 2.478-1 1.707a12.444 12.444 0 0 0-15.951.662M9.056 13.134c-.846-.742.392-1.97 1.233-1.233l6.43 5.637c.846.741-.392 1.97-1.233 1.233l-6.43-5.637m18.917-.868c.947-.611 1.82.9.88 1.506l-7.186 4.635c-.947.611-1.82-.9-.88-1.506l7.186-4.635"
          fill={fill}
        />
      </G>
    </Svg>
  );
};

const Memo = memo(SvgComponent);
export default Memo;
