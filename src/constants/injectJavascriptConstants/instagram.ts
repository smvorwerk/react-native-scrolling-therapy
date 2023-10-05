import { Dimensions } from "react-native";

const toleranceHeight = Math.ceil(Dimensions.get("window").height / 3);
const deviceWidth = Dimensions.get("window").width;

export const DOM_HELPER_IG = `
  window.InstagramDOMHelper = {
    getArticles: () => Array.from(document.getElementsByTagName('article')),
    like: (item) => item.querySelectorAll('div[role="button"][tabindex="0"] div span svg')[0].parentElement.click(),
    next: (item) => item.getElementsByClassName('_afxw').length > 0 && item.getElementsByClassName('_afxw')[0].click(),
    scrollTo: (pos) => window.scrollTo({ top: pos + 1, left: 0, behavior: 'smooth' }),
    getElementPosition: (item) => item.getBoundingClientRect().top + window.pageYOffset - item.ownerDocument.documentElement.clientTop,
    getElementHeight: (item) => item.getBoundingClientRect().height,
    activeElement: (item) => item.style.border = '2px solid #e122cf',
    unactiveAllElements: (articles) => articles.forEach(el => (el.style.border = '2px solid transparent')),
  };

  window.InstagramDOMHelper.unactiveAllElements(window.InstagramDOMHelper.getArticles());

  document.addEventListener('scroll', event => {
    const articles = window.InstagramDOMHelper.getArticles();
    window.InstagramDOMHelper.unactiveAllElements(articles);
    for (let item of articles) {
      const pos = window.InstagramDOMHelper.getElementPosition(item);
      if (pos + ${toleranceHeight} >= window.pageYOffset) {
        window.InstagramDOMHelper.activeElement(item);
        break;
      }
    }
  });

  true;
`;

export const RUN_ON_START_IG = `
  (() => {
    document.body.style.maxWidth='${deviceWidth}px';

    const buttons = Array.from(document.getElementsByTagName('button'));
    for (let btn of buttons) {
      if (btn.innerHTML.includes("Instagram")) btn.remove();
    }

    const openAppLink = document.getElementsByClassName('_abpk');
    if (openAppLink.length > 0) openAppLink[0].remove();
  })();
  true;
`;

export const SCROLL_IG = `
  (() => {
    const articles = window.InstagramDOMHelper.getArticles();
    for (let item of articles) {
      const pos = window.InstagramDOMHelper.getElementPosition(item);
      if (window.pageYOffset <= pos) {
        if (pos - ${toleranceHeight} <= window.pageYOffset) {
          const height = window.InstagramDOMHelper.getElementHeight(item);
          window.InstagramDOMHelper.scrollTo(pos + height);
        }
        else {
          window.InstagramDOMHelper.scrollTo(pos);
        }

        break;
      }
    }
    true;
  })()
`;

export const LIKE_IG = `
  (() => {
    const articles = window.InstagramDOMHelper.getArticles();
    for (let item of articles) {
      const pos = window.InstagramDOMHelper.getElementPosition(item);
      if (pos + ${toleranceHeight} >= window.pageYOffset) {
        window.InstagramDOMHelper.like(item);
        break;
      }
    }
    true;
  })()
`;

export const NEXT_IG = `
  (() => {  
    const articles = window.InstagramDOMHelper.getArticles();
    for (let item of articles) {
      const pos = window.InstagramDOMHelper.getElementPosition(item);
      if (pos + ${toleranceHeight} >= window.pageYOffset) {
        window.InstagramDOMHelper.next(item);
        break;
      }
    }
    true;
  })()
`;

export const SCROLL_UP_IG = `
  (() => {
    let i = 0;
    const articles = window.InstagramDOMHelper.getArticles();
    for (let item of articles) {
      const pos = window.InstagramDOMHelper.getElementPosition(item);
      if (pos + ${toleranceHeight} >= window.pageYOffset) {
        if (i <= 0) { i = 0; }
        else { i--; }
        const backPos = window.InstagramDOMHelper.getElementPosition(articles[i]);
        window.InstagramDOMHelper.scrollTo(backPos);
        break;
      }
      i++;
    }
    true;
  })()
`;

export const PLAY_IG = `
  (() => {
    const articles = window.InstagramDOMHelper.getArticles();
    for (let item of articles) {
      const pos = window.InstagramDOMHelper.getElementPosition(item);
      if (pos + ${toleranceHeight} >= window.pageYOffset) {
        const videoElement = item.getElementsByTagName('video');
        if (videoElement.length > 0) {
          const video = videoElement[0];
          const isVideoPlaying = !!(video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2);
          if (!isVideoPlaying) { video.play(); }
          else { video.pause(); }
        }
        break;
      }
    }
    true;
  })()
`;

export const IS_USER_LOGGED_IN_IG = `
(() => {
  const allCookies = document.cookie;
  if (allCookies.includes('ds_user_id=')) {
    ReactNativeWebView.postMessage('{"action": "login", "is_user_logged_in": "true"}');
  }
  else {
    ReactNativeWebView.postMessage('{"action": "login", "is_user_logged_in": "false"}');
  }
  true;
})()
`;
