import { IconsEnum } from "~/enums";

export interface ActionIndicatorRef {
  runAnimation: () => void;
  resetAnimation: () => void;
}

export interface ActionIndicatorProps {
  icon?: IconsEnum;
}

export interface UseActionIndicatorAnimationParams {
  ref: React.ForwardedRef<ActionIndicatorRef>;
}
