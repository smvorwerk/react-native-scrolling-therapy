import * as React from "react";
import { memo } from "react";

import Svg, {
  Circle,
  ClipPath,
  Defs,
  G,
  Path,
  Rect,
  SvgProps,
} from "react-native-svg";

const SvgComponent = (props: SvgProps) => {
  const { fill = "#45EC9F" } = props;
  return (
    <Svg width="49" height="49" viewBox="0 0 49 49" {...props}>
      <Defs>
        <ClipPath id="clip-path">
          <Rect
            id="Rectangle_64"
            data-name="Rectangle 64"
            width="21.974"
            height="24"
            fill={fill}
          />
        </ClipPath>
      </Defs>
      <G
        id="alt_play_in_bubble"
        data-name="alt play in bubble"
        transform="translate(-314 -385)">
        <Circle
          cx="24.5"
          cy="24.5"
          r="23.5"
          fill="none"
          stroke={fill}
          stroke-width="2"
          transform="translate(314 385)"
        />
        <G
          id="icon_play_no_face"
          data-name="icon_play_no face"
          transform="translate(329 397.5)">
          <G id="Group_68" data-name="Group 68" clip-path="url(#clip-path)">
            <Path
              id="Path_260"
              data-name="Path 260"
              d="M4.484,24a4.472,4.472,0,0,1-2.242-.608A4.439,4.439,0,0,1,0,19.509V4.493A4.438,4.438,0,0,1,2.242.609a4.437,4.437,0,0,1,4.485,0l13,7.508a4.485,4.485,0,0,1,0,7.768l-13,7.508A4.472,4.472,0,0,1,4.484,24m0-21.692A2.189,2.189,0,0,0,2.3,4.493V19.509A2.181,2.181,0,0,0,5.575,21.4l13-7.508a2.181,2.181,0,0,0,0-3.777L5.575,2.6a2.175,2.175,0,0,0-1.09-.3"
              transform="translate(0 0)"
              fill={fill}
            />
          </G>
        </G>
      </G>
    </Svg>
  );
};

const Memo = memo(SvgComponent);
export default Memo;
