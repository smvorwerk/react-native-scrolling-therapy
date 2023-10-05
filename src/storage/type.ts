export interface Count {
  [expression: string]: number;
}

export interface UserProgress {
  date: string;
  timing: number;
  extraTime?: number;
  count: Count;
}

export interface UserTutorial {
  done: boolean;
}

export interface UserHasAcceptedTAC {
  accepted: boolean;
}
