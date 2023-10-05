import React from "react";

import AlignCamera from "./AlignCamera";
import Angry from "./Angry";
import Award from "./Award";
import ArrowUp from "./ArrowUp";
import CheckLine from "./CheckLine";
import CheckList from "./CheckList";
import ChevronDown from "./ChevronDown";
import Disgusted from "./Disgusted";
import Error from "./Error";
import Facebook from "./Facebook";
import Happy from "./Happy";
import Instagram from "./Instagram";
import Like from "./Like";
import Logo from "./Logo";
import Menu from "./Menu";
import MenuBack from "./MenuBack";
import MenuClose from "./MenuClose";
import Next from "./Next";
import Play from "./Play";
import Prev from "./Prev";
import Sad from "./Sad";
import Surprised from "./Surprised";
import Swipe from "./Swipe";
import Eurofarma from "./Eurofarma";
import { ComponentObj, IconProps } from "./types";

//Import the component name as the key of iconsEnum and add it to the componentObj
const componentObj: ComponentObj = {
  AlignCamera,
  Award,
  CheckLine,
  ChevronDown,
  CheckList,
  Error,
  Facebook,
  Instagram,
  Happy,
  Logo,
  Menu,
  MenuBack,
  MenuClose,
  Sad,
  Disgusted,
  Surprised,
  Angry,
  ArrowUp,
  Prev,
  Next,
  Like,
  Play,
  Swipe,
  Eurofarma,
};

const Icon = ({ name, ...props }: IconProps) => {
  if (!componentObj[name]) return null;
  return React.createElement(componentObj[name], { ...props, testID: name });
};

export default Icon;
