export interface ScrollIndicatorRef {
  runAnimation: () => void;
  resetAnimation: () => void;
}

export interface ScrollIndicatorProps {
  scrollDirection?: "down" | "up";
}

export interface UseScrollIndicatorAnimationParams {
  ref: React.ForwardedRef<ScrollIndicatorRef>;
  scrollDirection: "down" | "up";
}
