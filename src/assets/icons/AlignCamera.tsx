import * as React from "react";
import { memo } from "react";

import Svg, { ClipPath, Defs, G, Path, Rect, SvgProps } from "react-native-svg";

const SvgComponent = (props: SvgProps) => {
  const { fill = "#7e57f7" } = props;
  return (
    <Svg
      id="icon_move_camera_left"
      data-name="icon_move_camera left"
      width={49}
      height={49}
      viewBox="0 0 49 49"
      {...props}>
      <Defs>
        <ClipPath id="clip-path">
          <Rect
            id="Rectangle_45"
            data-name="Rectangle 45"
            width={49}
            height={49}
            fill={fill}
          />
        </ClipPath>
      </Defs>
      <G id="Group_47" data-name="Group 47" clip-path="url(#clip-path)">
        <Path
          id="Path_252"
          data-name="Path 252"
          d="M33.917,49H14.858a3.953,3.953,0,0,1-3.948-3.948V3.948A3.953,3.953,0,0,1,14.858,0H33.917a3.953,3.953,0,0,1,3.948,3.948V45.617a3.953,3.953,0,0,1-3.948,3.948M14.858,2.216a1.734,1.734,0,0,0-1.732,1.732V45.617a1.734,1.734,0,0,0,1.732,1.732H33.917a1.734,1.734,0,0,0,1.732-1.732V3.948a1.734,1.734,0,0,0-1.732-1.732Zm13,3.165a1.108,1.108,0,0,0-1.108-1.108H22.03a1.108,1.108,0,0,0,0,2.216h4.716a1.108,1.108,0,0,0,1.108-1.108M48.669,23.992l-2.551-2.508a1.108,1.108,0,1,0-1.554,1.58l.62.61H39.3V25.89h5.767l-.477.442a1.108,1.108,0,0,0,1.506,1.626L48.645,25.6a1.108,1.108,0,0,0,.024-1.6M8.092,23.674H1.108a1.108,1.108,0,0,0,0,2.216H9.477V23.674Z"
          fill={fill}
        />
      </G>
    </Svg>
  );
};

const Memo = memo(SvgComponent);
export default Memo;
