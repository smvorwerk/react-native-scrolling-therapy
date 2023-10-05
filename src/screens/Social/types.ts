import { CameraAlignmentEnum } from "~/enums";

export type Expressions = {
  [key: string]: (expression: string) => void;
};

export type ExpressionCall = {
  [key: string]: () => void;
};

export type Ready = {
  action: "ready";
  ready: boolean;
};

export type Start = {
  action: "start";
  start: boolean;
};

export type Load = {
  action: "load";
  load: boolean;
};

export type CameraAlignment = {
  action: "cameraAlignment";
  cameraAlignment: CameraAlignmentEnum;
};

export type Expression = {
  action: "expression";
  expression: string;
};

type Point = {
  _x: number;
  _y: number;
};

export type RecordLandMark = {
  topLeft: Point;
  topRight: Point;
  leftEyeBrow: Point;
  rightEyeBrow: Point;
  leftEye: Point;
  rightEye: Point;
  topNose: Point;
  leftNose: Point;
  rightNose: Point;
  bottomMouth: Point;
  bottomJaw: Point;
  width: number;
  height: number;
};

export type LandMarks = {
  action: "landmarks";
  landmarks: RecordLandMark;
};

export type Login = {
  action: "login";
  is_user_logged_in: string;
}

export type WebviewMessage =
  | Ready
  | Start
  | Load
  | CameraAlignment
  | Expression
  | LandMarks
  | Login;

export type Actions = { [key: string]: (expression: WebviewMessage) => void };
