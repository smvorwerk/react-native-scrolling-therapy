import * as React from "react";
import { memo } from "react";

import Svg, { G, Path, SvgProps } from "react-native-svg";

const SvgComponent = (props: SvgProps) => {
  const {
    fill = "#45ec9f",
    width = 231,
    height = 302.689,
    viewBox = "0 0 231 302.689",
  } = props;

  return (
    <Svg width={width} height={height} viewBox={viewBox} {...props}>
      <G data-name="facial recognition" transform="translate(-83.597 -191)">
        <G data-name="focus corner group" transform="translate(104 303)">
          <G id="icon_focus_corner" transform="translate(-19 -112)">
            <Path
              data-name="Path 177"
              d="M2,21.489H0V8A8.181,8.181,0,0,1,8.337,0h14.07V1.918H8.337A6.219,6.219,0,0,0,2,8Z"
              fill={fill}
            />
          </G>
          <G
            data-name="icon_focus_corner"
            transform="translate(186.407 145.206) rotate(180)">
            <Path
              data-name="Path 177"
              d="M2,22.407H0V8.337A8.346,8.346,0,0,1,8.337,0h14.07V2H8.337A6.344,6.344,0,0,0,2,8.337Z"
              fill={fill}
            />
          </G>
          <G
            data-name="icon_focus_corner"
            transform="translate(186.407 -112) rotate(90)">
            <Path
              data-name="Path 177"
              d="M2,22.407H0V8.337A8.346,8.346,0,0,1,8.337,0h14.07V2H8.337A6.344,6.344,0,0,0,2,8.337Z"
              fill={fill}
            />
          </G>
          <G
            data-name="icon_focus_corner"
            transform="translate(-19 145.206) rotate(-90)">
            <Path
              data-name="Path 177"
              d="M2,22.407H0V8.337A8.346,8.346,0,0,1,8.337,0h14.07V2H8.337A6.344,6.344,0,0,0,2,8.337Z"
              fill={fill}
            />
          </G>
        </G>
        <G data-name="recognition points">
          <Path
            d="M5.218,6.38l-2.5-5h5Z"
            transform="translate(191.879 432.309)"
            fill={fill}
          />
          <Path
            data-name="triangle"
            d="M5.218,6.38l-2.5-5h5Z"
            transform="translate(195.879 487.309)"
            fill={fill}
          />
          <Path
            data-name="triangle"
            d="M5.218,6.38l-2.5-5h5Z"
            transform="translate(267.879 425.309)"
            fill={fill}
          />
          <Path
            data-name="triangle"
            d="M5.218,6.38l-2.5-5h5Z"
            transform="translate(114.879 425.309)"
            fill={fill}
          />
          <Path
            data-name="triangle"
            d="M5.218,6.38l-2.5-5h5Z"
            transform="translate(80.879 399.309)"
            fill={fill}
          />
          <Path
            data-name="triangle"
            d="M5.218,6.38l-2.5-5h5Z"
            transform="translate(306.879 395.309)"
            fill={fill}
          />
          <Path
            data-name="triangle"
            d="M5.218,6.38l-2.5-5h5Z"
            transform="translate(286.879 281.309)"
            fill={fill}
          />
          <Path
            data-name="triangle"
            d="M5.218,6.38l-2.5-5h5Z"
            transform="translate(223.879 301.309)"
            fill={fill}
          />
          <Path
            data-name="triangle"
            d="M5.218,6.38l-2.5-5h5Z"
            transform="translate(155.879 301.309)"
            fill={fill}
          />
          <Path
            data-name="triangle"
            d="M5.218,6.38l-2.5-5h5Z"
            transform="translate(98.879 281.309)"
            fill={fill}
          />
          <Path
            data-name="triangle"
            d="M5.218,6.38l-2.5-5h5Z"
            transform="translate(263.879 210.309)"
            fill={fill}
          />
          <Path
            data-name="triangle"
            d="M5.218,6.38l-2.5-5h5Z"
            transform="translate(104.879 218.309)"
            fill={fill}
          />
          <Path
            data-name="triangle"
            d="M5.218,6.38l-2.5-5h5Z"
            transform="translate(182.879 194.309)"
            fill={fill}
          />
          <G
            data-name="icon_tringle with border"
            transform="translate(258.427 372.063)">
            <Path
              data-name="Path 223"
              d="M4.62,5.185l-1.9-3.8h3.8Z"
              transform="translate(2.452 1.246)"
              fill={fill}
            />
            <Path
              data-name="Path 224"
              d="M.829.476H13.316L7.073,11.18ZM0,0,7.073,12.123,14.146,0Z"
              fill={fill}
            />
          </G>
          <G
            data-name="icon_tringle with border"
            transform="translate(121.427 378.125)">
            <Path
              data-name="Path 223"
              d="M4.62,5.185l-1.9-3.8h3.8Z"
              transform="translate(2.452 1.246)"
              fill={fill}
            />
            <Path
              data-name="Path 224"
              d="M.829.476H13.316L7.073,11.18ZM0,0,7.073,12.123,14.146,0Z"
              fill={fill}
            />
          </G>
          <G
            data-name="icon_tringle with border"
            transform="translate(180.427 231.125)">
            <Path
              data-name="Path 223"
              d="M4.62,5.185l-1.9-3.8h3.8Z"
              transform="translate(2.452 1.246)"
              fill={fill}
            />
            <Path
              data-name="Path 224"
              d="M.829.476H13.316L7.073,11.18ZM0,0,7.073,12.123,14.146,0Z"
              fill={fill}
            />
          </G>
          <G data-name="connector lines" opacity="0.5">
            <Path
              data-name="connector line"
              d="M.636-.214h.5L.5,31.125H0Z"
              transform="translate(187.25 200)"
              fill={fill}
            />
            <Path
              data-name="connector line"
              d="M-.474,6.016h.5L4.065,57.64h-.5Z"
              transform="translate(197.25 431.272)"
              fill={fill}
            />
            <Path
              data-name="connector line"
              d="M-.283-35.038h.5L.5,31.125H0Z"
              transform="translate(193.273 304.621) rotate(90)"
              fill={fill}
            />
            <Path
              data-name="connector line"
              d="M5.11,41.936h.5L.5,116.2H0Z"
              transform="translate(237.534 428.689) rotate(90)"
              fill={fill}
            />
            <Path
              data-name="connector line"
              d="M-.5,37.457H0l5.607,72.95h-.5Z"
              transform="translate(309.534 428.689) rotate(90)"
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
