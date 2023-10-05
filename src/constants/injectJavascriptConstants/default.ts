export const runOnMount = `
  window.ReactNativeWebView.postMessage('{"action": "load", "load": "true"}');
  true;
`;

export const runOnLoad = `
  window.ReactNativeWebView.postMessage('{"action": "start", "start": "true"}');
  true;
`;

export const addChangeAlignment = `
  window.onAlignmentChange = (alignment) => window.ReactNativeWebView.postMessage(alignment);
  true;
`;

export const addChangeExpEvent = `
  window.onExpressionChange = (exp) => window.ReactNativeWebView.postMessage('{"action": "expression", "expression": "' + exp + '"}');
  true;
`;

export const addChangeLandmarksEvent = `
  window.onLandmarksChange = (landmarks) => window.ReactNativeWebView.postMessage(landmarks);
  true;
`;
